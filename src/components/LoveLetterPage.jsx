import './LoveLetterPage.css';

function LoveLetterPage() {
    // ✏️ WRITE YOUR MESSAGE HERE — the recipient will see this text
    const loveMessage = `

    hehe ami jantam je tumi ai button ta e tipi tipi korbe mane ami 100% sure chilam still ektu no button ta e editing
    kore dilam just for fun . amar adorer bou i loveeeeeeeeeeeee youuuu go. Happy valentine's day  shona amar kodu shona
    amar lokki bou muaaaaaaaaaaaaaaah. ar 2 bocchor pore biye yeaaaaaaaaaaaa. cholo akhon khi khi bondo koro ar amake picchi dao
  `;


    // Floating petals
    const petals = Array.from({ length: 20 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 10,
        duration: 6 + Math.random() * 8,
        size: 10 + Math.random() * 16,
        rotation: Math.random() * 360,
    }));

    return (
        <div className="love-letter-page">
            {/* Rose overlay layers */}
            <div className="rose-layer rose-layer-1"></div>
            <div className="rose-layer rose-layer-2"></div>
            <div className="rose-vignette"></div>

            {/* Floating petals */}
            <div className="petals-container">
                {petals.map((p) => (
                    <span
                        key={p.id}
                        className="floating-petal"
                        style={{
                            left: `${p.left}%`,
                            animationDelay: `${p.delay}s`,
                            animationDuration: `${p.duration}s`,
                            fontSize: `${p.size}px`,
                            '--rotation': `${p.rotation}deg`,
                        }}
                    >
                        🌹
                    </span>
                ))}
            </div>

            {/* Main card */}
            <div className="letter-card">
                <div className="card-header">
                    <span className="card-icon">💌</span>
                    <h2 className="card-title">Amar Adorer Shona</h2>
                    <div className="card-divider">
                        <span className="divider-heart">♥</span>
                    </div>
                </div>

                <div className="letter-body">
                    <p className="letter-text">{loveMessage}</p>
                </div>

                <div className="letter-footer">
                    <p className="footer-text">With all my love 💕</p>
                </div>
            </div>
        </div>
    );
}

export default LoveLetterPage;
