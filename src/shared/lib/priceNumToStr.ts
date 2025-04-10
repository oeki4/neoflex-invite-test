export const priceNumToStr = (price: number, precision: number = 2) => {
	return price.toFixed(precision).replace(/\./g, ".");
};
