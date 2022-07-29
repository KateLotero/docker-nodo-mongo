require('dotenv').config();
const mongoose = require('mongoose');

const { MONGODB_HOST, MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${MONGODB_HOST}/${MONGODB_DATABASE}`;

/*

PRUEBAS QUE NOS AYUDARON A DETERMINAR EL PROBLEMA

const MONGODB_URI = 'mongodb://localhost:27017/prueba2';

mongoose.connect(MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
}); */

(async () => {
	try {
		const db = await mongoose.connect(MONGODB_URI, {
			useNewUrlParser: true,
			useUnifiedTopology: true,
		}); //mongo: el nombre que le puse al servicio de mongo en el docker compose
		console.log('DB is connected to', db.connection.name);
	} catch (error) {
		console.error(error);
	}
})();
