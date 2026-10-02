/** @odoo-module **/

import { Component, markup } from "@odoo/owl";

import { iconSvg } from "./app_icons";

export class ChurchAppIcon extends Component {
    static template = "church_theme.AppIcon";
    static props = {
        app: Object,
        size: { type: String, optional: true },
    };

    get svg() {
        return markup(iconSvg(this.props.app));
    }
}
