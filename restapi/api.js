const express = require("express")
const User = require("./models/users")
const Location = require("./models/locations")
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
    // Check if the user is already in the db
    let newEntry = await Location.findOne({ user: user });
    // If it exists, then we'll update it
    if (newEntry) {
        id = newEntry._id;
        newEntry.findByIdAndUpdate({ id }, { "location": location }, function(err, result) {
            if (err) {
                res.send(err);
            } else {
                res.send(result);
            }
        });
    } else {
        newEntry = new Location({
            user: user,
            location: location
        });

        await newEntry.save();
        res.send(newEntry);
    }
});

module.exports = router