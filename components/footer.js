class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: rgba(17, 24, 39, 0.8);
          backdrop-filter: blur(10px);
          color: rgba(255, 255, 255, 0.7);
          padding: 2rem;
          text-align: center;
          margin-top: auto;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
        }
        .social-links {
          display: flex;
          justify-content: center;
          gap: 1.5rem;
          margin-bottom: 1rem;
        }
        .social-links a {
          color: rgba(255, 255, 255, 0.7);
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          color: white;
        }
        .copyright {
          font-size: 0.875rem;
        }
      </style>
      <footer>
        <div class="footer-content">
          <div class="social-links">
            <a href="#"><i data-feather="twitter"></i></a>
            <a href="#"><i data-feather="linkedin"></i></a>
            <a href="#"><i data-feather="github"></i></a>
            <a href="#"><i data-feather="mail"></i></a>
          </div>
          <div class="copyright">
            &copy; ${new Date().getFullYear()} Cyn's Resume. All rights reserved.
          </div>
        </div>
      </footer>
    `;
  }
}
customElements.define('custom-footer', CustomFooter);