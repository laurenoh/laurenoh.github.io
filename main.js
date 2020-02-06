// from work page, clicking on work makes the pg scroll to recent work //


const arrowBox = document.querySelector(".arrow-box");
const projectContainer = document.querySelector(".project-container");

if (window.location.includes("index.html")) {
  const workLinks = document.querySelectorAll('a[href*="#work"]')
  const target = document.querySelector(".recent-work-padding")
  workLinks.forEach(workLink => {
    workLink.addEventListener('click', (e)=> {
      e.preventDefault()
      console.log("click")
      let hashval = workLink.getAttribute('href')
      console.log("hashval", hashval)
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      })
      // adds to history stack when you go back and forth between windows
      history.pushState(null,null,hashval)
    })
  })
}


arrowBox.addEventListener("click", () => {
  projectContainer.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
  })
})


// from non-work pgs, scrolls down to recent work due to #work from URL//
  window.onload = () => {
    if (window.location.hash === "#work") {
      target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
      })
    }
  }
