const express = require('express');

const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!')
});

router.get('/colors', function(req, res){
    res.send('This is another example of api')
});

//Problem : 1
//  1: Create an endpoint for GET /movies that returns a list of movies. Define an array of movies in your code and return the value in response.

router.get('/movies', function(req, res){
    let movies = ["eternals","Halloween Kills","incendies","Black Klansman","finding Nemo"]
    res.send(movies)
});

/*Problem : 2 & 3
    2: Create an endpoint GET movies/indexNumber (For example GET /movies/1 is a valid request and it should return the movie in your array at index .
       You can define an array of movies again in your api
    3: Handle a scenario in problem 2 where if the index is greater than the valid maximum value a message is returned that tells the user to use a 
       valid index in an error message.*/


router.get('/movies/:movieIndex', function(req, res){                                             //Localhost:3000/movies/5
    let movies = ["eternals","Halloween Kills","incendies","Black Klansman","finding Nemo"]
    let index = req.params.movieIndex                                                             //index = 5                                 

    if(index < movies.length){                                                                   // 5< 5
        let movieAtIndex = movies[index]                                                          // movieAtIndex = incendies
        res.send(movieAtIndex)                                                                    
    } else {
        res.send('Please use valid index')
    }
});

/*Problem : 4
    4: Write another api called GET /films. Instead of an array of strings define an array of movie objects this time. 
       Each movie object should have values - id, name. 
       Return the entire array in this api’s response*/

router.get('/films',function(req, res){
    let filmsArray = [{
                         id: 1,
                         name: "The Shining"
                      },
                      {
                        id: 2,
                        name: "Incendies"
                      },
                      {
                        id: 3,
                        name: "Rang de Basanti"
                      },
                      {
                        id: 4,
                        name: "Finding Demo"
                      }]
    res.send(filmsArray)
}); 

/*Problem :5
    5: Write api GET /films/:filmId where filmId is the value received in request path params. Use this value to return a movie object with this id. 
    In case there is no such movie present in the array, return a suitable message in the response body. Example for a request GET /films/2 
    should return the movie object 
        {
        “id”: 3,
        “name”: “Rang de Basanti”
        }
    Similarly for a request GET /films/9 the response can be something like - ‘No movie exists with this id’
    */
router.get('/films/:filmId',function(req, res){                               // Localhost:3000/films/33
    let filmsArray = [{
                        id: 11,
                        name: "The Shining"
                      },
                      {
                        id: 22,
                        name: "Incendies"
                      },
                      {
                        id: 33,
                        name: "Rang de Basanti"
                      },
                      {
                        id: 44,
                        name: "Finding Demo"
                      }]
    let index = +req.params.filmId                                            // index = 22
    var cnt = 0

    for(let i=0; i<filmsArray.length; i++){                                   // i<3
      if(filmsArray[i].id === index ){                                        // filmsArray[1].id = 22
              res.send(filmsArray[i])
              cnt = 1
              break;
          } 
    }

    if(cnt === 0){
      res.send('No movie exists with this ID')
    }
});

module.exports  = router;                                                      //if module carries only single const/var/function