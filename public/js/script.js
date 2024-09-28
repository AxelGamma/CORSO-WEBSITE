// Add custom JavaScript here


function userScroll() {
   const navbar = document.querySelector('.navbar')

   window.addEventListener('scroll', () => {
      if (window.scrollY > 50) {
         navbar.classList.add('bg-dark')
      } else {
         navbar.classList.remove('bg-dark')
      }
      /* MOSTRAR CUANDO VA AUMENTANDO Y DISMINUYENDO Y */
      /* console.log(window.scrollY) */
   })

   
}

document.addEventListener('DOMContentLoaded',userScroll)