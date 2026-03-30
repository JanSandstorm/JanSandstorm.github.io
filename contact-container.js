document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("contact-container");
    if (!container) return;

    container.innerHTML = `
        <hr class="section-divider">
        <form
            action="https://buttondown.com/api/emails/embed-subscribe/jansandstorm"
            method="post"
            class="embeddable-buttondown-form"
        >
            <input type="email" name="email" id="bd-email" placeholder="Your email" />
            <input type="submit" value="Subscribe" />
        </form>
       <p style="font-size: 0.85rem; color: #666; margin-top: 1.5rem;">
    <a href="mailto:jan@jansandstorm.com">jan@jansandstorm.com</a>
</p>    `;
});
