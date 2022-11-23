// document.addEventListener("scroll", () => {
// 	// animations for scroll effects
// 	window.webkitRequestAnimationFrame(function () {
// 		if (window.innerWidth >= 1024) {
// 			const scrollItem = document.querySelector(".scrollItem");
// 			const scrollPercentage = window.scrollY / window.innerHeight;
// 			const scrollValue = (window.innerWidth + 10) * scrollPercentage;
// 			if (scrollPercentage < 0.5) {
// 				scrollItem.style.transform = `translate3d(${scrollValue}px, 0, 0)`;
// 			}
// 		}
// 	});
// });

// const getScrollDist = () => {
// 	const scrollTop =
// 		window.pageYOffset !== undefined
// 			? window.pageYOffset
// 			: (
// 					document.documentElement ||
// 					document.body.parentNode ||
// 					document.body
// 			  ).scrollTop;
// 	return Math.round(scrollTop);
// };
//
// document.querySelector("#goDown").addEventListener("click", () => {
// 	const y =
// 		document.querySelector("#lower").getBoundingClientRect().top +
// 		window.scrollY;
// 	window.scroll({
// 		top: y,
// 		behavior: "smooth",
// 	});
// });
document.querySelector("#goDown").addEventListener("click", (e) => {
	window.scroll({
		top:
			document.querySelector("#howItWorks").getBoundingClientRect().top +
			window.scrollY,
		behavior: "smooth",
	});
});

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// Is present in viewport
			entry.target.style.setProperty("--opacity", "1");
			entry.target.style.setProperty("--transform", "0px");
		} else {
			if (window.innerWidth < 1024) return;
			entry.target.style.setProperty("--opacity", "0");
			entry.target.style.setProperty("--transform", "100px");
		}
	});
});

const lowerSections = document.querySelectorAll("[class*='lowerSection']");
lowerSections.forEach((entry) => observer.observe(entry));

const actionCards = document.querySelectorAll("[class*='action']");
actionCards.forEach((entry, index) => {
	entry.style.setProperty("--n", `${index}`);
	observer.observe(entry);
});

const accentObserver = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			// Is present in viewport
			entry.target.style.setProperty("--move", "1");
		} else {
			entry.target.style.setProperty("--move", "0");
		}
	});
});

const heroArea = document.querySelector("#hero");
accentObserver.observe(heroArea);
