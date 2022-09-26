const randomStringGenerator = (len) => {
	const charset =
		"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVQXYZ0123456789";
	string = "";
	for (let i = 0; i < len; i++) {
		string += charset[Math.floor(Math.random() * charset.length)];
	}
	return string;
};

module.exports = randomStringGenerator;
