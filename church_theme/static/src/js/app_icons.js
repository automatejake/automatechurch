/** @odoo-module **/

const WINE = "#6e2433";
const BLUE = "#1b3a4b";
const GREEN = "#1e3d32";
const WOOD = "#3e2a1e";
const NIGHT = "#243044";
const GOLD = "#f4e4bc";
const FILLS = [BLUE, WINE, GREEN, WOOD, NIGHT];

const GLYPHS = {
    dome: `<path d="M16 2v4M12 6h8M16 6v3"/><path d="M8 16c0-5.2 16-5.2 16 0"/><path d="M6 24c1.6-6 18.4-6 20 0"/><path d="M11 24v-5h10v5"/><path d="M5 28h22"/>`,
    people: `<circle cx="11" cy="10" r="3.2"/><circle cx="21" cy="11" r="2.6"/><path d="M4.5 26c.8-5 5.2-7.2 6.5-7.2s5.6 2.2 6.4 7.2"/><path d="M16 26c.6-4.2 4-6.2 5-6.2s4.4 2 5 6.2"/>`,
    book: `<path d="M6 6h8.2c1.8 0 2.8 1.1 2.8 2.8V26"/><path d="M26 6h-8.2c-1.8 0-2.8 1.1-2.8 2.8V26"/><path d="M6 26c2.2-1.8 4.2-1.8 6.2-1.8H16"/><path d="M26 26c-2.2-1.8-4.2-1.8-6.2-1.8H16"/>`,
    bag: `<path d="M8 12h16l-1.3 14H9.3z"/><path d="M12 12c0-4.2 8-4.2 8 0"/>`,
    calendar: `<rect x="5" y="7" width="22" height="19" rx="2"/><path d="M5 13h22M11 4v5M21 4v5"/>`,
    box: `<path d="M6 11l10-5 10 5-10 5z"/><path d="M6 11v10l10 5 10-5V11"/><path d="M16 16v10"/>`,
    cart: `<circle cx="11" cy="26" r="2"/><circle cx="22" cy="26" r="2"/><path d="M4 6h3.2L10 20h13.5l2.8-9H9"/>`,
    columns: `<rect x="4" y="5" width="7" height="22" rx="1.4"/><rect x="13" y="5" width="7" height="14" rx="1.4"/><rect x="22" y="5" width="6" height="18" rx="1.4"/>`,
    chat: `<path d="M6 7h20v12H13l-7 5z"/>`,
    gear: `<circle cx="16" cy="16" r="3.4"/><path d="M16 4.5v3.2M16 24.3V27.5M4.5 16h3.2M24.3 16h3.2M7.8 7.8l2.2 2.2M22 22l2.2 2.2M24.2 7.8 22 10M10 22l-2.2 2.2"/>`,
    globe: `<circle cx="16" cy="16" r="11"/><path d="M5 16h22M16 5c3.2 3.6 3.2 18.4 0 22M16 5c-3.2 3.6-3.2 18.4 0 22"/>`,
    pos: `<rect x="5" y="8" width="22" height="13" rx="2"/><path d="M9 26h14M12 21v5M20 21v5M8 14h16"/>`,
    factory: `<path d="M4 28V16l6 4v-6l6 4V10l8 5v13"/><path d="M4 28h24"/>`,
    gift: `<rect x="5" y="14" width="22" height="12" rx="1.2"/><path d="M5 19h22M16 14v12"/><path d="M16 14c-3.6 0-5.4-4.6-1.8-4.6 2.6 0 1.8 4.6 1.8 4.6z"/><path d="M16 14c3.6 0 5.4-4.6 1.8-4.6-2.6 0-1.8 4.6-1.8 4.6z"/>`,
    card: `<rect x="4" y="7" width="24" height="18" rx="2"/><circle cx="12" cy="15" r="3"/><path d="M8 22c.8-2.2 2.2-3.2 4-3.2s3.2 1 4 3.2M18 13h7M18 17h7"/>`,
    clock: `<circle cx="16" cy="16" r="11"/><path d="M16 9v8l5 3"/>`,
    truck: `<path d="M3 20V10h14v10"/><path d="M17 14h6l4 5v5H17"/><circle cx="8" cy="24" r="2"/><circle cx="22" cy="24" r="2"/>`,
    wrench: `<path d="M19 8a4 4 0 0 1 5 5l-2.2 1.6-4.6-4.6z"/><path d="M16.6 12.2 7 23"/><circle cx="8" cy="24" r="2.6"/>`,
    mail: `<rect x="4" y="8" width="24" height="16" rx="2"/><path d="M5 10l11 8L27 10"/>`,
    clipboard: `<rect x="7" y="6" width="18" height="22" rx="2"/><rect x="12" y="3.5" width="8" height="4.5" rx="1"/><path d="M11 14h10M11 18h10M11 22h6"/>`,
    star: `<path d="M16 4.5l2.7 6.2 6.8.6-5.1 4.5 1.5 6.6L16 19.2l-5.9 3.2 1.5-6.6-5.1-4.5 6.8-.6z"/>`,
    document: `<path d="M9 4h10l6 6v18H9z"/><path d="M19 4v6h6M13 16h8M13 20h8"/>`,
    refresh: `<path d="M8 16a8 8 0 0 1 13.2-6"/><path d="M24 16a8 8 0 0 1-13.2 6"/><path d="M18.2 6.2H23V11"/><path d="M13.8 25.8H9V21"/>`,
    ticket: `<path d="M5 10h22v4.2a2.6 2.6 0 0 0 0 4.6V23H5v-4.2a2.6 2.6 0 0 0 0-4.6z"/><path d="M16 12.5v8" stroke-dasharray="1.8 1.8"/>`,
    grid: `<rect x="4" y="4" width="10" height="10" rx="1.4"/><rect x="18" y="4" width="10" height="10" rx="1.4"/><rect x="4" y="18" width="10" height="10" rx="1.4"/><rect x="18" y="18" width="10" height="10" rx="1.4"/>`,
    life: `<circle cx="16" cy="16" r="10"/><circle cx="16" cy="16" r="3.6"/><path d="M16 6v6.2M16 19.8V26M6 16h6.2M19.8 16H26"/>`,
    receipt: `<path d="M8 4h16v24l-2.6-1.8L18.5 28l-2.5-1.8L13.4 28 11 26.2 8 28z"/><path d="M12 10h8M12 14h8M12 18h5"/>`,
    bubble: `<path d="M6 6h18a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H13l-7 5z"/>`,
};

const MODULE_ICONS = {
    church_theme: ["dome", WINE],
    base: ["gear", WOOD],
    base_setup: ["gear", WOOD],
    web: ["grid", NIGHT],
    contacts: ["people", BLUE],
    crm: ["star", BLUE],
    sale: ["bag", WINE],
    sale_management: ["bag", WINE],
    account: ["book", WINE],
    account_accountant: ["book", WINE],
    accountant: ["book", WINE],
    stock: ["box", GREEN],
    purchase: ["cart", GREEN],
    project: ["columns", GREEN],
    hr: ["card", BLUE],
    hr_holidays: ["calendar", BLUE],
    hr_recruitment: ["people", BLUE],
    hr_attendance: ["clock", BLUE],
    hr_timesheet: ["clock", BLUE],
    hr_expense: ["receipt", WINE],
    calendar: ["calendar", GREEN],
    mail: ["chat", NIGHT],
    website: ["globe", NIGHT],
    website_sale: ["bag", WINE],
    point_of_sale: ["pos", WINE],
    mrp: ["factory", WOOD],
    donation_management: ["gift", WINE],
    mass_mailing: ["mail", NIGHT],
    survey: ["clipboard", BLUE],
    fleet: ["truck", GREEN],
    maintenance: ["wrench", WOOD],
    repair: ["wrench", WOOD],
    helpdesk: ["life", BLUE],
    knowledge: ["book", WOOD],
    spreadsheet: ["grid", GREEN],
    spreadsheet_oca: ["grid", GREEN],
    planning: ["calendar", GREEN],
    im_livechat: ["bubble", NIGHT],
    event: ["ticket", WINE],
    website_event: ["ticket", WINE],
    membership: ["card", BLUE],
    subscription_oca: ["refresh", WINE],
    contract: ["document", WINE],
    note: ["document", WOOD],
    documents: ["document", WOOD],
    board: ["columns", NIGHT],
    appointment: ["calendar", BLUE],
    sign: ["document", WOOD],
    approvals: ["clipboard", WOOD],
    sms: ["bubble", NIGHT],
    phone: ["bubble", BLUE],
    social: ["people", NIGHT],
    frontdesk: ["people", BLUE],
    industry_fsm: ["wrench", GREEN],
    quality_control: ["star", GREEN],
    lunch: ["bag", GREEN],
};

function moduleKey(app) {
    const webIcon = app.webIcon || "";
    if (webIcon.includes(",")) {
        return webIcon.split(",")[0];
    }
    const xmlid = app.xmlid || "";
    if (xmlid.includes(".")) {
        return xmlid.split(".")[0];
    }
    return "";
}

function fillFor(key) {
    let hash = 0;
    for (const char of key || "app") {
        hash = (hash + char.charCodeAt(0)) % FILLS.length;
    }
    return FILLS[hash];
}

function tile(inner, fill) {
    return `<svg class="o_church_app_icon__svg" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="${fill}"/>
        <rect x="1.5" y="1.5" width="61" height="61" rx="15" fill="none" stroke="${GOLD}" stroke-width="1.4"/>
        <g fill="none" stroke="${GOLD}" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" transform="translate(16 16)">${inner}</g>
    </svg>`;
}

function letterTile(letter, fill) {
    const safe = (letter || "?").replace(/[&<>"]/g, "");
    return `<svg class="o_church_app_icon__svg" viewBox="0 0 64 64" aria-hidden="true">
        <rect width="64" height="64" rx="16" fill="${fill}"/>
        <rect x="1.5" y="1.5" width="61" height="61" rx="15" fill="none" stroke="${GOLD}" stroke-width="1.4"/>
        <text x="32" y="42" text-anchor="middle" font-family="Georgia, Palatino, serif" font-size="28" fill="${GOLD}">${safe}</text>
    </svg>`;
}

export function iconSvg(app) {
    const key = moduleKey(app);
    const known = MODULE_ICONS[key];
    if (known) {
        const [glyph, fill] = known;
        return tile(GLYPHS[glyph], fill);
    }
    const name = (app.name || "?").trim();
    const letter = name.charAt(0).toUpperCase() || "?";
    return letterTile(letter, fillFor(key || name));
}
