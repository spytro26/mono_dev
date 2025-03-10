import {client} from '@repo/db/client';
import express from "express";
import cors from 'cors'

const app = express ();
app.use(express.json());


app.get("/" ,  async (req, res)=>{
    res.send("hii tehre");

})

app.post("/signup" , async (req, res) =>{
    const {username , password , name ,  } = req.body; 
    try {
     await    client.user.create({
            data : {
                name , 
                username , 
                password ,  
            }
        })
    }catch (e){
        res.json({message : "errro"})
        return ; 
    }

    res.json({message : "you have signed up "}); 
   
}); 

app.listen(3000);

