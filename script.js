function sign()
{
    window.location.href="sign.html"
}
function explore()
{
  window.location.href="explore.html"
}
document.addEventListener('DOMContentLoaded', function() {

window.addEventListener('load', function() {
    const preloader = document.querySelector('.preloader');
    
    const minDisplayTime = 500;
    const loadStart = Date.now();
    
    const loadTimeout = setTimeout(() => {
      hidePreloader();
    }, 3000);
  
    function hidePreloader() {
      const elapsed = Date.now() - loadStart;
      const remaining = Math.max(0, minDisplayTime - elapsed);
      
      setTimeout(() => {
        gsap.to(preloader, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.out",
          onComplete: () => {
            preloader.style.display = 'none';
            clearTimeout(loadTimeout);
          }
        });
      }, remaining);
    }
  
    if (document.readyState === 'complete') {
      hidePreloader();
    } else {
      window.addEventListener('load', hidePreloader);
    }
  });
  });

  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.querySelector('.nav-links');

  hamburger.addEventListener('click', function() {
      this.classList.toggle('active');
      navLinks.classList.toggle('active');
  });

  window.addEventListener('scroll', function() {
      const navbar = document.querySelector('.navbar');
      if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
      } else {
          navbar.classList.remove('scrolled');
      }
  });

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          
          const targetId = this.getAttribute('href');
          const targetElement = document.querySelector(targetId);
          
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
              
              if (navLinks.classList.contains('active')) {
                  hamburger.classList.remove('active');
                  navLinks.classList.remove('active');
              }
          }
      });
  });

  gsap.registerPlugin(ScrollTrigger);


gsap.from(".hero-content h1", { 
  opacity: 0, 
  y: 100, 
  duration: 1,
});

window.addEventListener('scroll', function() {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progressBar").style.width = scrolled + "%";
  });
gsap.from(".hero-content p", { 
  opacity: 0, 
  y: 50, 
  duration: 1,
});

gsap.from(".hero-buttons", { 
  opacity: 0, 
  y: 50, 
  duration: 1,
});

gsap.from(".hero-image", { 
  opacity: 0, 
  x: 50, 
  duration: 1,
});

document.querySelectorAll('.hero .reveal-up, .hero .reveal-right').forEach(el => {
  el.classList.remove('reveal-up', 'reveal-right');
});

  gsap.to('.circle-1', {
      y: 20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
  });

  gsap.to('.circle-2', {
      y: 30,
      duration: 4,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
  });

  gsap.to('.circle-3', {
      y: 15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
  });

  gsap.utils.toArray('.reveal-up').forEach(element => {
      ScrollTrigger.create({
          trigger: element,
          start: "top 80%",
          onEnter: () => {
              gsap.to(element, {
                  opacity: 1,
                  y: 0,
                  duration: 1.2,
                  ease: "power3.out"
              });
          }
      });
  });

  gsap.utils.toArray('.reveal-right').forEach(element => {
      ScrollTrigger.create({
          trigger: element,
          start: "top 80%",
          onEnter: () => {
              gsap.to(element, {
                  opacity: 1,
                  x:0,
                  duration:1
              });
          }
      });
  });

  gsap.utils.toArray('.reveal-left').forEach(element => {
      ScrollTrigger.create({
          trigger: element,
          start: "top 80%",
          onEnter: () => {
              gsap.to(element, {
                  opacity: 1,
                  x: 0,
                  duration: 1,
                  ease: "power3.out"
              });
          }
      });
  });

  gsap.utils.toArray(".service-card").forEach((card, index) => {
    // Set initial state
    gsap.set(card, {
      opacity: 0,
      y: 50,
      x: index % 2 === 0 ? 50 : -50 // Alternating directions
    });
  
    // Create scroll trigger
    ScrollTrigger.create({
      trigger: card,
      start: "top 80%",
      onEnter: () => {
        gsap.to(card, {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.8,
          delay: index * 0.15, // Stagger effect
          ease: "back.out(1.2)"
        });
      },
      once: true
    });
  
    // Hover effect
    card.addEventListener("mouseenter", () => {
      gsap.to(card, {
        y: -10,
        scale: 1.03,
        duration: 0.3,
        ease: "power1.out"
      });
    });
  
    card.addEventListener("mouseleave", () => {
      gsap.to(card, {
        y: 0,
        scale: 1,
        duration: 0.3,
        ease: "power1.out"
      });
    });
  });

  gsap.to('.hero-bg', {
      scrollTrigger: {
          trigger: '.hero',
          start: "top top",
          end: "bottom top",
          scrub: true
      },
      y: 100,
      ease: "none"
  });

  const stats = [
      { element: '.stat:nth-child(1) h4', end: 500 },
      { element: '.stat:nth-child(2) h4', end: 50 },
      { element: '.stat:nth-child(3) h4', end: 10000 }
  ];

  stats.forEach(stat => {
      ScrollTrigger.create({
          trigger: '.stats-card',
          start: "top 80%",
          onEnter: () => {
              gsap.to(stat.element, {
                  innerText: stat.end,
                  duration: 2,
                  snap: { innerText: 1 },
                  modifiers: {
                      innerText: function(innerText) {
                          return Math.floor(innerText).toLocaleString() + (stat.element.includes('$') ? 'M' : '+');
                      }
                  }
              });
          },
          once: true
      });
  });

  const courseSlider = document.querySelector('.courses-slider');
  let isDown = false;
  let startX;
  let scrollLeft;

  courseSlider.addEventListener('mousedown', (e) => {
      isDown = true;
      startX = e.pageX - courseSlider.offsetLeft;
      scrollLeft = courseSlider.scrollLeft;
  });

  courseSlider.addEventListener('mouseleave', () => {
      isDown = false;
  });

  courseSlider.addEventListener('mouseup', () => {
      isDown = false;
  });

  courseSlider.addEventListener('mousemove', (e) => {
      if(!isDown) return;
      e.preventDefault();
      const x = e.pageX - courseSlider.offsetLeft;
      const walk = (x - startX) * 2;
      courseSlider.scrollLeft = scrollLeft - walk;
  });

  const testimonialSlider = document.querySelector('.testimonial-slider');
  let isTestimonialDown = false;
  let testimonialStartX;
  let testimonialScrollLeft;

  testimonialSlider.addEventListener('mousedown', (e) => {
      isTestimonialDown = true;
      testimonialStartX = e.pageX - testimonialSlider.offsetLeft;
      testimonialScrollLeft = testimonialSlider.scrollLeft;
  });

  testimonialSlider.addEventListener('mouseleave', () => {
      isTestimonialDown = false;
  });

  testimonialSlider.addEventListener('mouseup', () => {
      isTestimonialDown = false;
  });

  testimonialSlider.addEventListener('mousemove', (e) => {
      if(!isTestimonialDown) return;
      e.preventDefault();
      const x = e.pageX - testimonialSlider.offsetLeft;
      const walk = (x - testimonialStartX) * 2;
      testimonialSlider.scrollLeft = testimonialScrollLeft - walk;
  });

// ScrollReveal().reveal('h1',{
//     origin:'bottom',
//     duration:1000,
//     distance:'50px',
// });
// ScrollReveal().reveal('.reveal-up',{
//     origin:'bottom',
//     duration:1000,
//     distance:'100px'
// });
ScrollReveal().reveal('.about-content',{
    origin:'right',
    duration:1000,
    delay:300,
    distance:'70px'
});
ScrollReveal().reveal('.services-grid',{
    origin:'bottom',
    duration:800,
    distance:'200px'
});
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 500,
    delay:100,
    reset: false
  });
  
  sr.reveal('.navbar', {
    beforeReveal: function(el) {
      gsap.set(el, { y: -100 });
    },
    afterReveal: function(el) {
      gsap.to(el, { 
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  });
 
document.addEventListener('DOMContentLoaded', function() {
    const boxes = document.querySelectorAll('.sec .box');
    
    const boxObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      rootMargin: '0px 0px -100px 0px'
    });
    
    boxes.forEach(box => {
      boxObserver.observe(box);
    });
  });