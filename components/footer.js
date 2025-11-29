class Footer extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer class="footer">
            <div class="container">
                <div class="footer-content">
                    <div class="footer-section">
                        <h4><i class="fas fa-tint"></i> Jovial Water Engineering</h4>
                        <p id="footer-tagline">Integrated Waste Water Solution</p>
                        <div class="social-links">
                            <a href="#" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                            <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                            <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                            <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div class="footer-section">
                        <h4>Quick Links</h4>
                        <a href="index.html">Home</a>
                        <a href="about.html">About Us</a>
                        <a href="products.html">Products</a>
                        <a href="services.html">Services</a>
                        <a href="news.html">News Room</a>
                        <a href="contact.html">Contact Us</a>
                    </div>
                    <div class="footer-section">
                        <h4>Our Products</h4>
                        <a href="products.html">Sewage Treatment Plant</a>
                        <a href="products.html">Effluent Treatment Plant</a>
                        <a href="products.html">Ultra Filtration System</a>
                        <a href="products.html">Zero Liquid Discharge</a>
                        <a href="products.html">Reverse Osmosis</a>
                        <a href="products.html">De Mineralization Plant</a>
                    </div>
                    <div class="footer-section">
                        <h4>Contact Info</h4>
                        <p><i class="fas fa-phone"></i> <span id="footer-phone"></span></p>
                        <p><i class="fas fa-envelope"></i> <span id="footer-email"></span></p>
                    </div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; 2024 Jovial Water Engineering Pvt Ltd. All rights reserved.</p>
                    <div class="footer-links">
                        <a href="#">Terms & Condition</a>
                        <a href="#">Privacy Policy</a>
                        <a href="contact.html">Contact Us</a>
                    </div>
                </div>
            </div>
        </footer>
        `;
    }
}

customElements.define('app-footer', Footer);
