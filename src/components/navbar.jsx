import React from 'react';

/**
 * Navbar Component
 * Renders the global navigation bar.
 * Positioned fixed at the top of the viewport. Features the brand logo ("Elementum"),
 * a collection of navigation links, and a mobile hamburger menu icon.
 */
export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="max-container" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                {/* Brand / Logo link */}
                <a href="#" style={{ fontSize: '20px', fontWeight: 'bold', color: '#000', textDecoration: 'none' }}>Elementum</a>

                {/* Navigation and Menu container */}
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {/* Navigation Link list (Desktop Viewport) */}
                    <div className="nav-links">
                        <a href="#" className="active" style={{ marginRight: '20px' }} > Home</a>
                        <a href="#" style={{ marginRight: '20px' }}>Studio</a>
                        <a href="#" style={{ marginRight: '20px' }}>Services</a>
                        <a href="#" style={{ marginRight: '20px' }}>Contact</a>
                        <a href="#" style={{ marginRight: '280px' }}>FAQs</a>
                    </div>
                    
                    {/* Mobile hamburger menu button trigger */}
                    <div className="hamburger-menu">
                        <span style={{ marginBottom: '4px' }}></span>
                        <span></span>
                    </div>
                </div>
            </div >
        </nav >
    );
}