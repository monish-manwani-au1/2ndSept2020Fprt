'use strict';

var createprepost = function(request, response) {

    if(!request.session.user) {
        response.redirect("/login");
        return;
    }
    var data = {};

    if(request.query.success) {
        data.postAdded = true;
    }

    response.render("createpost.hbs", data);

    
}
exports.createprepost = createprepost;