

const navLists = document.querySelector('.nav-lists');



const menuicon = document.querySelector('.menu-icon');
let menuOpen = false;
menuicon.addEventListener('click', () => {
	if(!menuOpen) {
		menuicon.classList.add('open');
		menuOpen = true;
		navLists.classList.add('active');
	}else {
		menuicon.classList.remove('open');
		menuOpen = false;
		navLists.classList.remove('active');

	}
})

