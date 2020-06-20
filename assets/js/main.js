/*
	Spatial by TEMPLATED
	templated.co @templatedco
	Released for free under the Creative Commons Attribution 3.0 license (templated.co/license)
*/

const menu = document.querySelector('.fa-bars');
const exit = document.querySelector('.fa-times');
const offer = document.querySelector('.offer-icon');
menu.addEventListener('click', function () {
	document.getElementById('navPanel').classList.add('visible');
});

exit.addEventListener('click', function () {
	document.getElementById('navPanel').classList.remove('visible');
});

offer.addEventListener('click', function () {
	document.getElementById("dropdown-items").classList.toggle('active');
});

