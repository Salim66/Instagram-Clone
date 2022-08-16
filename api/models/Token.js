import mongoose from "mongoose";


// Create token schema
const tokenSchema = mongoose.Schema({

    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    token: {
        type: String,
        required: true
    }

}, {
    timestamps: true
});



// export token schema
export default mongoose.model('Token', tokenSchema);