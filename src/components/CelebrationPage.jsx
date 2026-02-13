import './CelebrationPage.css';

function CelebrationPage() {
    // Confetti hearts
    const confetti = Array.from({ length: 30 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 2,
        duration: 2 + Math.random() * 3,
        size: 14 + Math.random() * 20,
        emoji: ['💖', '💕', '💗', '✨', '🎉', '💝', '🥰'][Math.floor(Math.random() * 7)],
    }));

    return (
        <div className="celebration-page">
            {/* Confetti */}
            <div className="confetti-container">
                {confetti.map((c) => (
                    <span
                        key={c.id}
                        className="confetti-piece"
                        style={{
                            left: `${c.left}%`,
                            animationDelay: `${c.delay}s`,
                            animationDuration: `${c.duration}s`,
                            fontSize: `${c.size}px`,
                        }}
                    >
                        {c.emoji}
                    </span>
                ))}
            </div>

            {/* Glow bursts */}
            <div className="glow-burst glow-burst-1"></div>
            <div className="glow-burst glow-burst-2"></div>
            <div className="glow-burst glow-burst-3"></div>

            {/* Main content */}
            <div className="celebration-content">
                <h1 className="yea-text">YEAAAAAAA! 🎉</h1>

                <div className="gif-container">
                    <img
                        src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
                        alt="Mind Blown"
                        className="mind-blown-gif"
                    />
                </div>

                <h2 className="love-message">I Love You Shona! 💖</h2>
            </div>
        </div>
    );
}

export default CelebrationPage;
