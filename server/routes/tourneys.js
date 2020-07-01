const teamRoutes = (app, fs) => {
	const dataPath = './data/tourneys.json';

	const readFile = (
		callback,
		returnJson = false,
		filePath = dataPath,
		encoding = 'utf8'
	) => {
		fs.readFile(filePath, encoding, (err, data) => {
			if (err) {
				throw err;
			}

			callback(returnJson ? JSON.parse(data) : data);
		});
	};

	const writeFile = (
		fileData,
		callback,
		filePath = dataPath,
		encoding = 'utf8'
	) => {
		fs.writeFile(filePath, fileData, encoding, (err) => {
			if (err) {
				throw err;
			}

			callback();
		});
	};

	// TOURNEYS
	app.get('/tourneys', (req, res) => {
		readFile((data) => {
			var result = data['tourneys'];
			res.send(result);
		}, true);
	});
	app.get('/tourneys/:id', (req, res) => {
		readFile((data) => {
			const id = parseInt(req.params['id']);
			var result = data['tourneys'];
			var result_filtered = result.filter((item) => {
				return item.id === id;
			})[0];
			res.send(result_filtered);
		}, true);
	});

	// TOURNEY_TYPES
	app.get('/tourney_types', (req, res) => {
		readFile((data) => {
			var result = data['tourney_types'];
			res.send(result);
		}, true);
	});
	app.get('/tourney_types/:id', (req, res) => {
		readFile((data) => {
			const id = parseInt(req.params['id']);
			var result = data['tourney_types'];
			var result_filtered = result.filter((item) => {
				return item.id === id;
			})[0];
			res.send(result_filtered);
		}, true);
	});

	// DATES
	app.get('/dates', (req, res) => {
		readFile((data) => {
			var result = data['dates'];
			res.send(result);
		}, true);
	});

	// ROUNDS
	app.get('/rounds', (req, res) => {
		readFile((data) => {
			var result = data['rounds'];
			res.send(result);
		}, true);
	});

	// MATCHES
	app.get('/matches', (req, res) => {
		readFile((data) => {
			var result = data['matches'];
			res.send(result);
		}, true);
	});
};

module.exports = teamRoutes;
