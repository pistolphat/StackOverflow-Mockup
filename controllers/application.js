module.exports = {
  index: (req, res) => {
    res.render("index", { page: "homepage" });
  }
};



// const { Questions } = require("../models/Question");

// module.exports = {
//   index: (req, res) => {
//     Questions.find({})
//       .sort({ createdAt: -1 })
//       .limit(10)
//       .populate("author")
//       .then(questions => {
//         res.render("app/index", { questions });
//       });
//   }
// };