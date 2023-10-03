const express = require('express')
const newsRouter = express.Router()
const axios = require("axios")


newsRouter.get('/', async(req, res) => {
    //res.render('news')

    try {
        const newsAPI = await axios.get('https://raddy.co.uk/wp-json/wp/v2/posts/')
        res.render('news', { articles: newsAPI.data})
        
    } catch (error) { 
        if(error.response){
            res.render('news', { articles: null })
            console.log(error.response.status)
            console.log(error.response.headers)
        } else if (error.request){
            //console.log(error.request)
            res.render('news', { articles: null })
            //res.send(error.message)
        } else {
            //console.log('error', error.message)
            res.render('news', { articles: null })
            //res.send(error.message)
        }
    }

})


module.exports = newsRouter 