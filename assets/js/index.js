document.addEventListener('DOMContentLoaded', () => {
class ResponsiveCarousel {
            constructor() {
                this.track = document.getElementById("carousel-track");
                this.prevBtn = document.getElementById("prevBtn");
                this.nextBtn = document.getElementById("nextBtn");
                
                this.cards = this.track.querySelectorAll("div.shrink-0");
                this.total = this.cards.length;
                
                this.currentIndex = 0;
                this.startX = 0;
                this.currentX = 0;
                this.isDragging = false;
                
                this.init();
            }
            
            init() {
                this.updateCarousel();
                this.addEventListeners();
                
                // Update on window resize
                window.addEventListener('resize', () => {
                    this.updateCarousel();
                });
            }
            
            getItemsPerView() {
                if (window.innerWidth < 768) return 1; // Mobile: 1 item
                if (window.innerWidth < 1024) return 2; // Tablet: 2 items
                return 3; // Desktop: 3 items
            }
            
            getMaxIndex() {
                const perView = this.getItemsPerView();
                return Math.max(0, this.total - perView);
            }
            
            updateCarousel() {
                const perView = this.getItemsPerView();
                const maxIndex = this.getMaxIndex();
                
                // Adjust current index if needed
                if (this.currentIndex > maxIndex) {
                    this.currentIndex = maxIndex;
                }
                
                const percent = (100 / perView) * this.currentIndex;
                this.track.style.transform = `translateX(-${percent}%)`;
                
                // Update button states
                this.prevBtn.disabled = this.currentIndex === 0;
                this.nextBtn.disabled = this.currentIndex >= maxIndex;
                
            }
            
            addEventListeners() {
                this.nextBtn.addEventListener("click", () => {
                    const maxIndex = this.getMaxIndex();
                    if (this.currentIndex < maxIndex) {
                        this.currentIndex++;
                        this.updateCarousel();
                    }
                });
                
                this.prevBtn.addEventListener("click", () => {
                    if (this.currentIndex > 0) {
                        this.currentIndex--;
                        this.updateCarousel();
                    }
                });
                
                // Touch events for swipe
                this.track.addEventListener('touchstart', (e) => {
                    this.startX = e.touches[0].clientX;
                    this.isDragging = true;
                });
                
                this.track.addEventListener('touchmove', (e) => {
                    if (!this.isDragging) return;
                    e.preventDefault();
                    this.currentX = e.touches[0].clientX;
                });
                
                this.track.addEventListener('touchend', () => {
                    if (!this.isDragging) return;
                    this.isDragging = false;
                    
                    const deltaX = this.startX - this.currentX;
                    const threshold = 50;
                    
                    if (Math.abs(deltaX) > threshold) {
                        if (deltaX > 0) {
                            // Swipe left - next
                            const maxIndex = this.getMaxIndex();
                            if (this.currentIndex < maxIndex) {
                                this.currentIndex++;
                                this.updateCarousel();
                            }
                        } else {
                            // Swipe right - previous
                            if (this.currentIndex > 0) {
                                this.currentIndex--;
                                this.updateCarousel();
                            }
                        }
                    }
                });
                
                // Mouse events for desktop drag
                this.track.addEventListener('mousedown', (e) => {
                    this.startX = e.clientX;
                    this.isDragging = true;
                    this.track.style.cursor = 'grabbing';
                });
                
                document.addEventListener('mousemove', (e) => {
                    if (!this.isDragging) return;
                    e.preventDefault();
                    this.currentX = e.clientX;
                });
                
                document.addEventListener('mouseup', () => {
                    if (!this.isDragging) return;
                    this.isDragging = false;
                    this.track.style.cursor = 'grab';
                    
                    const deltaX = this.startX - this.currentX;
                    const threshold = 50;
                    
                    if (Math.abs(deltaX) > threshold) {
                        if (deltaX > 0) {
                            const maxIndex = this.getMaxIndex();
                            if (this.currentIndex < maxIndex) {
                                this.currentIndex++;
                                this.updateCarousel();
                            }
                        } else {
                            if (this.currentIndex > 0) {
                                this.currentIndex--;
                                this.updateCarousel();
                            }
                        }
                    }
                });
                
                // Keyboard navigation
                document.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') {
                        this.prevBtn.click();
                    } else if (e.key === 'ArrowRight') {
                        this.nextBtn.click();
                    }
                });
            }
        }
        


class AnimatedCounter {
            constructor() {
                this.counters = document.querySelectorAll('.counter');
                this.hasAnimated = false;
                this.init();
            }

            init() {
                // Observer pour détecter quand la section entre dans le viewport
                const observer = new IntersectionObserver((entries) => {
                    entries.forEach(entry => {
                        if (entry.isIntersecting && !this.hasAnimated) {
                            this.hasAnimated = true;
                            this.startCountAnimation();
                        }
                    });
                }, {
                    threshold: 0.5 // Déclenche quand 50% de la section est visible
                });

                observer.observe(document.getElementById('counters-section'));
            }

            formatNumber(num, suffix = '', decimal = 0) {
                if (suffix === 'M') {
                    // Pour les millions, afficher comme "3M"
                    const millions = num / 1000000;
                    if (millions >= 1) {
                        return millions.toFixed(decimal) + 'M';
                    }
                }
                
                if (decimal > 0) {
                    return num.toFixed(decimal);
                }
                
                // Formatage avec des virgules pour les grands nombres
                return num.toLocaleString();
            }

            animateCounter(counter) {
                const target = parseInt(counter.dataset.target);
                const suffix = counter.dataset.suffix || '';
                const decimal = parseInt(counter.dataset.decimal) || 0;
                const duration = 2000; // 2 secondes
                const stepTime = 16; // ~60fps
                const steps = duration / stepTime;
                const increment = target / steps;
                
                let current = 0;
                let step = 0;

                const timer = setInterval(() => {
                    step++;
                    current += increment;
                    
                    // Utiliser une fonction d'easing pour un effet plus naturel
                    const progress = step / steps;
                    const easedProgress = this.easeOutQuart(progress);
                    const value = Math.floor(target * easedProgress);
                    
                    counter.textContent = this.formatNumber(value, suffix, decimal);
                    
                    if (step >= steps) {
                        clearInterval(timer);
                        // S'assurer que la valeur finale est exacte
                        counter.textContent = this.formatNumber(target, suffix, decimal);
                    }
                }, stepTime);
            }

            // Fonction d'easing pour un effet plus naturel
            easeOutQuart(t) {
                return 1 - Math.pow(1 - t, 4);
            }

            startCountAnimation() {
                this.counters.forEach((counter, index) => {
                    // Délai échelonné pour un effet en cascade
                    setTimeout(() => {
                        this.animateCounter(counter);
                    }, index * 200);
                });
            }
        }






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

  
  new ResponsiveCarousel();

  new AnimatedCounter();

})