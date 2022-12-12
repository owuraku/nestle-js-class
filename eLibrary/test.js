const sayMyName = (name) => console.log(`Say my name function: -  ${name}`);
const getMyName = () => {
	return new Promise((resolve, reject) => {
		// resolve('Seth');
		setTimeout(() => resolve('Seth'), 5000);
		// reject('Name not found');
	});
};

// getMyName()
// 	.then((name) => sayMyName(name))
// 	.catch((reason) => console.log(reason));

const printname = async () => {
	const name = await getMyName().catch();
	sayMyName(name);
};

printname();

// const multiple = (num1, num2) => num1 * num2;
// const add = (num1, num2) => num1 + num2;
// const divide = (num1, num2) => num1 / num2;

// getmyname => 5secs function

try {
	// get the name
	const n = getMyName;
	// send response to user
	res.send(n);
} catch (error) {}
