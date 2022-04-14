const users = []
const bcrypt = require('bcryptjs')

module.exports = {

    login: (req, res) => {
      console.log('Logging In User')
      console.log(req.body)

      const { username, password } = req.body

      for (let i = 0; i < users.length; i++) {
        if(username === users[i].username){
          const existingPass = bcrypt.compareSync(password, users[i].passHash)
          if( existingPass){
            let returnUser = {...users[i]}
            delete returnUser.passHash
             return res.status(200).send(returnUser)

            if (users[i].username === username && users[i].password === password) {
              return res.status(200).send(users[i])
            }

          }
        }
      }
      res.status(400).send("User not found.")
    },






    register: (req, res) => {
        console.log('Registering User')
        // console.log(req.body)
        // users.push(req.body)
        
        const { username, email, firstName, lastName, password} = req.body

        const salt = bcrypt.genSaltSync(5)
        const passHash = bcrypt.hashSync(password, salt)

        let newUser = {
            username,
            email,
            firstName,
            lastName,
            passHash
          
        }
        users.push(newUser)
        // console.log(users)
        let returnUser = {...newUser}
        delete returnUser.passHash
        res.status(200).send(newUser)
    }
}