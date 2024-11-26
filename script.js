document.addEventListener('DOMContentLoaded', (event) => {
    const noBtn = document.getElementById('noBtn');
    const yesBtn = document.getElementById('yesBtn');
    const bgMusic = document.getElementById('bgMusic');
  
    noBtn.addEventListener('mouseover', (e) => {
      const btn = e.target;
      const offset = 100;
      const btnRect = btn.getBoundingClientRect();
      const randomX = Math.floor(Math.random() * (window.innerWidth - btnRect.width));
      const randomY = Math.floor(Math.random() * (window.innerHeight - btnRect.height));
  
      // Mueve el botón a una posición aleatoria
      btn.style.left = randomX + 'px';
      btn.style.top = randomY + 'px';
    });
  
    yesBtn.addEventListener('click', (e) => {
      bgMusic.play();
      alert('¡Te amo! Gracias por aceptar. ¡Vamos a ser muy felices juntos! 💖');
    });
  });
  