
import axios from 'axios';


// Create send SMS
export const SendSMS = async (number, message) => {

    try {
        
        await axios.get(`https://bulksmsbd.net/api/smsapi?api_key=zYdmoVJeZ0JPGyAsHk4z&type=text&number=${ number }&senderid=03590002777&message=${ message }`);

    } catch (error) {
        console.log(error);
    }

}