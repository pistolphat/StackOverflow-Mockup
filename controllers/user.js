module.exports = {
  show: (req, res) => {
    res.render("index", { page: "user show page" });
  },
  new: (req, res) => {
    res.render("index", { page: "user new page" });
  },
  create: (req, res) => {
    res.redirect(`/user/1`);
  }
};
