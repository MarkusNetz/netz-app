const env = process.env;

const config = {
	db:{
		host: env.MYDB_HOST,
		user: env.MYDB_USER,
		password: env.MYDB_PW,
		database: env.MYDB_NAME,
		port: 3306,
		timezone: 'Europe/Stockholm',
		dateStrings: 'datetime'
	},
	port: '3001'
};
module.exports = config;
