import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './nav/Nav.js';
import About from './about/About.js';
import Skills from './skills/Skills.js';
import Projects from './projects/Projects.js';
import Contact from './contact/Contact.js';
import './styles/nav.css';
import './styles/app.css';
import Background from './background/Background.js';
import PlayerStats from './playerStats/PlayerStats.js';
import LoadingScreen from './components/LoadingScreen.js';

const App = () => {
    const [ready, setReady] = useState(false);

    useEffect(() => {
        const checkReady = () => {
            const video = document.getElementById('bg-video');
            const fontsDone = document.fonts.ready;

            const videoReady = new Promise((resolve) => {
                if (!video) return resolve();
                if (video.readyState >= 3) return resolve();
                video.addEventListener('canplaythrough', resolve, { once: true });
            });

            Promise.all([fontsDone, videoReady]).then(() => {
                // small delay so fade-out feels smooth
                setTimeout(() => setReady(true), 300);
            });
        };

        if (document.readyState === 'complete') {
            checkReady();
        } else {
            window.addEventListener('load', checkReady, { once: true });
        }
    }, []);
    const [loading, setLoading] = useState(true);

    return (
        <Router>
            {loading && <LoadingScreen onComplete={() => setLoading(false)} />}
            <div style={{ visibility: ready ? 'visible' : 'hidden' }}>
                <Nav />
                <Background />
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
                <PlayerStats />
            </div>
        </Router>
    );
};

export default App;