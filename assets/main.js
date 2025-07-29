// Create animated flame particles
function createFlame() {
    const flameContainer = document.getElementById('flameContainer');
    const flame = document.createElement('div');
    flame.className = 'flame';
    
    flame.style.left = Math.random() * window.innerWidth + 'px';
    flame.style.animationDuration = (Math.random() * 3 + 1) + 's';
    flame.style.animationDelay = Math.random() * 2 + 's';
    
    flameContainer.appendChild(flame);
    
    setTimeout(() => {
        flame.remove();
    }, 5000);
}

// Create flames periodically
setInterval(createFlame, 800);

// Initial flames
for(let i = 0; i < 10; i++) {
    setTimeout(createFlame, i * 200);
}