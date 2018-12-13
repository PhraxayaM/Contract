const Donation = require('../models/donation')



module.exports = function(app, donation) {

    // Index
    app.get('/', (req, res) => {
        Donation.find()
            .then(donations => {
                //=> RETURN JSON
                if (req.header('Content-Type') == 'application/json') { res.json({donations: donations}); }

                //=> RETURN HTML
                res.render('donations-index', {donations: donations});
            })
            .catch(err => {
                console.log(err.message);
        });
    });

    // New
    app.get('/donations/new', (req, res) => {
      res.render('donations-new', {});
    });

    //show
    app.get('/donations/:id', (req, res) => {
        //find review
      Donation.findById(req.params.id).then((donation) => {
          //fetch its comments
              //=> RETURN JSON
        if (req.header('Content-Type') == 'application/json') { return res.send({ donation: donation}); }
              //respond with the template with both values
        res.render('donations-show', { donation: donation })
        // get
        }).catch((err) => {
        //catch error
        console.log(err.message);
        });
    });



    //CREATE
    app.post('/donations', (req, res) => {
        console.log("are you working?")
      Donation.create(req.body).then((donation) => {
        console.log(donation)
        res.redirect(`/donations/${donation._id}`) // Redirect
      }).catch((err) => {
        console.log(err.message);
    });
});

    // EDIT
    app.get('/donations/:id/edit', (req, res) => {
      Donation.findById(req.params.id, function(err, donation) {
        res.render('donations-edit', {donation: donation});
    });
  });

    // Update
    app.put('/donations/:id', (req, res) => {
      Donation.findByIdAndUpdate(req.params.id, req.body)
        .then(donation => {
          res.redirect(`/donations/${donation._id}`)
        })
        .catch(err => {
          console.log(err.message)
      });
  });
    // DELETE
    app.delete('/donations/:id', function (req, res) {
      console.log("DELETE donation")
      Donation.findByIdAndRemove(req.params.id).then((donation) => {
        res.redirect('/');
      }).catch((err) => {
        console.log(err.message);
      })
    })
}
