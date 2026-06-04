import React from 'react';
import imageMeeting from '../assets/image 348 (1).png';
import imageWorking from '../assets/image 348.png';

/**
 * Showcase Component
 * Renders a visually rich sections showcase designed to mimic a Figma design canvas.
 * It features a wavy connector path (SVG) linking different blocks, radial glow background effects,
 * and two main content blocks featuring call-to-actions, images with custom geometric crops,
 * and decorative elements like skewed rectangles and absolute-positioned triangles.
 */
export default function Showcase() {
    return (
        <section className="figma-canvas-container">
            {/* Background radial pink glow element */}
            <div className="figma-bg-glow"></div>

            {/* Red wavy line path (connector path) that loops across the canvas blocks */}
            <svg className="figma-wavy-line" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M 2080,460 C 1200,320 1050,300 850,250 C 770,800 550,450 440,450 C 320,450 200,300 100,700"
                    stroke="#FF6B6B"
                    strokeWidth="4"
                    strokeLinecap="round"
                    className="drop-shadow-[0_2px_8px_rgba(255,107,107,0.3)]"
                />
            </svg>

            {/* Block 1: Tomorrow should be better than today */}
            <div className="figma-block figma-block-1">
                {/* Block 1 Text & Read More Link */}
                <div className="figma-text-col">
                    <h2>
                        <span className="hand-drawn-underline">Tomorrow should </span>
                        be better than <span className="green-pill-badge">today</span>
                    </h2>
                    <p>
                        We are a team of strategists, designers, communicators, researchers. Together, we believe that progress only happens when you refuse to play things safe.
                    </p>
                    <a href="#" className="figma-read-more">Read more ────────&gt;</a>
                </div>

                {/* Block 1 Image column: Features a skewed red rectangle acting as a backplate to a circular-cropped image */}
                <div className="figma-image-col-1">
                    <div className="skewed-red-rect"></div>
                    <div className="circle-crop-inner">
                        <img src={imageMeeting} alt="Meeting collaboration" />
                    </div>
                </div>
            </div>

            {/* Block 2: See how we can help you progress */}
            <div className="figma-block figma-block-2">
                {/* Block 2 Text & Read More Link */}
                <div className="figma-text-col">
                    <h2>
                        <span className="green-pill-badge">See</span> how we can <br />
                        help you <span className="hand-drawn-underline">progress</span>
                    </h2>
                    <p>
                        We add a layer of fearless insights and action that allows change-makers to accelerate their progress in areas such as brand, design, digital, comms, and social research.
                    </p>
                    <a href="#" className="figma-read-more">Read more ────────&gt;</a>
                </div>

                {/* Block 2 Image column: Features a circular cropped image sandwiched between two absolute-positioned red triangles */}
                <div className="figma-image-col-2" style={{ position: 'relative' }}>
                    {/* Triangle 1: Positioned behind/above the top left corner of the image */}
                    <div className="red-triangle-bounding-box" style={{ position: 'absolute', top: '-20px', left: '-20px', width: '180px', height: '180px', zIndex: 1 }}>
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                            <polygon points="50,15 90,85 10,85" fill="#FF5A5A" />
                        </svg>
                    </div>

                    {/* Main Image Circular Crop */}
                    <div className="circle-crop-only" style={{ position: 'relative', zIndex: 2, width: '400px', height: '400px', }}>
                        <img src={imageWorking} alt="Two people working on laptop" />
                    </div>

                    {/* Triangle 2: Positioned on top/front of the bottom right corner of the image */}
                    <div className="red-triangle-bounding-box" style={{ position: 'absolute', bottom: '-20px', right: '90px', width: '180px', height: '180px', zIndex: 3 }}>
                        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
                            <polygon points="50,15 90,85 10,85" fill="#FF5A5A" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}