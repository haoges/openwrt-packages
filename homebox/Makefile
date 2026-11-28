
include $(TOPDIR)/rules.mk

PKG_NAME:=homebox
PKG_VERSION:=0.2.0
PKG_RELEASE:=1

PKG_LICENSE:=Proprietary
PKG_LICENSE_FILES:=LICENSE
PKG_MAINTAINER:=XGHeaven

# ==========================
# 架构适配
# ==========================

ifeq ($(ARCH),aarch64)
  PKG_ARCH:=arm64
  PKG_HASH:=a8682498ae848489dcc4a5483f4e3a657cf4cf0a25af49a38f6751283b1046e8
else ifeq ($(ARCH),x86_64)
  PKG_ARCH:=amd64
  PKG_HASH:=7ecaf4cf2dc613fef060642bc999acc8b3e8bb93570be83ded1b7f8831eb0184
endif

PKG_SOURCE:=homebox-linux-$(PKG_ARCH)-musl.tar.gz
PKG_SOURCE_URL:=https://github.com/XGHeaven/homebox/releases/download/v$(PKG_VERSION)/
PKG_BUILD_DIR:=$(BUILD_DIR)/$(PKG_NAME)-$(PKG_ARCH)-$(PKG_VERSION)

include $(INCLUDE_DIR)/package.mk

# ==========================
# 软件包定义
# ==========================

define Package/$(PKG_NAME)
  SECTION:=net
  CATEGORY:=Network
  SUBMENU:=Speed Test
  TITLE:=Home Local Network Speed Test Tool
  URL:=https://github.com/XGHeaven/homebox
  DEPENDS:=@(x86_64||aarch64)
endef

define Package/$(PKG_NAME)/description
  A Toolbox for Home Local Networks Speed Test
endef

# ==========================
# 解压
# ==========================

define Build/Prepare
	$(INSTALL_DIR) $(PKG_BUILD_DIR)
	$(TAR) -zxf $(DL_DIR)/$(PKG_SOURCE) -C $(PKG_BUILD_DIR)
endef

# ==========================
# 跳过编译
# ==========================

define Build/Configure
endef

define Build/Compile
endef

# ==========================
# 安装
# ==========================

define Package/$(PKG_NAME)/install
	$(INSTALL_DIR) $(1)/usr/bin
	$(INSTALL_BIN) $(PKG_BUILD_DIR)/homebox-linux-$(PKG_ARCH)-musl $(1)/usr/bin/homebox
endef

$(eval $(call BuildPackage,$(PKG_NAME)))
