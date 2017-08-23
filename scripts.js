function getTriangleArea(a, h) {
	var triangleArea = a * h / 2;
	if ((a <= 0) || (h <= 0)) {
		return "Nieprawidłowe dane";
	}
	return triangleArea;
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);

console.log(triangle1Area);

var triangle2Area = getTriangleArea(-20, -30);

console.log(triangle2Area);

var triangle3Area = getTriangleArea(8, 16);

console.log(triangle3Area);