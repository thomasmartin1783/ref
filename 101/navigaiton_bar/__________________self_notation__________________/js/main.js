

const header = document.querySelector('.main-header');

window.addEventListener('scroll' , () => {
	const scrollPos = window.scrollY;

	// don't use toggle here 
	// every time you scroll you will see a blink with toggle 
	// because it keeps toggling
	// better use add and remove

	if(scrollPos > 10) {
		header.classList.add('scrolled');
	}else {
		header.classList.remove('scrolled');
	}
});


const check = document.querySelector('.menu-btn');

if(check.checked == 0) {
	header.classList.add('blurry');

}



check.addEventListener('change', function(e){
	if (check.checked == 0) {
		header.classList.add('blurry');
		header.classList.remove('back');
		
	}else {
		header.classList.remove('blurry');
		header.classList.add('back');
	}

	
})
