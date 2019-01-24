// module.exports = {
//   show: (req, res) => {
//     res.render("index", { page: "question show page" });
//   },
//   new: (req, res) => {
//     res.render("index", { page: "create a new question" });
//   },
//   create: (req, res) => {
//     res.redirect("question/1");
//   },
//   update: (req, res) => {
//     res.redirect("question/1");
//   }
// };

// const { Question, Comment } = require("../models/Question");

// module.exports = {
//   show: (req, res) => {
//      Question.findOne({_id: req.params.id})
//       .populate("author comments.author")
//       .exec(function(err, tweet) {
//        res.render("question/show", tweet);
//      })
//   },
//   new: (req, res) => {
//     res.render("question/new");
//   },
//   create: (req, res) => {
//     Question.create({
//       content: req.body.question.content,
//       author: req.user._id
//     }).then(tweet => {
//       req.user.tweets.push(tweet);
//       req.user.save(err => {
//         res.redirect(`/tweet/${tweet._id}`);
//       });
//     });
//   },
//   update: (req, res) => {
//     let { content } = req.body;
//     Tweet.findOne({ _id: req.params.id }).then(tweet => {
//       tweet.comments.push({
//         content,
//         author: req.user._id
//       });
//       tweet.save(err => {
//         res.redirect(`/tweet/${tweet._id}`);
//       });
//     });
//   },
  // requireAuth: function(req, res, next) {
  //   if (req.isAuthenticated()) {
  //     next();
  //   } else {
  //     res.redirect("/");
  //   }
  // }
// };