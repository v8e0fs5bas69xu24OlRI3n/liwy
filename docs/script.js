// Populate page content
document.getElementById("domain").textContent = CONFIG.domain;
document.getElementById("subtitle").textContent = CONFIG.subtitle;

document.getElementById("buyPrice").textContent = CONFIG.buyPrice;

document.getElementById("leasePrice").textContent = CONFIG.leasePrice;
document.getElementById("leaseText").textContent = CONFIG.leaseText;

document.getElementById("paymentImage").src = CONFIG.paymentImage;

document.getElementById("continue").textContent = CONFIG.continueButton;

document.getElementById("escrow").textContent = CONFIG.escrowText;


// Continue button
document.getElementById("continue").addEventListener("click", function () {

    const selected = document.querySelector(
        'input[name="purchase"]:checked'
    );

    if (!selected) return;

    if (selected.value === "buy") {

        window.location.href = CONFIG.buyUrl;

    } else {

        window.location.href = CONFIG.leaseUrl;

    }

});