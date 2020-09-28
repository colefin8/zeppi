module.exports = {
    addFriend:async(req, res)=>{
        console.log('BODY!!', req.body)
        const db = req.app.get('db');
        const {userOne, userTwo}= req.body;
        const existingFriend = await db.check_friendship([
            userOne,
            userTwo
        ])
        if(existingFriend[0]){
            return res.status(200).send(`Already friends with ${userTwo}.`)
        }
        const newfriend = await db.add_friend([
            userOne,
            userTwo
        ])
        res.status(200).send(newfriend)
    },
    allFriends:(req, res)=>{
        console.log("allFriends", req.params)
        const db = req.app.get('db');
        const {userId}= req.params
        db.all_friends(userId).then(friend=>{
            res.status(200).send(friend)
        }).catch(err=>console.log(err))
    },
    acceptRequest:(req, res)=>{
        const db = req.app.get('db');
        const{friendId, userId}=req.params
        db.accept_friend([friendId, userId]).then(requests => {
            res.status(200).send(requests)
        }).catch(err=>console.log(err))
    },
    getRequest: (req,res)=>{
        const db = req.app.get('db');
        const{userId}= req.params
        db.friend_request(userId).then(friend=>{
            res.status(200).send(friend)
        }).catch(err=>console.log(err))
    },
    denyRequest:(req, res)=>{
        const db = req.app.get('db');
        const{friendId, userId}=req.params
        db.deny_friend([friendId, userId]).then(requests => {
            res.status(200).send(requests)
        }).catch(err=>console.log(err))
    },

}
