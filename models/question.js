const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Comment = new Schema ({
    content: String,
    createdAt: {type: Date, default: Date.now() 
    }, 
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
    
})

const Question = new Schema ({
    content: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    comments: [Comment]

})

module.exports = {
    Question: mongoose.model('Question', Question),
    Comment: mongoose.model('Comment', Comment)
}



// const mongoose = require('../db/connection')
// const Schema = mongoose.Schema

// const Answers = new Schema ({
//     content: String,
//     createdAt: {
//         type: Date,
//         default: Date.now()
//     },
//     userName: {
//         type: Schema.Types.ObjectId,
//     }
// })