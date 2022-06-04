require('dotenv/config');
require('./configuration');

const tmi = require("tmi.js");
const onMessage = require("./src/onMessage")

const BOT_NAME = process.env.BOT_NAME;
const CHANNEL_NAME = process.env.CHANNEL_NAME;

const configuration = {
    identity: {
        username: BOT_NAME,
        password: process.env.TWITCH_TOKEN
    },
    channels: [CHANNEL_NAME]
};

const client = tmi.client(configuration);

client.on("message", onMessage);

//client.on("connected")

client.connect();