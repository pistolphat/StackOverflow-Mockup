module.exports = {
  // show: (req, res) => {
  //   res.render("index", { page: "user show page" });
  // },
  new: (req, res) => {
    res.render("user/new");
  },
  login: (req, res) => {
    res.render("user/login");
  }
  // create: (req, res) => {
  //   user.create({
  //     email: req.body.email,
  //     password: req.body.password
  //   }).then(user => {
  //     res.redirect(`/user/${user._id}`);
  //   });
  // }
  // destroy: (req, res) => {
  //   res.render('', { })
  // },
  // update: (req, res) => {
  //   res.render('', { })

};
