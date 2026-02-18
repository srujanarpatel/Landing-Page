import React from 'react';
import './button.css';

export function Button({ children, variant = 'primary', icon: Icon, onClick }) {
    return (
        <button className={`btn btn-${variant}`} onClick={onClick}>
            {Icon && <Icon className="btn-icon" />}
            {children}
        </button>
    );
}
