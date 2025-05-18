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

  
})