import signUpUser from "./4-user-promise"; 
import uploadPhoto from "./5-photo-reject"; 
export default function handleProfileSignup(firstName, lastName, filename) {
	return Promise.all([signUpUser(firstName, lastName), uploadPhoto(filename).catch((error) => {
		return error;
	}), ]).then((values) => {
		let status;
		const responses = [];
		values.forEach((value) => {
			if (value instanceof Error) status = 'failed';
			else status = 'fulfilled';
			responses.push({
				status,
				value,
			});
		});

		return responses
	});
}
