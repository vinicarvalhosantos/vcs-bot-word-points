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

        await axios.put(`${apiUrlBase}/${channelId}/${username}/${points}`).then(response => {
            if (response.status === 200) {
                redemptions.push(username);
            }
        }).catch(error => {
            console.error(error)
        })
    }

}

module.exports = { checkIfUserAlreadyRedeemed, giveUserRedemptionPoints }