const Task = require('../../../models/Task')

function getAll(req,res){

	Task.find()
		.then(tasks => {
			res.render('liststasks',{ tasks })
		})
}

module.exports = getAll