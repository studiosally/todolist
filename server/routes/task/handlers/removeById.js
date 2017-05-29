const Task = require('../../../models/Task')

function removeById(req,res){

  const { id } = req.params

  Task.findByIdAndRemove(id)
    .then( msg => {
    res.render('liststasks',{ tasks })
     console.log(`tasks has been removed succesfully`)
    })
    .catch( err => {
      res.json(err)
    })

}
module.exports = removeById