const connectedItems = document.querySelectorAll(".ConnectedItem");
connectedItems.forEach((item) => {
	const colour = item.style.background;
	item.style.background = null;
	item.addEventListener("mouseenter", (e) => {
		item.style.setProperty("--display", "block");
	});
	item.addEventListener("mousemove", (e) => {
		let rect = e.target.getBoundingClientRect();
		let x = e.clientX - rect.left;
		let y = e.clientY - rect.top;
		item.style.setProperty("--x", x + "px");
		item.style.setProperty("--y", y + "px");
		item.style.setProperty("--primary", colour);
	});
	item.addEventListener("mouseleave", (e) => {
		item.style.setProperty("--display", "none");
	});
});
