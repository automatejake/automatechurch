{
    "name": "Church Theme",
    "summary": "Orthodox look for the backend, with a parish app drawer and gilded icons",
    "version": "18.0.1.0.0",
    "category": "Theme/Backend",
    "license": "LGPL-3",
    "author": "Automate Church",
    "website": "https://github.com/automatejake/automatechurch",
    "depends": ["web"],
    # Both modules replace the community apps menu. Installing them together
    # breaks the navbar asset bundle.
    "excludes": ["web_responsive"],
    "data": [
        "views/webclient_templates.xml",
    ],
    "assets": {
        "web._assets_primary_variables": [
            "church_theme/static/src/scss/primary_variables.scss",
        ],
        "web.assets_backend": [
            "church_theme/static/src/scss/backend.scss",
            "church_theme/static/src/xml/apps_menu.xml",
            "church_theme/static/src/js/app_icons.js",
            "church_theme/static/src/js/app_icon.js",
            "church_theme/static/src/js/apps_menu.js",
        ],
        "web.assets_frontend": [
            "church_theme/static/src/scss/login.scss",
        ],
    },
    "installable": True,
    "application": False,
}
