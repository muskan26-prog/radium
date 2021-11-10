const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/colors', function(req, res){
    res.send('This is another example of api')
});

router.get('/movies', function(req, res){
    let movies = ["eternals","Halloween Kills","incendies","Black Klansman","finding Nemo"]
    res.send(movies)
});

router.get('/movies/:movieIndex', function(req, res){
    let movies = ["eternals","Halloween Kills","incendies","Black Klansman","finding Nemo"]
    let index = req.params.movieIndex

    if(index <= movies.length){
        let movieAtIndex = movies[index]
        res.send(movieAtIndex)
    } else {
        res.send('Please use valid index')
    }
});

router.get('/films',function(req, res){
    let filmsArray = [{
                         "id": 1,
                         "name": "The Shining"
                      },
                      {
                        "id": 2,
                        "name": "Incendies"
                      },
                      {
                        "id": 3,
                        "name": "Rang de Basanti"
                      },
                      {
                        "id": 4,
                        "name": "Finding Demo"
                      }]
    res.send(filmsArray)
});

router.get('/films/:filmId',function(req, res){
    let filmsArray = [{
                         "id": 1,
                         "name": "The Shining"
                      },
                      {
                        "id": 2,
                        "name": "Incendies"
                      },
                      {
                        "id": 3,
                        "name": "Rang de Basanti"
                      },
                      {
                        "id": 4,
                        "name": "Finding Demo"
                      }]
    let index = req.params.filmId
    if(index <= filmsArray.length){
            let filmAtIndex = filmsArray[index]
            res.send(filmAtIndex)
        } else {
                    res.send('No movie exists with this ID')
                }
});

module.exports  = router;                                     //if module carries only single const/var/function