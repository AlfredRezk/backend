const env = process.env.NODE_ENV || 'production';

const config = {
	production: {
		port: process.env.PORT || 8080,
		dbURL:
			"mongodb+srv://alfred:alfred00@cluster0.bmyec.mongodb.net/orgami",
		authCookieName: "x-auth-token",
	},

};

module.exports = config[env];