const bcrypt = require('bcrypt');
module.exports = {
    register: async (req, res) => {
        console.log('BODY!!', req.body)
        const db = req.app.get('db');
        const {user_name, first_name, last_name, phone_number, email, password} = req.body;

        const existingUser = await db.check_user(email)
        if (existingUser[0]) {
            return res.status(409).send('Incorrect credentials')
        }
        const salt = bcrypt.genSaltSync(10);
        console.log('SALT', salt)
        console.log('PASSWORD!',password)
        const hash = bcrypt.hashSync(password, salt)
        console.log('HASH?', hash)
        const newUser = await db.create_user([user_name, first_name, last_name, phone_number, email, hash])
        req.session.user = {
        userId: newUser[0].user_id,
        userName: newUser[0].user_name,
        firstName: newUser[0].first_name,
        lastName: newUser[0].last_name,
        phoneNumber: newUser[0].phone_number,
        email: newUser[0].email,
        message: newUser[0].message
    }
    res.status(200).send(req.session.user)
},
    login: async (req, res)=> {
        const db = req.app.get('db');
        const{user_name, email, password}= req.body;
        console.log("user_name/email", user_name, email)
        const user= await db.check_user(email)
console.log("user", user)
        if(!user[0]){
            return res.status(401).send('Incorrect credentials');
        }else {
            const authenticated=bcrypt.compareSync(password, user[0].password);
            if(authenticated){
                req.session.user={
                    userId: user[0].user_id,
                    userName: user[0].user_name,
                    firstName: user[0].first_name,
                    lastName: user[0].last_name,
                    phoneNumber: user[0].phone_number,
                    email: user[0].email,
                    message: user[0].message

                    }
                res.status(200).send(req.session.user)
            }else{
                res.status(403).send('Username or password incorrect')
            }
        }
 },
    logout: (req, res) => {
        req.session.destroy();
        res.status(200).send('you are logout!');
    },
    test: (req, res)=>{
        console.log(req.body)
        res.status(200).send('TEST!');
    }
}