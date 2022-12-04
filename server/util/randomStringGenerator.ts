const randomStringGenerator = (len: number): string => {
	const charset =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVQXYZ0123456789";
	let str = "";
	for (let i = 0; i < len; i++) {
		str += charset[Math.floor(Math.random() * charset.length)];
	}
	return str;
};

export default randomStringGenerator;
