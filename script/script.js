// Navigation menu open and close 
const navOpen = document.getElementById("nav-open");
const navClose = document.getElementById("nav-close");
const home = document.getElementById("home-btn");
const about = document.getElementById("about-btn");
const store = document.getElementById("store-btn");

navClose.addEventListener("click", closeNav);
home.addEventListener("click", closeNav);
about.addEventListener("click", closeNav);
store.addEventListener("click", closeNav);

navOpen.addEventListener("click", () => {
	navOpen.style.display = "none";
	navClose.style.display = "inline-block";
	navList.classList.add("navigation__list--open");
});

function closeNav() {
	navClose.style.display = "none";
	navOpen.style.display = "inline-block";
	navList.classList.remove("navigation__list--open");
}




    
    
    
    
