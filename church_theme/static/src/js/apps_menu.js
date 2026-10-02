/** @odoo-module **/

import { Component, useEffect, useRef, useState } from "@odoo/owl";
import { useService } from "@web/core/utils/hooks";
import { session } from "@web/session";
import { NavBar } from "@web/webclient/navbar/navbar";

import { ChurchAppIcon } from "./app_icon";

function companyName() {
    const companies = session.user_companies;
    if (!companies) {
        return "";
    }
    const current = companies.allowed_companies?.[companies.current_company];
    return current?.name || "";
}

export class ChurchAppsMenu extends Component {
    static template = "church_theme.AppsMenu";
    static components = { ChurchAppIcon };
    static props = {
        apps: { type: Array },
        currentApp: { type: Object, optional: true },
    };

    setup() {
        this.menuService = useService("menu");
        this.search = useRef("search");
        this.companyName = companyName();
        this.state = useState({ open: false, query: "" });
        useEffect(
            () => {
                document.body.classList.toggle("o_church_apps_open", this.state.open);
                if (!this.state.open) {
                    return () => document.body.classList.remove("o_church_apps_open");
                }
                this.search.el?.focus();
                const onKeyDown = (event) => {
                    if (event.key === "Escape") {
                        this.close();
                    }
                };
                document.addEventListener("keydown", onKeyDown);
                return () => {
                    document.removeEventListener("keydown", onKeyDown);
                    document.body.classList.remove("o_church_apps_open");
                };
            },
            () => [this.state.open]
        );
    }

    get filteredApps() {
        const query = this.state.query.trim().toLowerCase();
        const apps = this.props.apps || [];
        if (!query) {
            return apps;
        }
        return apps.filter((app) => (app.name || "").toLowerCase().includes(query));
    }

    toggle() {
        if (this.state.open) {
            this.close();
        } else {
            this.state.open = true;
        }
    }

    close() {
        this.state.open = false;
        this.state.query = "";
    }

    appHref(app) {
        const path = app.actionPath || (app.actionID ? `action-${app.actionID}` : "");
        return path ? `/odoo/${path}` : "#";
    }

    selectApp(app) {
        this.menuService.selectMenu(app);
        this.close();
    }
}

Object.assign(NavBar.components, { ChurchAppsMenu, ChurchAppIcon });
