module.exports = {
  show: (req, res) => {
    res.render("index", { page: "question show page" });
  },
  new: (req, res) => {
    res.render("index", { page: "create a new question" });
  },
  create: (req, res) => {
    res.redirect("question/1");
  },
  update: (req, res) => {
    res.redirect("question/1");
  }
};
