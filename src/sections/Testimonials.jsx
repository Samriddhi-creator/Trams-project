import React from 'react';

/**
 * Testimonials Component
 * Renders a customer feedback / testimonial section.
 * Features a large central quote box container with client feedback text,
 * surrounded by 8 absolutely-positioned floating user avatars of varying sizes,
 * creating a scattered, dynamic layered layout.
 */
export default function Testimonials() {
    return (
        <section className="testimonials-section">
            <div className="max-container" style={{ position: 'relative' }}>
                {/* Heading with styled orange underline text badge */}
                <h2>
                    What our customer <br />
                    says <span className="underline-orange">About Us</span>
                </h2>

                {/* Main Client Feedback Quote Box */}
                <div className="quote-box">
                    <p>
                        Elementum delivered the site within the timeline as they requested. In the end, the client found a 50% increase in traffic within days since its launch. They also had an impressive ability to use technologies that the company hasn't used, which have also proved to be easy to use and reliable.
                    </p>
                </div>

                {/* 
                  * 8 Absolute floating avatars arranged layout-wide around the quote box.
                  * Each image represents a customer, styled using inline absolute positions 
                  * (top, left/right) and custom sizes to create depth.
                  */}
                
                {/* Left Side Avatars */}
                <img src="/Ellipse_263.png" className="scatter-avatar" style={{ top: '5%', left: '8%', width: '80px', height: '80px' }} alt="User" />
                <img src="/Ellipse_266.png" className="scatter-avatar" style={{ top: '42%', left: '2%', width: '48px', height: '48px' }} alt="User" />
                <img src="/Ellipse_268.png" className="scatter-avatar" style={{ top: '45%', left: '12%', width: '120px', height: '120px' }} alt="User" />
                <img src="/Ellipse_267.png" className="scatter-avatar" style={{ top: '75%', left: '3%', width: '75px', height: '75px' }} alt="User" />

                {/* Right Side Avatars */}
                <img src="/Ellipse_270.png" className="scatter-avatar" style={{ top: '5%', right: '5%', width: '90px', height: '90px' }} alt="User" />
                <img src="/Ellipse_264.png" className="scatter-avatar" style={{ top: '25%', right: '16%', width: '55px', height: '55px' }} alt="User" />
                <img src="/Ellipse_265.png" className="scatter-avatar" style={{ top: '44%', right: '13%', width: '65px', height: '65px' }} alt="User" />
                <img src="/Ellipse_269.png" className="scatter-avatar" style={{ top: '55%', right: '2%', width: '150px', height: '150px' }} alt="User" />
            </div>
        </section>
    );
}