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








  // // Add smooth scrolling to all links
  // $("navbar-work").on('click', function(event) {
  //
  //   // Make sure this.hash has a value before overriding default behavior
  //   if (this.hash !== "") {
  //     // Prevent default anchor click behavior
  //     event.preventDefault();
  //
  //     // Store hash
  //     var hash = this.hash;
  //
  //     // Using jQuery's animate() method to add smooth page scroll
  //     // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
  //     $('html, body').animate({
  //       scrollTop: $(hash).offset().top
  //     }, 800, function(){
  //
  //       // Add hash (#) to URL when done scrolling (default click behavior)
  //       window.location.hash = hash;
  //     });
  //   } // End if
  // });
