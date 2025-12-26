import { useEffect, useRef } from 'react';
import { motion } from 'motion/react';

interface InteractiveBackgroundProps {
  darkMode: boolean;
  mousePosition: { x: number; y: number };
}

export default function InteractiveBackground({ darkMode, mousePosition }: InteractiveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Floating bubbles system
    class Bubble {
      x: number;
      y: number;
      radius: number;
      speedY: number;
      opacity: number;
      hue: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = canvas.height + Math.random() * 100;
        this.radius = Math.random() * 30 + 10;
        this.speedY = Math.random() * 1 + 0.5;
        this.opacity = Math.random() * 0.3 + 0.1;
        this.hue = Math.random() * 20 + 25; // Amber/orange hues (25-45)
      }

      update() {
        // Float upward
        this.y -= this.speedY;

        // Gentle horizontal drift
        this.x += Math.sin(this.y / 50) * 0.5;

        // Reset when bubble goes off screen
        if (this.y + this.radius < 0) {
          this.y = canvas.height + this.radius;
          this.x = Math.random() * canvas.width;
        }
      }

      draw() {
        if (!ctx) return;
        
        // Create gradient for bubble
        const gradient = ctx.createRadialGradient(
          this.x - this.radius / 3,
          this.y - this.radius / 3,
          0,
          this.x,
          this.y,
          this.radius
        );

        if (darkMode) {
          gradient.addColorStop(0, `hsla(${this.hue}, 80%, 65%, ${this.opacity * 0.8})`);
          gradient.addColorStop(0.5, `hsla(${this.hue}, 70%, 55%, ${this.opacity * 0.4})`);
          gradient.addColorStop(1, `hsla(${this.hue}, 60%, 45%, 0)`);
        } else {
          gradient.addColorStop(0, `hsla(${this.hue}, 90%, 75%, ${this.opacity})`);
          gradient.addColorStop(0.5, `hsla(${this.hue}, 80%, 65%, ${this.opacity * 0.5})`);
          gradient.addColorStop(1, `hsla(${this.hue}, 70%, 55%, 0)`);
        }

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Add highlight
        ctx.beginPath();
        ctx.arc(
          this.x - this.radius / 3,
          this.y - this.radius / 3,
          this.radius / 3,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity * 0.3})`;
        ctx.fill();
      }
    }

    // Create bubbles
    const bubbles: Bubble[] = [];
    const bubbleCount = 25;

    for (let i = 0; i < bubbleCount; i++) {
      bubbles.push(new Bubble());
    }

    // Animation loop
    let animationFrameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bubbles.forEach((bubble) => {
        bubble.update();
        bubble.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [darkMode]);

  return (
    <>
      {/* Canvas for floating bubbles */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
      />

      {/* Gradient orbs with parallax */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          className="absolute -top-40 -left-40 w-96 h-96 bg-amber-500/30 dark:bg-amber-500/20 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.02,
            y: mousePosition.y * 0.02,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute top-1/2 -right-40 w-96 h-96 bg-orange-400/20 dark:bg-orange-600/15 rounded-full blur-3xl"
          animate={{
            x: -mousePosition.x * 0.015,
            y: -mousePosition.y * 0.015,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
        <motion.div
          className="absolute -bottom-40 left-1/3 w-96 h-96 bg-amber-300/20 dark:bg-amber-700/15 rounded-full blur-3xl"
          animate={{
            x: mousePosition.x * 0.01,
            y: -mousePosition.y * 0.01,
          }}
          transition={{ type: 'spring', stiffness: 50, damping: 20 }}
        />
      </div>

      {/* Subtle grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.02] dark:opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgb(245, 158, 11) 1px, transparent 1px),
            linear-gradient(to bottom, rgb(245, 158, 11) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      />
    </>
  );
}
