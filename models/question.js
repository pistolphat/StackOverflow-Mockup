const Schema = mongoose.Schema

const Question = new Schema ({
    title: String,
    userName: String,
    createdAt: {type: Date, default: Date.now}
})