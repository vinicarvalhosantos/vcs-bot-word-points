require('dotenv/config');
const axios = require("axios").default;

const redemptions = []

function checkIfUserAlreadyRedeemed(username) {
    if (redemptions.includes(username)) {
        return true;
    }

    return false;
}

async function giveUserRedemptionPoints(username, points) {

    if (!checkIfUserAlreadyRedeemed(username)) {

        const apiUrlBase = process.env.STREAM_ELEMENTS_API_BASE
        const channelId = process.env.CHANNEL_ID

        console.info(`Adding ${points} points to ${username}!`);
        await axios.put(`${apiUrlBase}/${channelId}/${username}/${points}`).then(response => {

            if (response.status === 200) {
                
                redemptions.push(username);
                console.info(`Added ${points} points to ${username}!`);
            }
        }).catch(() => {
            console.error(`An error ocurred when tried to add ${points} points to ${username}!`);
        })
    }

}

module.exports = { checkIfUserAlreadyRedeemed, giveUserRedemptionPoints }