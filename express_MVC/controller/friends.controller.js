const friends = require('../models/friends.model');

let getFriends = (req, res) => {
    res.status(200).json(friends);
};

let getFriend = (req, res) => {
    const friendID = Number(req.params.friendID);

    if (friends[friendID]) {
        res.status(200).json(friends[friendID]);
    } else {
        res.status(404).json({
            'Error': 'The Friend Does Not Exist'
        });
    }
};

let addFriend = (req, res) => {
    if (!req.body.name) {
        return res.status(400).json({
            'Error': 'name was missed'
        });
    }

    let newFriend = {
        name: req.body.name,
        id: friends.length
    };

    friends.push(newFriend);

    res.json(newFriend);
};

module.exports = {
    getFriends,
    getFriend,
    addFriend,

}