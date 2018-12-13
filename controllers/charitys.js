const Charity = require('../models/charity');
const Donation = require('../models/donation')
module.exports = (app) => {



    // // NEW Comment
    // app.post('/donations/new', (req, res) => {
    //   Comment.create(req.body).then(comment => {
    //     res.redirect(`/reviews/${comment.reviewID}`);
    //   }).catch((err) => {
    //     console.log(err.message);
    //   });
    // });

    // DELETE
    app.delete('/reviews/comments/:id', function (req, res) {
        console.log("DELETE comment")
        Comment.findByIdAndRemove(req.params.id).then((comment) => {
            console.log(comment)
            res.redirect(`/reviews/${comment.reviewID}`);
        }).catch((err) => {
            console.log(err.message);
        });
    });


}
