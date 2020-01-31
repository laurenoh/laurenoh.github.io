// from work page, clicking on work makes the pg scroll to recent work //
  const workLink = document.querySelector('a[href^="#work"]')
  let target = document.querySelector(".recent-work-padding")

  workLink.addEventListener('click', (e)=> {
    console.log("click")
    let hashval = workLink.getAttribute('href')

    target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
// adds to history stack when you go back and forth between windows//

    history.pushState(null,null,hashval)
    e.preventDefault()
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
