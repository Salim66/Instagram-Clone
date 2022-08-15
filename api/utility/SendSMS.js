import Vonage from '@vonage/server-sdk';

const vonage = new Vonage({
  apiKey: "3d561d85",
  apiSecret: "9ELwplIX0FeNYKjX"
})


// Create send SMS
export const SendSMS = () => {

    try {
        
        const from = "Vonage APIs"
        const to = "8801773980593"
        const text = 'Welcome to our Instagram'

        vonage.message.sendSms(from, to, text, (err, responseData) => {
            if (err) {
                console.log(err);
            } else {
                if(responseData.messages[0]['status'] === "0") {
                    console.log("Message sent successfully.");
                } else {
                    console.log(`Message failed with error: ${responseData.messages[0]['error-text']}`);
                }
            }
        })

    } catch (error) {
        console.log(error);
    }

}