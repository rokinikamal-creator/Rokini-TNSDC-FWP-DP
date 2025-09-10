// Smooth scroll for sidebar links

document.querySelectorAll('.sidebar a').forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    window.scrollTo({

      top: target.offsetTop - 20,

      behavior: 'smooth'

    });

  });

});

// Contact form alert

document.getElementById("contactForm").addEventListener("submit", function(e){

  e.preventDefault();

  alert("Your message has been sent!");

});