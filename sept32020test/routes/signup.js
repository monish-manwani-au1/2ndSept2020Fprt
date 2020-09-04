'use strict';

var signuppage = function(request, response){

    if(request.session.user){
        response.redirect("/homepage");
        return;
    }

    response.render("signup.hbs");
}

exports.signuppage = signuppage;


