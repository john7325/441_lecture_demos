import express from 'express'
var router = express.Router();

router.post("/", async (req, res) => {
    let username = req.body.username

    //Save to database
    let newUser = new req.models.User({
        username: username
    })

    await newUser.save()

    res.json({status: 'success'})
})

export default router;