document.addEventListener("scroll", () => {
	// animations for scroll effects
	window.webkitRequestAnimationFrame(function () {
		if (window.innerWidth >= 1024) {
			const scrollItem = document.querySelector(".scrollItem");
			const scrollPercentage = window.scrollY / window.innerHeight;
			const scrollValue = (window.innerWidth + 10) * scrollPercentage;
			if (scrollPercentage < 0.5) {
				scrollItem.style.transform = `translate3d(${scrollValue}px, 0, 0)`;
			}
		}
	});
});

const getScrollDist = () => {
	const scrollTop =
		window.pageYOffset !== undefined
			? window.pageYOffset
			: (
					document.documentElement ||
					document.body.parentNode ||
					document.body
			  ).scrollTop;
	return Math.round(scrollTop);
};

document.querySelector("#goDown").addEventListener("click", () => {
	const y =
		document.querySelector("#lower").getBoundingClientRect().top +
		window.scrollY;
	window.scroll({
		top: y,
		behavior: "smooth",
	});
});
