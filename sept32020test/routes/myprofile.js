'use strict';

var myprofile = function(request, response) {
    
    if(!request.session.user) {
        response.redirect("/login");
        return;
    }
    /*var DB = request.app.locals.DB;
    DB.collection("userDetails").findOne({user: request.session.user._id}).toArray(function(error, user){
        if(error) {
            console.log("Error connecting to user Collection");
        }

        var data = {
            user: request.session.user
        };}); */
    
    response.render("myprofile.hbs");

};

exports.myprofile = myprofile;
