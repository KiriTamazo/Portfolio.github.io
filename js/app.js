$(document).ready(function () {
	// AOS.init();

	/* ------ Menu Show------ */
	const showMenu = (toggleId, navId) => {
		const toggle = document.getElementById(toggleId);
		const nav = document.getElementById(navId);
 let icon = document.getElementById("icon");
		if (toggle && nav) {
			toggle.addEventListener("click", () => {
				nav.classList.toggle("show");
				icon.classList.toggle("fa-times");
			});
		}
	};
	showMenu("nav-toggle", "nav-menu");
	/* ------ Menu Show------ */
	const navLink = document.querySelectorAll(".nav__link");

	function linkAction() {
		//Active link
		navLink.forEach((x) => x.classList.remove("active"));
		this.classList.add("active");

		const navMenu = document.getElementById("nav-menu");
		navMenu.classList.remove("show");
	}
	navLink.forEach((x) => x.addEventListener("click", linkAction));

	$(window).scroll(function () {
		// Active nav
		function setActive(current) {
			$(".nav__link").removeClass("active");
			$(`.nav__link[href='#${current}']`).addClass("active");
		}
		function navScroll() {
			let currentSection = $("section[id]");
			currentSection.waypoint(
				function (direction) {
					if (direction == "down") {
						let currentSectionId = $(this.element).attr("id");
						setActive(currentSectionId);
					}
				},
				{
					offset: "50px",
				}
			);
			currentSection.waypoint(
				function (direction) {
					if (direction == "up") {
						let currentSectionId = $(this.element).attr("id");
						setActive(currentSectionId);
					}
				},
				{
					offset: "-600px",
				}
			);
		}
		navScroll();
	});

	/* =============Scroll Reveal Animation ============= */
	const sr = ScrollReveal({
		origin: "top",
		distance: "30px",
		duration: 1500,
		reset: true,
	});

	sr.reveal(
		`.home__data, .home__img,.home__social-icon,
            .about__content, .about__img,
            .section-title, .skills__data,
             .skills__img,
            .work__img, .contact__form,
            .footer`,
		{
			interval: 100,
		}
	);
});
