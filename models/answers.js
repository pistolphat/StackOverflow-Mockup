const Schema = mongoose.Schema

const Answers = new Schema ({
    content: String,
    createdAt: {
        type: Date,
        default: Date.now()
    },
    userName: {
        type: Schema.Types.ObjectId,
    }
})