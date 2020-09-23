require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authCtrl= require('./controllers/authController');
const msgCtrl= require('./controllers/messageController');

const app = express();

const {CONNECTION_STRING, SESSION_SECRET, SERVER_PORT}=process.env;
app.use(express.json())
app.use(session({
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24},
    secret: SESSION_SECRET
}));

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set('db', db)
    console.log('Connected to db')
    db.init().catch(err=>console.log(err))
}).catch(err => console.log(err));


// authentication
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)
app.post('/auth/test', authCtrl.test)
app.post('/auth/logout', authCtrl.logout)
app.get('/auth/user', authCtrl.getUser)

//message
app.post('/msg/newMsg', msgCtrl.newMessage)
app.delete('/msg/deleteMsg/:message_id', msgCtrl.deleteMsg)
app.get('/msg/allMsgs/:message_id', msgCtrl.getMsgs)

//


app.listen(SERVER_PORT, () => console.log(`Connected to port ${SERVER_PORT}`));