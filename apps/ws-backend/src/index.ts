import {client} from '@repo/db/client';
console.log("ankushraj"); 
import { WebSocketServer } from 'ws';

const ws = new WebSocketServer({port : 8080})   ;

ws.on("connection" ,  async (soket )=>{
    soket.send("hii there you are connected to the server ");
    console.log("ws connected");
     await   client.user.create({
        data : {
            name : "ws meain hai ye ",
            username : Math.random().toString(),      
            password : Math.random().toString()
        }
    })
   soket.on("message" , (evet)=>{
    const msg = evet.toString();
    console.log(msg);
      soket.send("you msg was " + msg);
    

   });


})
