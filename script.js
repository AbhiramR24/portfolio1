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
});