import React from 'react';

/**
 * Static list of staff members / contributors.
 * Each member object holds an ID, a source path for their avatar image,
 * and a CSS class that determines their exact position within the avatar cluster.
 */
const staff = [
    { id: 1, img: "/Ellipse_256.png", class: "av-1" },
    { id: 2, img: "/Ellipse_261.png", class: "av-2" },
    { id: 3, img: "/Ellipse_255.png", class: "av-3" },
    { id: 4, img: "/Ellipse_256.png", class: "av-4" },
    { id: 5, img: "/Ellipse_257.png", class: "av-5" },
    { id: 6, img: "/Ellipse_258.png", class: "av-6" },
    { id: 7, img: "/Ellipse_259.png", class: "av-7" },
    { id: 8, img: "/Ellipse_260.png", class: "av-8" }
];

/**
 * Hero Component
 * Renders the primary landing section of the website.
 * Contains organic background SVG decorations, a bold headline highlighting 
 * status-quo thinkers and doers, a brief mission description, and a 
 * scattered cluster of team avatars.
 */
export default function Hero() {
    return (
        <section className="hero max-container" style={{ position: 'relative' }}>

            {/* Left-side absolute background decoration: Organic loops and wavy lines */}
            <div className="hero-left-loops" style={{ position: 'absolute', left: '-20px', top: '380px', pointerEvents: 'none', zIndex: 1 }}>
                <svg width="110" height="220" viewBox="0 0 110 220" fill="none" xmlns="http://www.w3.org/2000/svg">
                    {/* Pink/Coral organic wavy track */}
                    <path
                        d="M 10,10 
                           C -15,50   45,85   15,125 
                           C -10,160  35,185  10,210"
                        stroke="#FF6B6B"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                    {/* Smooth black continuous loops wrapping underneath */}
                    <path
                        d="M 65,15 
                           C 25,25   20,80   60,95 
                           C 100,110  15,150  50,205"
                        stroke="#000000"
                        strokeWidth="3.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div>

            {/* Rotated purple semi-circle frame component decoration */}
            <div className="purple-pill"></div>

            {/* Main Content Layout - Typography with styled badge spans */}
            <h1>
                The <span className="underline-thinkers">thinkers</span> and <br />
                doers were <span className="changing">changing</span> <br />
                the <span className="status-pill">status</span> Quo with
            </h1>

            {/* Introductory mission statement paragraph */}
            <p style={{ position: 'relative', zIndex: 1 }}>
                We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
            </p>

            {/* Scattered Mesh Grid for Team Avatars */}
            <div className="avatar-cluster">
                {staff.map((member) => (
                    <div key={member.id} className={`avatar-card ${member.class}`}>
                        <img src={member.img} alt="Contributor" />
                    </div>
                ))}
            </div>
        </section>
    );
}