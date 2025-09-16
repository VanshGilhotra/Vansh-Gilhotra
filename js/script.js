const filterButtons = document.querySelectorAll('.filter-btns button');
  const items = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      // Set active class
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');

      const filter = button.getAttribute('data-filter');

      items.forEach(item => {
        if (filter === '*' || item.classList.contains(filter)) {
          item.classList.add('show');
        } else {
          item.classList.remove('show');
        }
      });
    });
  });


  // --------- SCROLL TOGGLE CLASSES
  AOS.init();
// Change navbar style on scroll
window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    const section = document.getElementById('');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// Wait for the page to load
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    function activateMenu() {
        let scrollY = window.pageYOffset;

        sections.forEach((section) => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute("id");

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach((link) => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").includes(sectionId)) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    window.addEventListener("scroll", activateMenu);
});

function toggleMenu() {
    const nav = document.querySelector('.nav-links-wrapper');
    nav.classList.toggle('show');
}

document.querySelectorAll('.nav-links').forEach(link => {
    link.addEventListener('click', function () {
        const menuList = document.querySelector('.nav-links-wrapper');
        // Only hide if it's open
        if (menuList.classList.contains('show')) {
            menuList.classList.remove('show');
        }
    });
});

// jQuery (since Bootstrap 4 uses it)
$('.navbar-toggler').on('click', function() {
  $(this).find('i').toggleClass('fa-bars fa-times');
});
