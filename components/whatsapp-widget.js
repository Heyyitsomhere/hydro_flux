class WhatsAppWidget extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <a href="https://wa.me/918851165175?text=Hello%20Jovial%20Water%20Engineering!%20I%20would%20like%20to%20know%20more%20about%20your%20services." 
           class="whatsapp-float" 
           target="_blank"
           aria-label="Chat on WhatsApp">
            <i class="fab fa-whatsapp"></i>
        </a>
        `;
    }
}

customElements.define('whatsapp-widget', WhatsAppWidget);
