require('dotenv/config');

const { checkIfUserAlreadyRedeemed, giveUserRedemptionPoints } = require("./functions")

function messageReceived(target, context, message, ehBot) {
    if (ehBot) {
        return;
    }

    const secretMessage = process.env.SECRET_MESSAGE;
    const receivedMessage = message.trim();
    const username = context.username;
    const pointsToAdd = process.env.POINTS_TO_ADD;

    if (!checkIfUserAlreadyRedeemed(username)) {
        if (receivedMessage === secretMessage) {
            giveUserRedemptionPoints(username, pointsToAdd);
        }
    }
}

module.exports = messageReceived;