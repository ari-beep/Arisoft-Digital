function toggleMenu(button) {
  button.classList.toggle("active");
  document.getElementById("navEnlaces").classList.toggle("activo");
}
function resetMenuOnResize() {
  const menuBtn = document.querySelector('.menu');
  const navEnlaces = document.getElementById('navEnlaces');
  if (window.innerWidth > 768) {
    menuBtn.classList.remove('active');
    navEnlaces.classList.remove('activo');
  }
}

window.addEventListener('resize', resetMenuOnResize);

// Opcional: cerrar menú al hacer clic en enlace
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('#navEnlaces a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('navEnlaces').classList.remove('activo');
      document.querySelector('.menu').classList.remove('active');
  });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const elementos = document.querySelectorAll('.scroll-anim');

  const mostrarElementos = () => {
    elementos.forEach(el => {
      const pos = el.getBoundingClientRect().top;
      if (pos < window.innerHeight - 100) {
        el.classList.add('visible');
      }
    });
  };

  window.addEventListener('scroll', mostrarElementos);
  mostrarElementos();
});

const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateCarousel() {
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

// Auto-slide cada 5 segundos
setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);
