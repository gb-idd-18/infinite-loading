
let theStateOfTheInterface = (event) => { 
  
  let winH = document.documentElement.clientHeight
  let docH = document.documentElement.scrollHeight
  let winY = window.scrollY
  let maxY = docH - winH

  if (winY >= maxY) {
    // You have definitely hit the bottom

    // Add new content when we hit the bottom
    document.querySelector('#content').innerHTML += `
      <section class="full-viewport">
        <h2>Thank you.</h2>
      </section>
      `
  }
}


window.addEventListener('load', theStateOfTheInterface)
window.addEventListener('scroll', theStateOfTheInterface)
window.addEventListener('resize', theStateOfTheInterface)
