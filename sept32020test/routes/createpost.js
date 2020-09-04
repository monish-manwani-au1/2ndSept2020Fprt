'use strict';

var createpost = function(request, response) {

    var DB = request.app.locals.DB;

    var data = {
        title: request.body.title,
        content: request.body.content,
		user: request.session.user._id
    };

    DB.collection("post").insertOne(data, function(error, result) {

        if(error) {
            console.log("Error adding post");
        }

        response.redirect("/homepage?success=true");
    })

}

exports.createpost = createpost;

