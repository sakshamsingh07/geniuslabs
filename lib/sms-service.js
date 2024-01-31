const axios = require("axios");

const TRUSTSIGNAL_URL = "https://api.trustsignal.io/v1/sms?api_key=bc94b639-306b-4bed-9e18-6e560286f14d";
const TRUSTSIGNAL_TEMPLATE_ID = "1707170420320459419";
const TRUSTSIGNAL_SENDER_ID = "GENLBS";


module.exports = {
    sendSMS: async (mobileNumber, otp, name) => {
        
        const config = {
          method: "post",
          url: TRUSTSIGNAL_URL,
          headers: {
            "Content-Type": "application/json",
          },
          data: JSON.stringify({
            sender_id: TRUSTSIGNAL_SENDER_ID,
            to: [mobileNumber],
            route: "otp",
            message: `Dear ${name ? name : 'User'} ,\nUse ${otp} to verify your number and enrol in the VIP Membership.\nGeniusLabs`,
            template_id: TRUSTSIGNAL_TEMPLATE_ID
          }),
        };

        try {
            const res = await axios(config);
            return res.data;
        }catch(e) {
            console.log(e.response.data);
            return null;
        }
    }
}