const express = require("express")
const router = express.Router()
const User = require("../models/User")
const bcrypt = require("bcrypt")
const { append, json } = require("express/lib/response")

//get all

router.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.send(users)

    } catch (error) {
        res.status(500).json({ message: error.message})

    }
})

//get one

router.get("/:id", getUser, (req, res) => {
    res.send(res.user)
})

//create

router.post("/register", async (req, res) => {
    
    try {
        await User.register(new User({username: req.body.email}), req.body.password)
        
        
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const user = new User({
            email: req.body.email,
            password: hashedPassword
        }); 
    
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({message: err.message});
    };
})

// login
/*
router.post("/login", async (req, res) => {
    const user = User.findOne(User => user.email = req.body.email)
        if(user == null) {
            return res.status(400).json({ message:"Cannot find user"})
        }
        try {
           if(await bcrypt.compare(req.body.password, user.hashedPassword)) {
               res.status(200).json({message:"login succesfull"})
           } else {
               res.send("Incorect Login")
           }
        } catch (err) {
            res.status(500).json({message: err.message})
        }
})*/

router.post("/login", async (req, res) => {
    try {
      const user = await User.findOne({ email: req.body.email });
      if (user) {
        const cmp = await bcrypt.compare(req.body.password, user.password);
        if (cmp) {
          //   ..... further code to maintain authentication like jwt or sessions
          res.send("Auth Successful");
        } else {
          res.send("Wrong username or password.");
        }
      } else {
        res.send("Wrong username or password.");
      }
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server error Occured");
    }
  });

//update

router.patch("/:id", getUser, async (req, res) => {
    
    if (req.body.email != null) {
        res.user.email = req.body.email;
    }
    if (req.body.password != null) {
        res.user.password = req.body.password;
    }
    try {
        const updatedUser = await res.user.save();
        res.json({updatedUser})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
    
})

//delete

router.delete("/:id", getUser, async (req, res) => {
    try {
        await res.user.remove()
        res.json({message: "Deleted User"})
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

async function getUser(req,res, next) {
    let user
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: "Cannot find user" })
        }
    } catch (err) {
        return res.status(500).json({ message: err.message })
        
    }

    res.user = user
    next();
}

module.exports = router