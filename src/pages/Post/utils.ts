export const parseDate = (date: Date) => {
	let month: string | number = date.getMonth() + 1;
	let day: string | number = date.getDate();

	if (month < 10) {
		month = `0${month}`;
	}
	if (day < 10) {
		day = `0${day}`;
	}
	return `${date.getFullYear()}-${month}-${day}`;
};
export const toBase64 = (file: File): Promise<string> =>
	new Promise((resolve, reject) => {
		const reader = new FileReader();
		reader.readAsDataURL(file);
		reader.onload = () => {
			if (reader.result) {
				resolve(reader.result as string);
			}
		};
		reader.onerror = (error) => reject(error);
	});
