import { useState, useRef, useEffect } from 'react';
import './ValentinePage.css';

const SAD_MESSAGES = [
    "No keno go? 🥺",
    "sotti? 😢",
    "erom kno korcho? 💔",
    "Please? 🥹",
    "bhabo abar 😭",
    "last chance dicchi... 🫠",
    "erom korbe shona! 😿",
    "ami dukhito hoye jabo... 🥀",
    "You're breaking my heart! 💔",
    "PLEASEEE 🙏",
];

function ValentinePage({ onAccept }) {
    const [noCount, setNoCount] = useState(0);
    const [showSadEmoji, setShowSadEmoji] = useState(false);
    const [showHappyEmoji, setShowHappyEmoji] = useState(false);
    const [noPos, setNoPos] = useState(null);
    const containerRef = useRef(null);

    const yesScale = 1 + noCount * 0.3;

    const handleNo = () => {
        setShowSadEmoji(true);
        setNoCount((prev) => prev + 1);

        // Random position for No button
        if (containerRef.current) {
            const container = containerRef.current.getBoundingClientRect();
            const btnW = 120;
            const btnH = 50;
            const maxX = container.width - btnW - 20;
            const maxY = container.height - btnH - 20;
            const x = Math.random() * maxX + 10;
            const y = Math.random() * maxY + 10;
            setNoPos({ x, y });
        }

        setTimeout(() => setShowSadEmoji(false), 1200);
    };

    const handleYes = () => {
        setShowHappyEmoji(true);
        setTimeout(() => onAccept(), 1500);
    };

    // Floating hearts generator
    const hearts = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 8,
        duration: 4 + Math.random() * 6,
        size: 12 + Math.random() * 24,
        opacity: 0.15 + Math.random() * 0.35,
    }));

    return (
        <div className="valentine-page" ref={containerRef}>
            {/* Floating hearts background */}
            <div className="hearts-container">
                {hearts.map((h) => (
                    <span
                        key={h.id}
                        className="floating-heart"
                        style={{
                            left: `${h.left}%`,
                            animationDelay: `${h.delay}s`,
                            animationDuration: `${h.duration}s`,
                            fontSize: `${h.size}px`,
                            opacity: h.opacity,
                        }}
                    >
                        ❤️
                    </span>
                ))}
            </div>

            {/* Glowing orbs */}
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>

            {/* Main content */}
            <div className="valentine-content">
                <div className="sparkle-wrapper">
                    <h1 className="valentine-title">
                        Will You Be My Valentine Shona?
                    </h1>
                    <span className="title-emoji">💕</span>
                </div>

                {noCount > 0 && (
                    <p className="sad-message">
                        {SAD_MESSAGES[Math.min(noCount - 1, SAD_MESSAGES.length - 1)]}
                    </p>
                )}

                <div className="buttons-container">
                    <button
                        className="btn btn-yes"
                        onClick={handleYes}
                        style={{
                            transform: `scale(${yesScale})`,
                            transition: 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
                        }}
                    >
                        Yes! 💖
                    </button>

                    {!noPos ? (
                        <button className="btn btn-no" onClick={handleNo}>
                            No 😅
                        </button>
                    ) : null}
                </div>
            </div>

            {/* Escaped No button */}
            {noPos && (
                <button
                    className="btn btn-no btn-no-escaped"
                    onClick={handleNo}
                    style={{
                        position: 'absolute',
                        left: `${noPos.x}px`,
                        top: `${noPos.y}px`,
                        transition: 'all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
                    }}
                >
                    {noCount < SAD_MESSAGES.length
                        ? "No 😅"
                        : "Fine... No 😤"}
                </button>
            )}

            {/* Sad emoji overlay */}
            {showSadEmoji && (
                <div className="emoji-overlay sad-overlay">
                    <span className="big-emoji bounce-in">😢</span>
                </div>
            )}

            {/* Happy emoji overlay */}
            {showHappyEmoji && (
                <div className="emoji-overlay happy-overlay">
                    <span className="big-emoji bounce-in">🥰</span>
                    <p className="happy-text">Yaaay! 💕</p>
                </div>
            )}
        </div>
    );
}

export default ValentinePage;
