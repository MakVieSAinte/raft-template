document.addEventListener('DOMContentLoaded', () => {
   const track = document.getElementById("carousel-track");
   const prevBtn = document.getElementById("prevBtn");
   const nextBtn = document.getElementById("nextBtn");
 
   const cards = track.querySelectorAll("div.shrink-0");
   const total = cards.length;
   const perView = 3;
 
   let currentIndex = 0;
 
   function updateCarousel() {
     const percent = (100 / perView) * currentIndex;
     track.style.transform = `translateX(-${percent}%)`;
   }
 
   nextBtn.addEventListener("click", () => {
     if (currentIndex < total - perView) {
       currentIndex++;
       updateCarousel();
     }
   });
 
   prevBtn.addEventListener("click", () => {
     if (currentIndex > 0) {
       currentIndex--;
       updateCarousel();
     }
   });


  //  ACCORDION

  const items = document.querySelectorAll(".accordion-item");

      items.forEach(item => {
        const header = item.querySelector(".accordion-header");

        header.addEventListener("click", () => {
          const openItem = document.querySelector(".accordion-item.open");
          if (openItem && openItem !== item) {
            openItem.classList.remove("open");
            openItem.querySelector(".accordion-content").style.maxHeight = null;
          }

          item.classList.toggle("open");
          const content = item.querySelector(".accordion-content");

          if (item.classList.contains("open")) {
            content.style.maxHeight = content.scrollHeight + "px";
          } else {
            content.style.maxHeight = null;
          }
        });
      });

  

       // Mobile Menu Logic
  const mobileMenuButton = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const openIcon = mobileMenuButton.querySelector('.open-icon');
  const closeIcon = mobileMenuButton.querySelector('.close-icon');
  
  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;
    
    // Toggle menu visibility
    if (isMenuOpen) {
      mobileMenu.classList.remove('translate-x-full');
      openIcon.classList.add('hidden');
      closeIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden'; // Prevent scrolling
    } else {
      mobileMenu.classList.add('translate-x-full');
      openIcon.classList.remove('hidden');
      closeIcon.classList.add('hidden');
      document.body.style.overflow = ''; // Restore scrolling
    }
  }

  // Toggle menu on button click
  mobileMenuButton.addEventListener('click', toggleMenu);

  // Close menu when clicking on a link
  const mobileMenuLinks = mobileMenu.querySelectorAll('a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (isMenuOpen) toggleMenu();
    });
  });

  // Close menu on escape key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isMenuOpen) {
      toggleMenu();
    }
  });

  // Close menu when clicking outside
  document.addEventListener('click', (e) => {
    if (isMenuOpen && !mobileMenu.contains(e.target) && !mobileMenuButton.contains(e.target)) {
      toggleMenu();
    }
  });

  
})