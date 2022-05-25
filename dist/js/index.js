const vibes = [
	"..you are the best",
	"I love you 😘",
	"...i love coding"
];


var node = document.querySelector(".vibe");
node.appendChild(document.createElement('h1')).textContent = vibes[Math.round(Math.random() * vibes.length)];

