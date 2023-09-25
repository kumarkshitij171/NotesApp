const express = require('express')
const path = require('path')
const blogs = require("../data/blogs")
const router = express.Router()

router.get('/', (res,req)=>{
    res.sendFile(path.join(__dirname,'../templates/index.html'))
})
router.get('/blog', (res,req)=>{
    blogs.forEach(e=>{console.log(e.tittle);})
    res.sendFile(path.join(__dirname,'../template/blogHomepage.html'))
})

module.exports = router