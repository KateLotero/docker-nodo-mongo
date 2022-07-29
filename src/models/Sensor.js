import { Schema, model } from 'mongoose';

//generalmente se crea un modelo por cada colección
// se pueden configurar que un campo sea requerido obligatoriamente, lo hacemos?
const sensorSchema = new Schema(
	{
		deviceId: String,
		timestamp: { type: Date, default: Date.now },
		values: {
			/***************************** Común*/
			msgId: Number,
			batteryVol: Number,
			batteryPer: Number,
			tamperStatus: String,
			orientation: String,
			fallAlarm: Number,
			acelStatus: Number,
			/***************************** 0801000003 (Ruido + CWS) */
			noiseSensorGemhoNoise: Number,
			/*****************************/
			noiseSensorGemhoNoiseMax: Number,
			noiseSensorGemhoNoiseMin: Number,
			noiseSensorGemhoNoiseAvg: Number,
			/*****************************/
			particleSensorRenkeParticle2_5: Number,
			particleSensorRenkeParticle10: Number,
			/*****************************/
			cwsSensorHondeTemperature: Number,
			cwsSensorHondeHumidity: Number,
			cwsSensorHondePressure: Number,
			cwsSensorHondeRainfall: Number,
			cwsSensorHondeRadiation: Number,
			/*****************************/
			cwsSensorHondeTemperatureMax: Number,
			cwsSensorHondeTemperatureMin: Number,
			cwsSensorHondeTemperatureAvg: Number,
			cwsSensorHondeHumidityMax: Number,
			cwsSensorHondeHumidityMin: Number,
			cwsSensorHondeHumidityAvg: Number,
			cwsSensorHondePressureMax: Number,
			cwsSensorHondePressureMin: Number,
			cwsSensorHondePressureAvg: Number,
			cwsSensorHondeRainfallMax: Number,
			cwsSensorHondeRainfallMin: Number,
			cwsSensorHondeRainfallAvg: Number,
			cwsSensorHondeRadiationMax: Number,
			cwsSensorHondeRadiationMin: Number,
			cwsSensorHondeRadiationAvg: Number,

			/***************************** 0801000002 (Ruido + Partículas) */
			noiseSensorRenkeNoise: Number,
			/*****************************/
			noiseSensorRenkeNoiseMax: Number,
			noiseSensorRenkeNoiseMin: Number,
			noiseSensorRenkeNoiseAvg: Number,
			/*****************************/
			particleSensorRenkeParticle2_5Max: Number,
			particleSensorRenkeParticle2_5Min: Number,
			particleSensorRenkeParticle2_5Avg: Number,
			particleSensorRenkeParticle10Max: Number,
			particleSensorRenkeParticle10Min: Number,
			particleSensorRenkeParticle10Avg: Number,

			/***************************** 0702050003 Estación meteorológica CAM */
			txTime: Number,
			rainTicks: Number,
			windSpeed: Number,
			windDirection: Number,
			solarRadiation: Number,
			uvIndex: Number,
			temperature: Number,
			humidity: Number,
			vaux: Number,
			solarPanel: Number,
		},
	},
	{
		collection: 'DAGMA',
		timestamps: false,
		versionKey: false,
	}
);

export default model('Sensor', sensorSchema);
