class Header extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <!-- Top Contact Bar -->
        <div class="top-bar">
            <div class="top-bar-container">
                <div class="top-bar-left">
                    <a href="mailto:support@jovial_water.co.in">
                        <i class="fas fa-envelope"></i> support@jovial_water.co.in
                    </a>
                </div>
                <div class="top-bar-right">
                    <a href="tel:+918851165175">
                        <i class="fas fa-phone"></i> +91 8851165175
                    </a>
                    <a href="tel:01144463328">
                        <i class="fas fa-phone-alt"></i> 011-44463328
                    </a>
                </div>
            </div>
        </div>

        <!-- Navigation Bar -->
        <nav class="navbar">
            <div class="nav-container">
                <a href="index.html" class="logo" style="text-decoration: none;">
                    <i class="fas fa-tint"></i>
                    <span>Jovial Water Engineering</span>
                </a>
                <ul class="nav-links">
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="about.html">About Us</a>
                        <ul class="dropdown-menu">
                            <li><a href="about.html#overview">Company Overview</a></li>
                            <li><a href="about.html#mission">Our Mission</a></li>
                            <li><a href="about.html#vision">Our Vision</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="products.html">Our Products</a>
                        <ul class="dropdown-menu" id="products-dropdown">
                            <!-- Loaded dynamically -->
                        </ul>
                    </li>
                    <li><a href="services.html">Services</a></li>
                    <li><a href="industries.html">Industries We Serve</a></li>
                    <li><a href="career.html">Career</a></li>
                    <li><a href="contact.html">Contact Us</a></li>
                </ul>
                <button class="mobile-menu-btn" onclick="toggleMobileMenu()">
                    <i class="fas fa-bars"></i>
                </button>
            </div>
        </nav>
        `;

        // Highlight active link
        const currentPage = window.location.pathname.split('/').pop() || 'index.html';
        const links = this.querySelectorAll('.nav-links a');
        links.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });
    }
}

customElements.define('app-header', Header);
