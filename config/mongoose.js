const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: 'config/.env' });
//connecting mongoose with database
//I stored MONGODB_URI in my system veriable for security reason. veriable name MONGODB_URI followed by your mongo atlas link
//for local use you can write this code
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/csvUploader');
mongoose.connect(process.env.MONGODB_URI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'Error in connecting to MongoDB'));

db.once('open', function () {
	console.log('Connected to Database :: Mongodb');
});

module.exports = db;
