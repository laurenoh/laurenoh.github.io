
const workLink = document.querySelector(".navbar-work")
workLink.addEventListener("click", function(event) {
  event.preventDefault();
  const recentWorkContainer = document.querySelector(".recent-work-padding")
  const scrollToLocaton = recentWorkContainer.getBoundingClientRect().y
  window.scrollTo({
    top: scrollToLocaton,
    behavior: 'smooth',
  });
})
