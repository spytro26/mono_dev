"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@repo/db/client");
console.log("ankushraj");
const ws_1 = require("ws");
const ws = new ws_1.WebSocketServer({ port: 8080 });
ws.on("connection", async (soket) => {
    soket.send("hii there you are connected to the server ");
    console.log("ws connected");
    await client_1.client.user.create({
        data: {
            name: "ws meain hai ye ",
            username: Math.random().toString(),
            password: Math.random().toString()
        }
    });
    soket.on("message", (evet) => {
        const msg = evet.toString();
        console.log(msg);
        soket.send("you msg was " + msg);
    });
});
