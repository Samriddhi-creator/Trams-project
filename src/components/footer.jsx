import React from 'react';

/**
 * Footer Component
 * Renders the global page footer containing structured columns with links
 * (Company, Terms & Policies, Follow Us, Contact Info) and a copyright row.
 */
export default function Footer() {
    return (
        <footer className="footer">
            <div className="max-container">
                {/* 4-column footer link grid */}
                <div className="footer-grid">

                    {/* Column 1: Core Company Navigation Links */}
                    <div className="footer-col">
                        <h4>Company</h4>
                        <div className="footer-links">
                            <a href="#">Home</a>
                            <a href="#">Studio</a>
                            <a href="#">Services</a>
                            <a href="#">Blog</a>
                        </div>
                    </div>

                    {/* Column 2: Legal, Privacy and Accessibility policies */}
                    <div className="footer-col">
                        <h4>Terms & Policies</h4>
                        <div className="footer-links">
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Conditions</a>
                            <a href="#">Cookies</a>
                            <a href="#">Accessibility</a>
                        </div>
                    </div>

                    {/* Column 3: Social Media Follow Links */}
                    <div className="footer-col">
                        <h4>Follow Us</h4>
                        <div className="footer-links">
                            <a href="#">Instagram</a>
                            <a href="#">LinkedIn</a>
                            <a href="#">YouTube</a>
                            <a href="#">Twitter</a>
                        </div>
                    </div>

                    {/* Column 4: Location Address, Phone and Email contact information */}
                    <div className="footer-col">
                        <h4>Contact</h4>
                        <p>90696 El Dorado Hills Blvd, Ste G, CA 95762</p>
                        <p style={{ margin: '8px 0', color: '#000', fontWeight: '600' }}>(209) 456-7890</p>
                        <a href="mailto:hello@elementum.com" style={{ color: '#4b5563' }}>hello@elementum.com</a>
                    </div>

                </div>

                {/* Bottom metadata row showing copyright info */}
                <div className="footer-bottom">
                    © 2026 Elementum. All rights reserved.
                </div>
            </div>
        </footer>
    );
}