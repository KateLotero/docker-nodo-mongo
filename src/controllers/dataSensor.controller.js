import Sensor from '../models/Sensor';

async function addData(req, res) {
	try {
		/*const { id, type, timestamp, temp } = req.body;
		const data = Sensor({
			id,
			type,
			timestamp,
			temp,
		});*/
		const data = Sensor(req.body); //las lineas comentadas se resumen en esta

		const dataStored = await data.save();
		res.send({ dataStored });
	} catch (error) {
		res.send({ message: error.message });
	}
}

async function getData(req, res) {
	// FALTA obligatorio startDate?

	try {
		const { deviceId, startDate, finalDate } = req.body;
		const endDate =
			finalDate == ''
				? new Date(`${startDate}T23:59:59.000Z`)
				: new Date(`${finalDate}T23:59:59.000Z`);
		const initDate = new Date(`${startDate}T00:00:00.000Z`);
		//console.log('START', initDate, ' FINAL', endDate);

		const diffTime = Math.abs(endDate - initDate);
		const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
		//console.log('DIASSSSSSSSSSSSSSS', diffDays);

		if (diffDays > 31 * 3) {
			res.send('El rango de las fecha no puede superar los 3 meses');
		} else if (deviceId == '') {
			console.log('entreeeeeeeeeeeee');
			const data = await Sensor.find({
				timestamp: {
					$gte: initDate,
					$lt: endDate,
				},
			});

			res.send(data);
		} else {
			const data = await Sensor.find({
				$and: [
					{
						timestamp: {
							$gte: initDate,
							$lt: endDate,
						},
					},
					{ deviceId: deviceId },
				],
			});

			res.send(data);
		}
	} catch (error) {
		console.log(error);
	}
}

module.exports = {
	addData,
	getData,
};
