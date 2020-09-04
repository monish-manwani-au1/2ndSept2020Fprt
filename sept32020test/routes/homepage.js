'use strict'
// Function for home page route
var homepage = function(request, response) {
    
    var DB = request.app.locals.DB;
    DB.collection("post").find({}).toArray(function(error, allPosts){
        if(error) {
            response.send("Error fetching blog posts");
        } else {
            var data = {
                allPosts: allPosts
            };
    //response.render("homepage.hbs", data);
    if(!request.session.user) {
        response.render("homepage.hbs", data);
        
    }
    else {
        response.render("homepage2.hbs",data)
    }
      }
    });

};

exports.homepage = homepage;

