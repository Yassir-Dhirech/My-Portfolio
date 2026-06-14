// import React from 'react';
// import './LoadingPage.css';

// const LoadingScreen = ({ ready }) => {
//     return (
//         <div className={`loading-wrapper ${ready ? 'fade-out' : ''}`}>
//             <div className="loading-spinner" />
//             <div className="loading-bar-wrap">
//                 <div className="loading-bar" />
//             </div>
//             <p className="loading-text">LOADING...</p>
//         </div>
//     );
// };
// export default LoadingScreen;

// LoadingScreen.jsx
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const steps = [
      { target: 75, delay: 0,    duration: 900 },
      { target: 90, delay: 900,  duration: 400 },
      { target: 100, delay: 1300, duration: 300 },
    ];

    steps.forEach(({ target, delay, duration }) => {
      setTimeout(() => {
        const start = Date.now();
        const from = progress;
        const tick = () => {
          const elapsed = Date.now() - start;
          const t = Math.min(elapsed / duration, 1);
          setProgress(Math.round(from + (target - from) * t));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      }, delay);
    });

    const total = 1600 + 600; // loading + exit delay
    setTimeout(() => {
      setVisible(false);
      setTimeout(onComplete, 600);
    }, total);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="ls-root"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Corner brackets */}
          {["tl","tr","bl","br"].map(pos => (
            <div key={pos} className={`ls-corner ls-corner-${pos}`} />
          ))}

          {/* Background grid */}
          <div className="ls-grid" />
          <div className="ls-glow" />

          {/* Spinner rings */}
          <div className="ls-ring-wrap">
            <div className="ls-ring ls-ring-1" />
            <div className="ls-ring ls-ring-2" />
            <div className="ls-ring ls-ring-3" />
            <div className="ls-center-dot" />
          </div>

          {/* Name */}
          <motion.div
            className="ls-name"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Yassir <span>D.</span>
          </motion.div>

          {/* Title */}
          <motion.div
            className="ls-title"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Full-Stack Engineer &amp; CS Student
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="ls-bar-wrap"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            <motion.div
              className="ls-bar"
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ ease: "easeOut" }}
            />
          </motion.div>

          {/* Status text */}
          <motion.div
            className="ls-status"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            {progress < 80 ? "Initializing portfolio..." 
             : progress < 100 ? "Almost there..." 
             : "Welcome."}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}