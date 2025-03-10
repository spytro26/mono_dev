"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@repo/db/client");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get("/", async (req, res) => {
    res.send("hii tehre");
});
app.post("/signup", async (req, res) => {
    const { username, password, name, } = req.body;
    try {
        await client_1.client.user.create({
            data: {
                name,
                username,
                password,
            }
        });
    }
    catch (e) {
        res.json({ message: "errro" });
        return;
    }
    res.json({ message: "you have signed up " });
});
app.listen(3000);
