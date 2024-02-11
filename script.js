function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', function () {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      } else {
        entry.target.classList.remove('show');
      }
    });
  });


  const animatedElements = document.querySelectorAll('.animated');

  animatedElements.forEach(element => {
    observer.observe(element);
  });
});


document.getElementById("netflix-clone-icon").addEventListener("click", function() {
  
    window.open("https://severussingh.github.io/netflix-clone/", "_blank");
  });

  document.getElementById("Movie-Finder-icon").addEventListener("click", function() {
  
    window.open("https://severussingh.github.io/Movie-Finder/", "_blank");
  });

  document.getElementById("coffee-shop-icon").addEventListener("click", function() {
  
    window.open("https://severussingh.github.io/coffee.github.io/", "_blank");
  });
