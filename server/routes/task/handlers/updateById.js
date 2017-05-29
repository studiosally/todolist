const Task = require('../../../models/Task')

function updateById (req,res) {

  const { id } = req.params
  const { title } = req.body

  const updateData = {}
  if (title) updateData.title = title

  Task.findByIdAndUpdate(id, updateData)
    .then( msg => {
      res.json(msg)
    })
    .catch( err => {
      res.json(err)
    })
}

module.exports = updateById