import React, { useEffect, useRef, useState } from 'react';
import { MovieCard } from '../molecules/MovieCard';
import { movies } from '../../data/movies';
import './movie-row.css';

export function MovieRow({ title }) {
    const [isVisible, setIsVisible] = useState(false);
    const rowRef = useRef(null);

    // Randomizing movies slightly to make rows look different (in a real app this would be data fetching)
    const randomizedMovies = React.useMemo(() => [...movies].sort(() => Math.random() - 0.5), []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect(); // Only animate once
                }
            },
            { threshold: 0.1 }
        );

        if (rowRef.current) {
            observer.observe(rowRef.current);
        }

        return () => {
            if (rowRef.current) observer.unobserve(rowRef.current);
        };
    }, []);

    return (
        <div className={`movie-row ${isVisible ? 'visible' : ''}`} ref={rowRef}>
            <h2 className="movie-row-title">{title}</h2>
            <div className="movie-row-list">
                {randomizedMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))}
                {/* Duplicate for scrolling effect */}
                {randomizedMovies.map((movie) => (
                    <MovieCard key={`dup-${movie.id}`} movie={movie} />
                ))}
            </div>
        </div>
    );
}
