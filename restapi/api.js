const express = require("express")
const User = require("./models/users")
const Location = require("./models/locations")
const Friend = require("./models/friends")
const router = express.Router()

// Get all users
router.get("/users/list", async (req, res) => {
    const users = await User.find({}).sort('-_id') //Inverse order
    res.send(users)
})

//register a new user
router.post("/users/add", async (req, res) => {
    let name = req.body.name;
    let email = req.body.email;
    //Check if the device is already in the db
    let user = await User.findOne({ email: email })
    if (user)
        res.send({ error: "Error: This user is already registered" })
    else {
        user = new User({
            name: name,
            email: email,
        })
        await user.save()
        res.send(user)
    }
})

// register a new location
router.post("/location/add", async (req, res) => {
    let user = req.body.user;
    let location = req.body.location;
    let state = req.body.state;
    let country = req.body.country;
    // Check if the user is already in the db
    let newEntry = await Location.findOne({ user: user });
    // If it exists, then we'll update it
    if (newEntry) {
        var query = { "_id" : newEntry._id };
        newEntry.location = location;
        newEntry.state = state;
        newEntry.country = country;
        await Location.findOneAndUpdate(query, newEntry, function(err, doc) {
            if (err) {
                console.log("Something wrong when updating data!");
            } else {
                console.log(doc);
            }
        });
    } else {
        newEntry = new Location({
            user: user,
            location: location,
            state: state,
            country: country
        });

        await newEntry.save();
        res.send(newEntry);
    }
});

// get friends locations
router.post("/friends/locations/", async (req, res) => {

    const userWebId = req.body.webId
    var query = { $and: [ 
        { $or: [ 
            { "requester": userWebId},
            { "target": userWebId }
        ]},
        { "status": "accepted"}
       ]};
    
    Friend.find().and(query).exec( function(err, docs) {
        if (err) {
            console.log("Error al encontrar los amigos");
        } else {
            var users = docs.map(function(elem) {
                return (elem.target == userWebId)?elem.requester : elem.target;
            }, this)
            console.log(users)
                    
            Location.find({'user' : { $in: users}}, function(err, docs){
                if(err) {
                    console.log("Error al encontrar los usuarios dados los amigos")
                } else {
                    console.log(docs);
                    res.send(docs);
                }
            })
        }
    })


})

module.exports = router