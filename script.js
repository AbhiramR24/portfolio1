document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.getElementById('backToTopBtn');

  
  if (!backToTopBtn) return;

  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('show');
    } else {
      backToTopBtn.classList.remove('show');
    }
  });

  
  backToTopBtn.click = () => {  };
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  const menuBtn = document.getElementById('menuBtn');
  const navMenu = document.getElementById('navMenu');

  if (menuBtn && navMenu) {
    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      
      
      if (navMenu.classList.contains('active')) {
        menuBtn.textContent = 'Close';
      } else {
        menuBtn.textContent = 'Menu';
      }
    });

    
    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuBtn.textContent = 'Menu';
      });
    });
    }
});