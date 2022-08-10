// @ts-nocheck
/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
	navToggle = document.getElementById("nav-toggle"),
	navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle && navMenu) {
	navToggle.addEventListener("click", () => {
		navMenu.classList.add("show-menu");
	});
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose && navMenu) {
	navClose.addEventListener("click", () => {
		navMenu.classList.remove("show-menu");
	});
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav__link");

const linkAction = () => {
	const navMenu = document.getElementById("nav-menu");
	// When we click on each nav__link, we remove the show-menu class
	if (navMenu) {
		navMenu.classList.remove("show-menu");
	}
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
	const header = document.getElementById("header");

	// Scroll greater than 50 viewport height, add the bg-header class to the header tag
	this.scrollY >= 50
		? header?.classList.add("bg-header")
		: header?.classList.remove("bg-header");
};

window.addEventListener("scroll", scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
	const scrollY = window.pageYOffset;

	sections.forEach((section) => {
		const sectionHeight = section.offsetHeight,
			sectionTop = section.offsetTop - 58,
			sectionId = section.getAttribute("id"),
			sectionClass = document.querySelector(
				".nav__menu a[href*=" + sectionId + "]"
			);

		if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
			sectionClass.classList.add("active-link");
		} else {
			sectionClass.classList.remove("active-link");
		}
	});
};

window.addEventListener("scroll", scrollActive);

const scrollUpElement = document.getElementById("scroll-up");

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
	// When scroll is higher than 350 vh add the show-scroll class
	this.scrollY >= 350
		? scrollUpElement.classList.add("show-scroll")
		: scrollUpElement.classList.remove("show-scroll");
};

window.addEventListener("scroll", scrollUp);

scrollUpElement.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
	origin: "top",
	distance: "60px",
	duration: 2500,
	delay: 400,
});

sr.reveal(`.home__data, .footer__container, .footer__group`);
sr.reveal(`.home__img`, { delay: 700, origin: "bottom" });
sr.reveal(`.logos__img, .program__card, .pricing__card`, { inverval: 100 });
sr.reveal(`.choose__img, .calculate__content`, { origin: "left" });
sr.reveal(`.choose__content, .calculate__img`, { origin: "right" });

/*=============== CALCULATE JS ===============*/
const calculateForm = document.getElementById("calculate-form");
const calculateHeight = document.getElementById("calculate-height");
const calculateWeight = document.getElementById("calculate-weight");
const calculateMessage = document.getElementById("calculate-message");

const calculateBMI = (event) => {
	event.preventDefault();

	if (calculateHeight && calculateWeight) {
		calculateMessage?.classList.remove("color-green");
		calculateMessage?.classList.remove("color-red");
		console.log("calculateHeight", calculateHeight);
		console.log("calculateWeight", calculateWeight);
		// @ts-ignore
		if (calculateHeight.value === "" || calculateWeight.value === "") {
			calculateMessage?.classList.remove("color-green");

			// Show message
			if (calculateMessage) {
				calculateMessage.classList.add("color-red");
				calculateMessage.textContent = "Fill in the Height and Weight";

				// Remove messae after three seconds
				setTimeout(() => {
					calculateMessage.textContent = "";
				}, 3000);
			}
		} else {
			// @ts-ignore
			const cm = calculateHeight.value / 100;
			// @ts-ignore
			const kg = calculateWeight.value;
			// @ts-ignore
			const bmi = Math.round(kg / (cm * cm));
			console.log(
				"🚀 ~ file: main.js ~ line 63 ~ calculateBMI ~ bmi",
				bmi
			);

			// show your health status
			if (calculateMessage) {
				if (bmi < 18.5) {
					calculateMessage.classList.add("color-green");
					// @ts-ignore
					calculateMessage.textContent = `Your BMI is ${bmi} and you are skinny`;
				} else if (bmi < 25) {
					calculateMessage.classList.add("color-green");
					// @ts-ignore
					calculateMessage.textContent = `Your BMI is ${bmi} and you are healthy`;
				} else {
					calculateMessage.classList.add("color-green");
					// @ts-ignore
					calculateMessage.textContent = `Your BMI is ${bmi} and you are overweight`;
				}
			}

			// @ts-ignore
			calculateHeight.value = "";
			// @ts-ignore
			calculateWeight.value = "";
		}
	}
};

calculateForm?.addEventListener("submit", calculateBMI);

/*=============== EMAIL JS ===============*/
