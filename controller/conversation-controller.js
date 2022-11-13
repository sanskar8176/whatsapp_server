import Conversation  from "../modal/Conversation.js";

//    request me sender and reciever ki info hogi 
export const newConversation = async (request, response) => {
    let senderId = request.body.senderId;
    let receiverId = request.body.receiverId;

    const exist = await Conversation.findOne({ members: { $all: [receiverId, senderId]  }})
        // $all mtlab dono(reciever and sender) match hone chahiye
    if(exist) {
        response.status(200).json('conversation already exists');
        return;
    }
        // sender recievr both imp to conversation, esliye schema banyege 

    const newConversation = new Conversation({
        members: [senderId, receiverId]
    });

    try {
        const savedConversation = await newConversation.save();
        response.status(200).json(savedConversation);
    } catch (error) {
        response.status(500).json(error);
    }

}

export const getConversation = async (request, response) => {
    try {
        const conversation = await Conversation.findOne({ members: { $all: [ request.body.sender, request.body.receiver] }});
        response.status(200).json(conversation);
    } catch (error) {
        response.status(500).json(error);
    }

}