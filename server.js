const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bp = require('body-parser');
const morgan = require('morgan');


// Variables

const PORT = process.env.PORT || 8080;
const DB_URI_DEV = 'mongodb+srv://ecrmadmin:bTe3dRXaH8YudM6M@ecrm-yfqsp.mongodb.net/test?retryWrites=true&w=majority';

const DATABASE_URI = process.env.DB_URI || DB_URI_DEV;

// Routes
const admin_routes = require('./routes/administration');
const auth_routes = require('./routes/authentication');
const products_routes = require('./routes/products');

// Initializing app
const app = express();

mongoose.connect(DATABASE_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useFindAndModify: false,
	dbName: 'ecrm0',
});

mongoose.connection.on('error', console.error.bind(console, 'connection error:'));

mongoose.connection.once('open', function () {
	console.log(`☕ Database : ON`);
});

app.use(morgan('dev'));
app.use(bp.urlencoded({ extended: false }));
app.use(bp.json());
app.use((req, res, next) => {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Headers', '*');
	if (req.method === 'OPTIONS') {
		res.header('Access-Control-Allow-Methods', 'PUT, POST,UPDATE, PATCH, DELETE, GET');
		return res.status(200).json({});
	}
	next();
});

app.get('/', (req, res) => {
	res.send('Hi man :)');
});

app.use('/auth', auth_routes);
app.use('/admin', admin_routes);
app.use('/products', products_routes);

app.listen(PORT, () => console.log('☕ Server on !!!!'));
