import React from 'react';

/**
 * Static list of services / business offerings.
 * Each offering contains an ID, a meta description (sideText),
 * and the main title of the service.
 */
const offerings = [
    { id: 1, sideText: "Office of multiple interest context", mainTitle: "Colaborative & partnership" },
    { id: 2, sideText: "The hanger US Air force digital experimental", mainTitle: "We talk about our weight" },
    { id: 3, sideText: "Delta faucet content, social, digital", mainTitle: "Piloting digital confidence" }
];

/**
 * Services Component
 * Displays a list of company services in a structured table layout.
 * Features a background wavy SVG track with drop shadow, a yellow accent indicator,
 * and a header with custom badges/underlines. Mapped rows exhibit hover animations (arrow slide).
 */
export default function Services() {
    return (
        <section className="services-section max-container">
            {/* The Red Wavy SVG Path with Drop Shadow floating across the top right area */}
            <svg
                className="services-wavy-path-svg"
                viewBox="0 0 700 450"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    /* Maps the dynamic wave fluidly floating across the top right */
                    d="M 700,60 
                       C 560,30   470,120  440,240 
                       C 420,315  395,365  340,365 
                       C 290,365  240,295  120,365"
                    stroke="#FF8A8A"
                    strokeWidth="4.5"
                    strokeLinecap="round"
                />
            </svg>

            {/* Absolute-positioned yellow accent marker bar */}
            <div className="services-yellow-marker"></div>

            {/* Header typography with styled status badge and underline wrapper */}
            <h2>
                What we <span className="status-pill">can</span> <br />
                <span className="underline-black">offer</span> you!
            </h2>

            {/* Services table grid structure */}
            <div className="services-table">
                {offerings.map((item) => (
                    <div key={item.id} className="service-row">
                        {/* Left column: Context / Meta information */}
                        <div className="service-meta">
                            {item.sideText}
                        </div>
                        {/* Middle column: Service title */}
                        <div className="service-title">
                            {item.mainTitle}
                        </div>
                        {/* Right column: Interactive hover-animated arrow */}
                        <div className="service-arrow">──→</div>
                    </div>
                ))}
            </div>
        </section>
    );
}