import React from 'react';
import { Play, Plus } from 'lucide-react';
import './movie-card.css';

export function MovieCard({ movie }) {
    return (
        <div className="movie-card">
            <img
                src={movie.image}
                alt={movie.title}
                className="movie-card-image"
                onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=500&auto=format&fit=crop"; // Cinema fallback
                }}
            />
            <div className="card-overlay">
                <div className="card-content">
                    <div className="card-actions">
                        <div className="action-btn play">
                            <Play fill="black" size={14} style={{ marginLeft: '2px' }} />
                        </div>
                        <div className="action-btn glass">
                            <Plus color="white" size={16} />
                        </div>
                    </div>
                    <div className="movie-title">{movie.title}</div>
                    <div className="movie-meta">
                        <span className="match-score">{movie.match} Match</span>
                        <span>{movie.genre}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
