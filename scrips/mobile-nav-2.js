function initNavToggle() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.nav-list');
  
    if (toggleButton && navbarLinks) {
      toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
      });
    }
  }