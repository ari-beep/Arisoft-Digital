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

//SERVICIOS

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

//CLIENTES
const track = document.querySelector('.carousel-track');
const items = Array.from(track.children);
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

let currentIndex = 0;

function updateCarousel() {
  items.forEach((item) => {
    item.classList.remove('active');
    item.style.opacity = '0.6';
    item.style.transform = 'scale(0.9)';
  });

  const currentItem = items[currentIndex];
  currentItem.classList.add('active');
  currentItem.style.opacity = '1';
  currentItem.style.transform = 'scale(1)';

  const offset = currentItem.offsetLeft - track.offsetWidth / 2 + currentItem.offsetWidth / 2;
  track.style.transform = `translateX(${-offset}px)`;
}

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
});

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  updateCarousel();
});

setInterval(() => {
  currentIndex = (currentIndex + 1) % items.length;
  updateCarousel();
}, 5000);

window.addEventListener('load', updateCarousel);
window.addEventListener('resize', updateCarousel);