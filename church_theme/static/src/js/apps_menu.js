/** @odoo-module **/

import { patch } from "@web/core/utils/patch";
import { AppMenuItem } from "@web_responsive/components/apps_menu_item/apps_menu_item.esm";

import { iconUrl } from "./app_icons";

patch(AppMenuItem.prototype, {
    setup() {
        super.setup();
        this.webIconData = iconUrl(this.props.app);
    },

    onUpdateProps(nextProps) {
        super.onUpdateProps(nextProps);
        this.webIconData = iconUrl(nextProps.app);
    },
});
