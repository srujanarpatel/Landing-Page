import React from 'react';
import { Play, Info } from 'lucide-react';
import { Button } from '../atoms/Button';
import './hero.css';

export function Hero() {
    return (
        <div className="hero">
            <img
                src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?q=80&w=2070&auto=format&fit=crop"
                alt="Hero Background"
                className="hero-background"
            />
            <div className="hero-overlay"></div>
            <div className="hero-content">
                <div className="hero-label">
                    <span className="series-n">S</span>SERIES
                </div>
                <h1 className="hero-title">Neon Horizon</h1>
                <div className="hero-meta">
                    <span className="match-score">98% Match</span>
                    <span className="year">2026</span>
                    <span className="rating">TV-MA</span>
                    <span className="seasons">3 Seasons</span>
                </div>
                <p className="hero-description">
                    In a future where humanity has merged with technology, a lone hacker uncovers a conspiracy that threatens the very fabric of reality. The line between man and machine blurs in this high-octane thriller.
                </p>
                <div className="hero-buttons">
                    <Button variant="primary" icon={Play}>Play</Button>
                    <Button variant="secondary" icon={Info}>More Info</Button>
                </div>
            </div>
        </div>
    );
}
