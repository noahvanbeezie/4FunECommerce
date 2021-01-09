const bcrypt = require('bcryptjs')

module.exports = {
    login: async (req,res => {
        const db = req.app.get('db').auth
        const {email,password} = req.body

        let user = await db.check_username(email)
        if(!user){
            return res.status(404).send('Email not found')
        }
        
        const authenticated = bcrypt.compareSync(password,user.password)
        if(authenticated){
            delete player.password
            req.session.user = user
            return res.status(200).send(req.session.user)
        }
    }),
    register: async (req,res => {
        const db = req.app.get('db').auth
        const {email,password} = req.body

        let checkUser = await db.checkUser(email)
        if(checkUser){
            return req.status(400).send('Email already in use')
        }

        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        try {
            let newUser = db.register_user({email,hash})
            newUser = newUser[0]
            req.session.user = newUser
            return res.status(201).send(req.session.user)
        }catch (err) {
            return res.sendStatus(500)
        }
    })
}