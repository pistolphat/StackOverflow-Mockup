const Schema = mongoose.Schema

const User = new Schema ({
    userName: String,
    questionsPosted: Number,
    location: String,
})