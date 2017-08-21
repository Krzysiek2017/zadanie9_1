function getTriangleArea(a, h) {
	var triangleArea = a * h / 2;
	if ((a <= 0) || (h <= 0)) {
		console.log("Nieprawidłowe dane");
		return;
	}
	return triangleArea;
}

console.log(getTriangleArea(10, 6));

var triangle1Area = getTriangleArea(10, 15);

console.log(getTriangleArea(10, 15));

var triangle2Area = getTriangleArea(-20, -30);

console.log(getTriangleArea(-20, -30));

var triangle3Area = getTriangleArea(8, 16);

console.log(getTriangleArea(8, 16));