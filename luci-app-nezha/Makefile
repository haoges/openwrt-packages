#

include $(TOPDIR)/rules.mk

PKG_NAME:=luci-app-nezha-agent
LUCI_TITLE:=Nezha Agent is the client version 2 of the Nezha Panel.
LUCI_DEPENDS:=+nezha-agent
LUCI_PKGARCH:=all
PKG_RELEASE:=1
PKG_MAINTAINER:=<https://github.com/>

# --- 动态获取最新版本号的核心逻辑 ---
ifeq ($(filter clean distclean help menuconfig,$(MAKECMDGOALS)),)
  PKG_VERSION:=$(shell curl -sIL -o /dev/null -w '%{url_effective}' "https://github.com/nezhahq/agent/releases/latest" | sed 's|.*/||' | sed 's/^v//')
endif
# 默认保底版本号
PKG_VERSION?=2.0


include $(TOPDIR)/feeds/luci/luci.mk

# call BuildPackage - OpenWrt buildroot signature
