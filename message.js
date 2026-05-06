document.addEventListener('DOMContentLoaded', () => {
    const openScreen = document.getElementById('openScreen');
    const openBtn = document.getElementById('openBtn');
    const envelope = document.getElementById('envelope');

    // 1. Wait for Button Click
    openBtn.addEventListener('click', () => {
        // Fade out cover screen
        openScreen.classList.add('fade-out');
        
        // Show the envelope wrapper
        envelope.style.display = 'block';

        // Start text reveal animation
        setTimeout(() => {
            const texts = document.querySelectorAll('.hidden-text');
            texts.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add('reveal');
                }, index * 1000); 
            });
        }, 1000); // Wait for fade out to finish
    });

    // 2. Interactive Starfield Background
    const canvas = document.getElementById('starfield');
    const ctx = canvas.getContext('2d');
    
    let width, height;
    let particles = [];

    function resize() {
        width = canvas.width = window.innerWidth;
        height = canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resize);
    resize();

    class Particle {
        constructor() {
            this.x = Math.random() * width;
            this.y = Math.random() * height;
            this.size = Math.random() * 1.5 + 0.5; // very small particles
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 20) + 1;
            this.alpha = Math.random() * 0.5 + 0.1;
            this.fadeSpeed = Math.random() * 0.005 + 0.001;
            this.fadeDir = Math.random() > 0.5 ? 1 : -1;
        }

        draw() {
            ctx.fillStyle = `rgba(200, 10, 30, ${this.alpha})`;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }

        update(mouseX, mouseY) {
            // Twinkling effect
            this.alpha += this.fadeSpeed * this.fadeDir;
            if (this.alpha <= 0.1 || this.alpha >= 0.8) {
                this.fadeDir *= -1;
            }

            // Mouse interaction: soft repulsion
            let dx = mouseX - this.x;
            let dy = mouseY - this.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            
            let forceDirectionX = dx / distance;
            let forceDirectionY = dy / distance;
            
            // Max distance to affect particles
            let maxDistance = 150;
            let force = (maxDistance - distance) / maxDistance;

            if (distance < maxDistance) {
                this.x -= forceDirectionX * force * this.density * 0.5;
                this.y -= forceDirectionY * force * this.density * 0.5;
            } else {
                // Return to base position slowly
                if (this.x !== this.baseX) {
                    let dx = this.x - this.baseX;
                    this.x -= dx / 50;
                }
                if (this.y !== this.baseY) {
                    let dy = this.y - this.baseY;
                    this.y -= dy / 50;
                }
            }
        }
    }

    function initParticles() {
        particles = [];
        // Amount of particles depends on screen size
        let numParticles = (width * height) / 12000;
        for (let i = 0; i < numParticles; i++) {
            particles.push(new Particle());
        }
    }

    let mouse = { x: null, y: null };
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.x;
        mouse.y = e.y;
    });
    window.addEventListener('mouseout', () => {
        mouse.x = undefined;
        mouse.y = undefined;
    });

    function animate() {
        ctx.clearRect(0, 0, width, height);
        for (let i = 0; i < particles.length; i++) {
            particles[i].update(mouse.x, mouse.y);
            particles[i].draw();
        }
        requestAnimationFrame(animate);
    }

    initParticles();
    animate();
});
