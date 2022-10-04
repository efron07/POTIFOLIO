
///NAVIGATION PAGINATION TO DIFFRERENT SECTION///

document.querySelector('.navbar-nav').addEventListener('click',function(e){
    e.preventDefault();

     if(e.target.classList.contains('nav-link'))
     {
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView(
            {
                behavior:'smooth'
            }
        );
     }
})
 
    ///VAVIGATION SCROLLING TO DIFFERENT PAGE SECTION///


    