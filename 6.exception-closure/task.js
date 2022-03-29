//задание 1
function parseCount(value) {
	let result = parseInt(value);
	if ( isNaN(result) ) {
		const error = new Error('Невалидное значение');
		throw error;
	}
	return result;
}

function validateCount(value) {
	let result;

	try {
		result = parseInt(value);
	} catch(err) {
		return err
	}

	return result;
}