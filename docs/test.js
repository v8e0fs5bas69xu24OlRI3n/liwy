/*
======================================================
Domain Lander
script.js
Part 1
======================================================
*/

'use strict';

const App = {

    config: LANDER_CONFIG,

    selectedOption: null,

    elements: {},

    init() {

        this.cache();

        this.applyTheme();

        this.applySEO();

        this.loadBranding();

        this.buildHero();

        this.buildPurchaseOptions();

    },

    /*
    ==========================================
    Cache DOM
    ==========================================
    */

    cache() {

        this.elements = {

            logo: document.getElementById("logo"),

            heroTitle: document.getElementById("heroTitle"),

            domain: document.getElementById("domain"),

            features: document.getElementById("features"),

            purchaseForm: document.getElementById("purchaseForm"),

            paymentIcons: document.getElementById("paymentIcons"),

            trustHeading: document.getElementById("trustHeading"),

            trustItems: document.getElementById("trustItems"),

            continueButton: document.getElementById("continueButton"),

            buttonText: document.getElementById("buttonText"),

            footer: document.getElementById("footer")

        };

    },

    /*
    ==========================================
    Theme
    ==========================================
    */

    applyTheme() {

        const root = document.documentElement;

        const theme = this.config.theme;

        root.style.setProperty("--primary", theme.primary);

        root.style.setProperty("--secondary", theme.secondary);

        root.style.setProperty("--accent", theme.accent);

        root.style.setProperty("--card", theme.card);

    },

    /*
    ==========================================
    SEO
    ==========================================
    */

    applySEO() {

        document.title = this.config.seo.title;

        const desc = document.querySelector(
            'meta[name="description"]'
        );

        if (desc)
            desc.content = this.config.seo.description;

    },

    /*
    ==========================================
    Branding
    ==========================================
    */

    loadBranding() {

        this.elements.logo.src = this.config.logo;

        this.elements.logo.alt = this.config.company;

        this.elements.domain.textContent =
            this.config.domain;

        this.elements.heroTitle.textContent =
            this.config.hero.title;

    },

    /*
    ==========================================
    Hero Features
    ==========================================
    */

    buildHero() {

        this.elements.features.innerHTML = "";

        this.config.hero.features.forEach(feature => {

            const row = document.createElement("div");

            row.className = "feature";

            row.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>

                <span>${feature.text}</span>
            `;

            this.elements.features.appendChild(row);

        });

    },

    /*
    ==========================================
    Purchase Options
    ==========================================
    */

    buildPurchaseOptions() {

        this.elements.purchaseForm.innerHTML = "";

        Object.entries(this.config.options).forEach(([key, option]) => {

            if (!option.enabled)
                return;

            const label = document.createElement("label");

            label.className = "option";

            label.dataset.url = option.url;

            label.dataset.option = key;

            label.innerHTML = `

                <input
                    type="radio"
                    name="purchase">

                <span class="radio"></span>

                <div class="option-info">

                    <span class="option-title">

                        ${option.label}

                    </span>

                </div>

                <div class="option-price">

                    <span class="price">

                        ${option.price}

                    </span>

                    ${option.subtitle
                        ? `<small>${option.subtitle}</small>`
                        : ""}

                </div>

            `;

            this.elements.purchaseForm.appendChild(label);

        });

    }

};


/*
======================================================
Initialise
======================================================
*/

document.addEventListener("DOMContentLoaded", () => {

    App.init();

});

/*
======================================================
Domain Lander
script.js
Part 2
======================================================
*/

Object.assign(App, {

    /*
    ==========================================
    Payments
    ==========================================
    */

    buildPayments() {

        this.elements.paymentIcons.innerHTML = "";

        this.config.payments.forEach(payment => {

            const img = document.createElement("img");

            img.src = payment.image;

            img.alt = payment.name;

            img.loading = "lazy";

            img.decoding = "async";

            this.elements.paymentIcons.appendChild(img);

        });

    },

    /*
    ==========================================
    Trust
    ==========================================
    */

    buildTrust() {

        this.elements.trustHeading.textContent =
            this.config.trust.title;

        this.elements.trustItems.innerHTML = "";

        this.config.trust.items.forEach(item => {

            const row = document.createElement("div");

            row.className = "trust-item";

            row.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none">
                    <path
                        d="M20 6L9 17L4 12"
                        stroke="currentColor"
                        stroke-width="2.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"/>
                </svg>

                <span>${item.text}</span>
            `;

            this.elements.trustItems.appendChild(row);

        });

    },

    /*
    ==========================================
    Footer
    ==========================================
    */

    buildFooter() {

        if (!this.config.footer.branding) {

            this.elements.footer.style.display = "none";

            return;

        }

        this.elements.footer.textContent =
            this.config.footer.text;

    },

    /*
    ==========================================
    Purchase Events
    ==========================================
    */

    bindPurchaseEvents() {

        const options = this.elements.purchaseForm.querySelectorAll(".option");

        options.forEach(option => {

            const radio = option.querySelector("input");

            option.addEventListener("click", (event) => {

                event.preventDefault();

                this.selectOption(option, radio);

            });

        });

    },

    /*
    ==========================================
    Select / Deselect
    ==========================================
    */

    selectOption(option, radio) {

        const allowDeselect =
            this.config.behaviour.allowDeselect;

        if (radio.checked && allowDeselect) {

            radio.checked = false;

            this.selectedOption = null;

            this.elements.continueButton.disabled = true;

            return;

        }

        this.elements.purchaseForm
            .querySelectorAll("input")
            .forEach(input => input.checked = false);

        radio.checked = true;

        this.selectedOption = option;

        this.elements.continueButton.disabled = false;

    },

    /*
    ==========================================
    Continue Button
    ==========================================
    */

    bindContinueButton() {

        this.elements.continueButton.disabled =
            this.config.behaviour.disableButtonUntilSelected;

        this.elements.continueButton.addEventListener("click", () => {

            if (!this.selectedOption)
                return;

            this.redirect();

        });

    },

    /*
    ==========================================
    Redirect
    ==========================================
    */

    redirect() {

        const url =
            this.selectedOption.dataset.url;

        this.elements.buttonText.textContent =
            this.config.button.loadingText;

        this.elements.continueButton.disabled = true;

        setTimeout(() => {

            if (this.config.behaviour.openInNewTab) {

                window.open(url, "_blank");

            } else {

                window.location.href = url;

            }

        }, this.config.behaviour.redirectDelay);

    }

});


/*
======================================================
Extend Initialiser
======================================================
*/

const originalInit = App.init.bind(App);

App.init = function () {

    originalInit();

    this.buildPayments();

    this.buildTrust();

    this.buildFooter();

    this.bindPurchaseEvents();

    this.bindContinueButton();

};

/*
======================================================
Domain Lander
script.js
Part 3
======================================================
*/

Object.assign(App, {

    /*
    ==========================================
    Keyboard Support
    ==========================================
    */

    bindKeyboard() {

        document.addEventListener("keydown", (event) => {

            if (
                event.key === "Enter" &&
                !this.elements.continueButton.disabled
            ) {
                event.preventDefault();
                this.elements.continueButton.click();
            }

        });

    },

    /*
    ==========================================
    Favicon
    ==========================================
    */

    loadFavicon() {

        if (!this.config.favicon)
            return;

        let favicon =
            document.querySelector("link[rel='icon']");

        if (!favicon) {

            favicon = document.createElement("link");

            favicon.rel = "icon";

            document.head.appendChild(favicon);

        }

        favicon.href = this.config.favicon;

    },

    /*
    ==========================================
    Animation Settings
    ==========================================
    */

    applyAnimationSettings() {

        if (!this.config.animation.enableBackground) {

            const bg = document.querySelector(".background");

            if (bg)
                bg.style.display = "none";

        }

        if (!this.config.animation.enableLogoFloat) {

            this.elements.logo.style.animation = "none";

        }

        if (!this.config.animation.enableGlassShimmer) {

            document.documentElement.style.setProperty(
                "--glass-animation",
                "none"
            );

        }

    },

    /*
    ==========================================
    Accessibility
    ==========================================
    */

    applyAccessibility() {

        this.elements.logo.setAttribute(
            "aria-hidden",
            "false"
        );

        this.elements.continueButton.setAttribute(
            "aria-label",
            this.config.button.text
        );

    },

    /*
    ==========================================
    Helpers
    ==========================================
    */

    setButtonLoading() {

        this.elements.buttonText.textContent =
            this.config.button.loadingText;

    },

    resetButton() {

        this.elements.buttonText.textContent =
            this.config.button.text;

    },

    /*
    ==========================================
    Error Handling
    ==========================================
    */

    validateConfig() {

        if (!this.config.domain) {

            console.error(
                "LANDER_CONFIG.domain is missing."
            );

        }

        if (!this.config.options) {

            console.error(
                "LANDER_CONFIG.options is missing."
            );

        }

    },

    /*
    ==========================================
    Startup
    ==========================================
    */

    startup() {

        this.validateConfig();

        this.loadFavicon();

        this.applyAccessibility();

        this.applyAnimationSettings();

        this.bindKeyboard();

        console.info(

            "%cDomain Lander v" +
            this.config.version,

            "color:#4F46E5;font-weight:bold"

        );

    }

});


/*
======================================================
Extend Initialiser
======================================================
*/

const initPart2 = App.init.bind(App);

App.init = function () {

    initPart2();

    this.startup();

};
