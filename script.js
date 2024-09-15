randomImagePositions();
setImages();
// window.onload = () => {
// };

const lenis = new Lenis({
	duration: 1.2,
});

function raf(time) {
	lenis.raf(time);
	requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.querySelectorAll(".elem").forEach((elem) => {
	let image = elem.querySelector("img");
	let tl = gsap.timeline();
	let xTransform = gsap.utils.random(-100, 100);

	// console.log(image);
	tl.set(image, {
		transformOrigin: `${xTransform < 0 ? 0 : "100%"}`,
	}, "start")
		.to(image, {
			scale: 0,
			ease: "none",
			scrollTrigger: {
				trigger: image,
				start: "top top",
				end: "bottom top",
				scrub: true,
			},
		}, "start")
		.to(elem, {
			xPercent: xTransform,
			ease: "Power4.easeInOut",
			scrollTrigger: {
				trigger: elem,
				start: "top bottom",
				end: "bottom top",
				scrub: true,
			},
		}, "start");
});

// random Images form lorePicsum
function setImages() {
	const images = document.querySelectorAll(".grid .elem img");

	images.forEach((img, i) => {
		img.src = `https://picsum.photos/200/200?random=${i}`;
	});
}

// randomColumn
function randomImagePositions() {
	const gridColumns = 8;
	const div = document.querySelectorAll(".grid div");

	div.forEach((img, i) => {
		let rowGrid = Math.ceil((i + 1) / 2);
		let randomColumn = Math.floor(Math.random() * gridColumns) + 1;
		img.style.gridRow = rowGrid;
		img.style.gridColumn = randomColumn;
	});
}
