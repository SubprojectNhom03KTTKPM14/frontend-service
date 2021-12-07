export function currencyFormat(number) {
	if (number) {
		return number.toLocaleString("vi-VN", {
			style: "currency",
			currency: "VND",
		});
	}
}
