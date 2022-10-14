const Toggle = document.getElementsByClassName('Toggle')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

Toggle.addEventListener('click', () =>{
	navbarLinks.classList.toggle('active')
})
