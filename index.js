const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.post('/bfhl', (req, res) => {
	const { data } = req.body;

	if (!Array.isArray(data)) {
		return res.status(400).json({ is_success: false, message: 'Invalid input data' });
	}

	const numbers = data.filter((item) => !isNaN(item));
	const alphabets = data.filter((item) => isNaN(item) && item.length === 1);
	const highest_alphabet =
		alphabets.length > 0 ? [ alphabets.reduce((a, b) => (a.toLowerCase() > b.toLowerCase() ? a : b)) ] : [];

	const response = {
		is_success: true,
		user_id: 'Deepanshu',
		email: 'deepanshu2002kumar@gmail.com',
		roll_number: '22BCS10257',
		numbers,
		alphabets,
		highest_alphabet
	};

	res.json(response);
});

app.get('/bfhl', (req, res) => {
	res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
