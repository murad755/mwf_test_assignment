export const Credentials = {
	valid: {
		username: process.env.VALID_USERNAME || '',
		password: process.env.VALID_PASSWORD || ''
	},
	invalid: {
		username: process.env.INVALID_USERNAME || '',
		password: process.env.INVALID_PASSWORD || ''
	}
};