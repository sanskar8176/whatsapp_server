import express from 'express';


import { newConversation, getConversation } from '../controller/conversation-controller.js';
import { addUser, getUser } from '../controller/user-controller.js';
import { newMessage, getMessage }from '../controller/message-controller.js';


const route = express.Router();
// router url pr provide kara rha aur axois se api.js me vo data lekr sbhi ko provide krayega
route.post('/add', addUser);
route.get('/users', getUser);

route.post('/conversation/add', newConversation);
route.post('/conversation/get', getConversation);

route.post('/message/add', newMessage);
route.get('/message/get/:id', getMessage);


export default route;