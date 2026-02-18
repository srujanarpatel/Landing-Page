import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import './footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <div className="footer-social-links">
                <Facebook />
                <Instagram />
                <Twitter />
                <Youtube />
            </div>
            <ul className="footer-links">
                <li className="footer-link">Audio Description</li>
                <li className="footer-link">Help Center</li>
                <li className="footer-link">Gift Cards</li>
                <li className="footer-link">Media Center</li>
                <li className="footer-link">Investor Relations</li>
                <li className="footer-link">Jobs</li>
                <li className="footer-link">Terms of Use</li>
                <li className="footer-link">Privacy</li>
                <li className="footer-link">Legal Notices</li>
                <li className="footer-link">Cookie Preferences</li>
                <li className="footer-link">Corporate Information</li>
                <li className="footer-link">Contact Us</li>
            </ul>
            <div className="footer-copyright">
                &copy; 2026 StreamFlix, Inc.
            </div>
        </footer>
    );
}
