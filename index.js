document.addEventListener('DOMContentLoaded', function() {
    // Select all buttons or links that should trigger scrolling
    const scrollTriggers = document.querySelectorAll('.scroll-trigger');
  
    scrollTriggers.forEach((trigger, index) => {
      trigger.addEventListener('click', function(e) {
        e.preventDefault();
  
        // Calculate the target scroll position
        // Index 0 scrolls to 100vh, 1 to 200vh, 2 to 300vh
        const targetPosition = (index + 1) * window.innerHeight;
  
        // Smooth scroll to the target position
        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      });
    });
  
    // Optional: Update active state of buttons based on scroll position
    window.addEventListener('scroll', function() {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
  
      scrollTriggers.forEach((trigger, index) => {
        const targetPosition = (index + 1) * windowHeight;
        
        if (scrollPosition >= targetPosition - windowHeight / 2 &&
            scrollPosition < targetPosition + windowHeight / 2) {
          trigger.classList.add('active');
        } else {
          trigger.classList.remove('active');
        }
      });
    });
  });