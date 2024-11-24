const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active-link'))
    this.classList.add('active-link')
}
linkColor.forEach(l => l.addEventListener('click', colorLink))

const showMenu = (toggleId, navbarId) =>{
    const toggle = document.getElementById(toggleId),
    navbar = document.getElementById(navbarId)

    if(toggle && navbar){
        toggle.addEventListener('click', ()=>{

            navbar.classList.toggle('show-menu')

            toggle.classList.toggle('rotate-icon')
        })
    }
}
showMenu('nav-toggle','nav')

const toggleSearch = (search, button) =>{
    const searchBar = document.getElementById(search),
          searchButton = document.getElementById(button)
 
    searchButton.addEventListener('click', () =>{
        searchBar.classList.toggle('show-search')
    })
 }
 toggleSearch('search-bar', 'search-button')
 

