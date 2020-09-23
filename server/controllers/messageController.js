module.exports = {
    newMessage:(req,res)=>{
        console.log('BODY!!', req.body)
        const db = req.app.get('db');
        const {message, sender, receiver, lat, long} = req.body;
        db.create_message([
            message,
            sender,
            receiver,
            lat,
            long
        ]).then(message=>{
            res.status(200).send(message)
        }).catch(err => {console.log(err)});
    },
    deleteMsg:(req, res)=>{
        console.log('what is req.params', req.params)
        const db = req.app.get('db');
        const {message_id}= req.params
        db.delete_message([
            message_id
        ]).then(message=>{
            console.log(message)
            res.status(200).send(message)
        }).catch(err=>{console.log(err)});
    },
    getLoot:(req, res)=>{
        const db = req.app.get('db');
        const { userId } = req.params
        db.message_recipient([userId]).then(message=>{
            res.status(200).send(message)
        }).catch(err=>{console.log(err)});

    },
    getMsg:(req, res)=>{
        const db = req.app.get('db');
        const {lootId} = req.params
        console.log(lootId)
        db.user_message([lootId]).then(message => {
            res.status(200).send(message[0])
        }).catch(err => console.log(err))
    }
}