'use client';

import React, { useEffect, useRef } from 'react';

interface MatrixRainProps {
  speed?: number; // Lower number = faster (represents delay in milliseconds)
}

const MatrixRain = ({ speed = 30 }: MatrixRainProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      if (typeof window !== 'undefined') {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix characters
    const chars = 'ｦｱｳｴｵｶｷｹｺｻｼｽｾｿﾀﾂﾃﾅﾆﾇﾈﾊﾋﾎﾏﾐﾑﾒﾓﾔﾕﾗﾘﾜ0123456789'.split('');
    
    // Increased fontSize and added columnSpacing for more separation
    const fontSize = 20; // Increased from 16
    const columnSpacing = 12; // Additional spacing between columns
    const columns = Math.floor(canvas.width / (fontSize + columnSpacing));
    const drops: number[] = [];

    // Initialize drops with more random starting positions
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.floor(Math.random() * -20); // Some starts above viewport for staggered effect
    }

    let lastDraw = 0;

    const draw = (timestamp: number) => {
      if (timestamp - lastDraw < speed) {
        animationRef.current = requestAnimationFrame(draw);
        return;
      }

      lastDraw = timestamp;

      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#9B30FF';
      ctx.font = `${fontSize}px monospace`;

      // Draw drops with increased spacing
      for (let i = 0; i < drops.length; i++) {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(
          char,
          i * (fontSize + columnSpacing),
          drops[i] * fontSize
        );

        // Reset drop with more randomization
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }

      animationRef.current = requestAnimationFrame(draw);
    };

    animationRef.current = requestAnimationFrame(draw);

    // Cleanup
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [speed]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
    />
  );
};

export default MatrixRain;