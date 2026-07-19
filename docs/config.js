/*
======================================================
Domain Lander Configuration
Version: 1.0.0
======================================================
*/

const LANDER_CONFIG = {

    /*
    ==================================================
    General
    ==================================================
    */

    version: "1.0.0",

    company: "Your Company",

    domain: "MYDOMAIN.COM",

    logo: "images/logo.svg",

    favicon: "favicon.ico",


    /*
    ==================================================
    Theme
    ==================================================
    */

    theme: {

        primary: "#4F46E5",

        secondary: "#7C3AED",

        accent: "#2563EB",

        card: "#17181D"

    },


    /*
    ==================================================
    SEO
    ==================================================
    */

    seo: {

        title: "MYDOMAIN.COM | Premium Domain For Sale",

        description:
            "Purchase MYDOMAIN.COM securely with instant transfer and trusted escrow.",

        keywords: [

            "domain",

            "premium domain",

            "domain for sale",

            "buy domain"

        ]

    },


    /*
    ==================================================
    Hero
    ==================================================
    */

    hero: {

        title: "Domain for sale",

        features: [

            {

                icon: "check",

                text: "Secure payments"

            },

            {

                icon: "check",

                text: "Instant ownership transfer"

            },

            {

                icon: "check",

                text: "Free transaction support"

            }

        ]

    },


    /*
    ==================================================
    Purchase Options
    ==================================================
    */

    options: {

        buy: {

            enabled: true,

            label: "Buy now",

            price: "$500,000",

            url: "https://example.com/buy"

        },

        lease: {

            enabled: true,

            label: "Lease to own",

            price: "20,000",

            subtitle: "24 monthly payments",

            url: "https://example.com/lease"

        }

    },


    /*
    ==================================================
    Continue Button
    ==================================================
    */

    button: {

        text: "Continue",

        loadingText: "Redirecting..."

    },


    /*
    ==================================================
    Trust
    ==================================================
    */

    trust: {

        title: "Secure escrow transaction",

        items: [

            {

                icon: "lock",

                text: "SSL encrypted checkout"

            },

            {

                icon: "shield",

                text: "Protected payment"

            },

            {

                icon: "transfer",

                text: "Fast ownership transfer"

            }

        ]

    },


    /*
    ==================================================
    Payment Methods
    ==================================================
    */

    payments: [

        {

            name: "Visa",

            image: "images/visa.svg"

        },

        {

            name: "Mastercard",

            image: "images/mastercard.svg"

        },

        {

            name: "Apple Pay",

            image: "images/applepay.svg"

        },

        {

            name: "Google Pay",

            image: "images/googlepay.svg"

        },

        {

            name: "PayPal",

            image: "images/paypal.svg"

        }

    ],


    /*
    ==================================================
    Footer
    ==================================================
    */

    footer: {

        branding: true,

        text: "Powered by Your Company"

    },


    /*
    ==================================================
    Behaviour
    ==================================================
    */

    behaviour: {

        allowDeselect: true,

        disableButtonUntilSelected: true,

        redirectDelay: 400,

        openInNewTab: false

    },


    /*
    ==================================================
    Animations
    ==================================================
    */

    animation: {

        enableBackground: true,

        enableLogoFloat: true,

        enableGlassShimmer: true,

        enableButtonShine: true,

        enableCardEntrance: true

    }

};
