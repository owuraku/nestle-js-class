const { Book } = require('../models');
const { getPaginationValues } = require('../utils');

class BookController {
	// get all books based to search parameters
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
			const books = await Book.find({
				...searchTerms,
			})
				// .limit(pagination.limit)
				// .skip(pagination.skip)
				// .sort({ name: -1 })
				.exec();
			res.send({ data: books });
		} catch (err) {
			console.log(err);
			res.send({ data: [], message: 'An error occurred' });
		}
	}

	// add a new Book
	async add(req, res) {
		const book = new Book({
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
		const foundBook = await Book.findById(id);
		if (!foundBook) {
			return res.status(404).send({
				message: `Book with id ${id} not found`,
			});
		}

		const newData = {
			name: req.body.name,
			description: req.body.description,
			author: req.body.author,
			volume: req.body.volume,
			category: req.body.category,
			filePath: req.body.filePath,
		};

		const updatedBook = await Book.findByIdAndUpdate(id, newData, {
			new: true,
		}).catch((err) => {
			console.log(err);
			return res.status(400).send({ message: 'Unable to update' });
		});
		res.send(updatedBook);
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
}

module.exports = new BookController();
