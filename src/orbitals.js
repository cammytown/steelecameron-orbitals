window.onload = function() {
	var orbitals = new Orbitals();
	orbitals.addPlanet({
		size: 10,
		orbitSpeed: 0.05,
		inclinationSpeed: 0.06,
		fillColor: "blue",
		strokeColor: "red",

		orbitRadius: {
			x: 100,
			y: 100,
			z: 100
		},
	});
}
