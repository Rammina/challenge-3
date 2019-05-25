
// document objects

// navigation bar objects

var navbar = {
	header: document.querySelector(".main-header"),
	name: document.querySelector("#nav__name"),
	menubutton: document.querySelector(".nav__menu"),
	menuitemscontainer: document.querySelector(".nav__items-container"),
	menuitems: document.querySelector(".nav__items"),
	menuitem: document.querySelectorAll(".nav__item"),
	showMenu: function showMenu() {
		navbar.menuitemscontainer.classList.add("show")
		navbar.menubutton.setAttribute("aria-expanded", "true");
	},
	hideMenu: function hideMenu() {
		navbar.menuitemscontainer.classList.remove("show")
		navbar.menubutton.setAttribute("aria-expanded", "false");
	},
	menutouched: false
}

navbar.menubutton.addEventListener("touchstart", function(){
	if(navbar.menuitemscontainer.classList.contains("show")) {
		navbar.hideMenu();
		navbar.menutouched = true;
	}
	else if(!(navbar.menuitemscontainer.classList.contains("show"))) {
		navbar.showMenu();
		navbar.menutouched = true;
	}
});

navbar.menubutton.addEventListener("click", function(){
	if(navbar.menuitemscontainer.classList.contains("show") && (navbar.menutouched === false)) {
		navbar.hideMenu();
	}
	else if(!(navbar.menuitemscontainer.classList.contains("show")) && (navbar.menutouched === false)) {
		navbar.showMenu();
	}
	navbar.menutouched = false;
});

