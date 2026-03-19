document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("contact-container");
    if (!container) return;

    const user = "jan";
    const domain = "jansandstorm.com";
    const subject = encodeURIComponent("Getting in touch");
    const body = encodeURIComponent("Hi, I'd like to receive your newsletter.");

    const link = document.createElement("a");
    link.style.fontSize = "0.9rem";
    link.style.color = "#666";
    link.style.marginTop = "10px";
    link.style.textDecoration = "underline";
    link.style.cursor = "pointer";
    link.textContent = "receive the next newsletter — or just get in touch";

    link.addEventListener("click", () => {
        window.location.href = `mailto:${user}@${domain}?subject=${subject}&body=${body}`;
    });

    container.appendChild(link);
});
