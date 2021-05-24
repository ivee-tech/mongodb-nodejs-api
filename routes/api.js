router.route("/api").get(function(req, res) {
    employees.find({}, function(err, result) {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });