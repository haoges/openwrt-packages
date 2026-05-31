'use strict';
'require view';
'require form';
'require uci';
'require rpc';

var callServiceList = rpc.declare({
    object: 'service',
    method: 'list',
    params: ['name'],
    expect: { '': {} }
});

return view.extend({
    load: function() {
        return Promise.all([
            uci.load('homebox'),
            callServiceList('homebox')
        ]);
    },

    render: function(data) {
        var m, s, o;
        var service = data[1]['homebox'];

        m = new form.Map('homebox', _('HomeBox'), _('Home network speed test tool'));

        s = m.section(form.TypedSection, 'homebox', _('Settings'));
        s.anonymous = true;

        o = s.option(form.Flag, 'enabled', _('Enable'));
        o.rmempty = false;

        o = s.option(form.Value, 'port', _('Port'));
        o.datatype = 'port';
        o.default = '3300';

		// 跳转按钮 (直接放在此 Section)
        o = s.option(form.Button, '_open', _('进入测速'));
        o.inputtitle = _('打开 Web UI');
        o.inputstyle = 'apply';
        o.onclick = function() {
            // 实时获取当前输入的端口，如果没有则取默认 3300
            var port = uci.get('homebox', 'main', 'port') || '3300';
            var host = window.location.hostname;
            var protocol = window.location.protocol;
            // 兼容 IPv6 格式
            var displayHost = (host.indexOf(':') !== -1) ? '[' + host + ']' : host;
            var url = protocol + '//' + displayHost + ':' + port;
            window.open(url, '_blank');
        };

        return m.render();
    }
});
