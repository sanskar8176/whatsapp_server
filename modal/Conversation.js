import mongoose from 'mongoose';

const ConversationSchema = new mongoose.Schema({
    members: {
        type: Array
    },
    // members me sender receiver ka array hoga

    message: {
        type: String
    }},
    {
        timestamps: true
    }
    // timestamps me time ki value jb update hua ho msg
);

const conversation = mongoose.model('Conversation', ConversationSchema);

export default conversation;