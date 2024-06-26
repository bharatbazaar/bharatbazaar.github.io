document.addEventListener("DOMContentLoaded", () => {
    const paymentDoneButton = document.querySelector(".payment-done");
    const screenshotSentButton = document.querySelector(".screenshot-sent");
    const loadingDiv = document.querySelector(".loading");
    const doneDiv = document.querySelector(".done");
    const confirmPaymentDiv = document.querySelector(".confirm-payment");
    const sendScreenshotDiv = document.querySelector(".send-screenshot");
    const thankYouDiv = document.querySelector(".thank-you");

    paymentDoneButton.addEventListener("click", () => {
        setTimeout(() => {
            loadingDiv.style.display = "none";
            doneDiv.style.display = "flex";
        }, 2000);

        setTimeout(() => {
            confirmPaymentDiv.style.display = "none";
            sendScreenshotDiv.style.display = "flex";
            thankYouDiv.style.display = "none";
        }, 6000);
    });
    screenshotSentButton.addEventListener("click", () => {
        sendScreenshotDiv.style.display = "none";
        confirmPaymentDiv.style.display = "none";
        thankYouDiv.style.display = "flex";
    });
});
