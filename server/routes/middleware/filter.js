function filter (req,res,next) {

    const { api_key } = req.query

    if ( api_key === '12345' ) {
      next()
    }
    else {
      res.json({ msg: 'You shall not pass!!!'})
    }
  }
 module.exports = filter


//para probar en chrome http://127.0.0.1:3000/tasks?api_key=12345