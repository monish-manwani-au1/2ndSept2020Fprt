'use strict';

var loginpage = function(request, response){

    if(request.session.user){
        response.redirect("/homepage");
        return;
    }

    response.render("login.hbs");
}

exports.loginpage = loginpage;