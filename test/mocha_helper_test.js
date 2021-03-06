const mongoose = require('mongoose');
mongoose.Promise = global.Promise; //ES6 - promise

// helper file always contains hooks lifeCycle

before((done) => {
	mongoose.connect('mongodb://localhost/mongotube', { useNewUrlParser: true });
	mongoose.connection
		.once('open', () => {
			//console.log('connected')
			done();
		})
		.on('error', (error) => {});
});

beforeEach((done) => {
	mongoose.connection.collections.students.drop(() => {
		done();
	});
});
