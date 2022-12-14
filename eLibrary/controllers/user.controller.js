const { User } = require('../models');

class UserController {
	async getAll(req, res) {
		let searchTerms = {};
		// const { name, author, page } = req.query;
		// const pagination = getPaginationValues({ page }, 1);
		// if (name) {
		// 	searchTerms['name'] = { $regex: name, $options: 'i' };
		// }
		// if (author) {
		// 	searchTerms['author'] = { $regex: author, $options: 'i' };
		// }

		try {
			const users = await User.find({
				...searchTerms,
			})
				// .limit(pagination.limit)
				// .skip(pagination.skip)
				// .sort({ name: -1 })
				.exec();
			res.send({ data: users });
		} catch (err) {
			console.log(err);
			res.send({ data: [], message: 'An error occurred' });
		}
	}

	// add a new Book
	async add(req, res) {
		const book = new User({
			name: req.body.name,
			description: req.body.description,
			author: req.body.author,
			volume: req.body.volume,
			category: req.body.category,
			filePath: req.body.filePath,
		});

		try {
			const savedBook = await book.save();
			res.status(201).send(savedBook);
		} catch (err) {
			console.log(err);
			return res.status(400).send({ message: 'Unable to save' });
		}
	}

	// get a single book resource based on id
	async getOne(req, res) {
		const { id } = req.params;
		const foundBook = await Book.findById(id);
		if (foundBook) {
			return res.send(foundBook);
		}
		return res.status(404).send({
			message: `Book with id ${id} not found`,
		});
	}

	// edit book details
	async edit(req, res) {
		const { id } = req.params;
		const foundUser = await User.findById(id);
		if (!foundUser) {
			return res.status(404).send({
				message: `Book with id ${id} not found`,
			});
		}
		const { name, email } = req.body;

		const newData = { name, email };

		const updatedUser = await User.findByIdAndUpdate(id, newData, {
			new: true,
		}).catch((err) => {
			console.log(err);
			return res.status(400).send({ message: 'Unable to update' });
		});
		res.send(updatedUser);
	}

	// remove a book from the database
	async delete(req, res) {
		const { id } = req.params;
		const deleted = await Book.findByIdAndDelete(id);
		if (deleted) {
			return res.send({ message: 'Deleted successfully' });
		}
		return res.status(400).send({
			message: `Unable to delete book with id ${id}`,
		});
	}
	// getAll = (req, res) => {};
	// add = (req, res) => {};
	// getOne = (req, res) => {};
	// edit = (req, res) => {};
	// delete = (req, res) => {};
}

module.exports = new UserController();
