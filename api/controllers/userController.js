
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import createError from './errorController.js';
import jwt from 'jsonwebtoken';
import { SendEmail } from '../utility/SendEmail.js';
import { SendSMS } from '../utility/SendSMS.js';
import { createToken } from '../utility/CreateToken.js';
import Token from '../models/Token.js';


/**
 * @access public
 * @route api/user 
 * @method GET
 */
export const getAllUser = async (req, res, next) => {
    
    try {
        
        const users = await User.find();
        res.status(200).json(users);

    } catch (error) {
        next(error);
    }

} 

/**
 * @access public
 * @route api/user 
 * @method POST
0 */
export const createUser = async (req, res, next) => {

    // make hash password
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);

    try {
        
        const user = await User.create({ ...req.body, password: hash_pass });
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }

} 

/**
 * @access public 
 * @route api/user/id 
 * @method GET
 */
export const getSingleUser = async (req, res, next) => {

    try {
        
        let { id } = req.params;

        const user = await User.findById(id);

        if(!user){
            return next(createError(404, 'Single User Not Found!'));
        }

        if(user){
            res.status(200).json(user);
        }


    } catch (error) {
        next(error);
    }

}

/**
 * @access public 
 * @route api/user/id
 * @method PUT
 */
export const updateUser = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const user = await User.findByIdAndUpdate(id, req.body, { new: true });
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }

}

/**
 * @access public 
 * @route api/user/id 
 * @method DELETE 
 */
export const deleteUser = async (req, res, next) => {
    
    try {
        
        let { id } = req.params;

        const user = await User.findByIdAndDelete(id);
        res.status(200).json(user);

    } catch (error) {
        next(error);
    }


}


// Login User

/**
 * @access public
 * @route api/user/login 
 * @method POST
0 */
export const userLogin = async (req, res, next) => {

    try {


        // check user is has or not by email
        const login_user = await User.findOne({ email: req.body.email });


        // User is not found by email
        if(!login_user){
            return next(createError(404, 'User not found!'));
        }

        // Check user password match or not
        const check_pass = await bcrypt.compare(req.body.password, login_user.password);


        // If Password Not Match
        if(!check_pass){
            return next(createError(404, 'Wrong Password'));
        }

        // Create a token
        const token = jwt.sign({ id: login_user._id, isAdmin: login_user.isAdmin }, process.env.JWT_SECRET);


        // login user info
        const { password, isAdmin, ...login_info } = login_user._doc;

        res.cookie("access_token", token).status(200).json({
            token: token,
            user: login_info
        });

        
    } catch (error) {
        next(error);
    }

} 


/**
 * @access public
 * @route api/user/register
 * @method POST
0 */
export const userRegister = async (req, res, next) => {

    // make hash password
    const salt = await bcrypt.genSalt(10);
    const hash_pass = await bcrypt.hash(req.body.password, salt);

    try {

        // Create new user
        const user = await User.create({ ...req.body, password: hash_pass });

        // Create Token
        const token = createToken({ id: user._id }); 
        
        // Update Token
        await Token.create({ userId: user._id, token:token });

        // Send Activation Link
        const verify_link = `http://localhost:3000/user/${user._id}/verify/${token}`;
        // Send Mail
        await SendEmail(user.email, 'Instagram, Verification Link', verify_link);

        // // Create Random Number 6 Digits
        // let token_code = Math.floor(Math.random()*900000) + 100000;

        // // // Update Token
        // await Token.create({ userId: user._id, token:token_code });

        // // Send SMS
        // await SendSMS('01773980593', `Your Activation Code: ${token_code}`);

        res.status(200).json(user);

        

    } catch (error) {
        next(error);
    }
    
} 


/**
 * @access public
 * @routes /api/user/me
 * @method GET 
 */
export const getLoggedInUser = async (req, res, next) => {
    
    try {
        
        // get token
        let bearer_token = req.headers.authorization;

        // If token is not exists
        if(!bearer_token){
            next(createError(404, 'Token not found!'));
        }

        let token = '';
        if(bearer_token){
            token = bearer_token.split(' ')[1];

            // get token user
            const logged_in_user = jwt.verify(token, process.env.JWT_SECRET);

            // user check
            if( !logged_in_user ){
                next(createError(400, 'Invalid Token'));
            }

            // user check
            if( logged_in_user ){
                const user = await User.findById(logged_in_user.id);
                res.status(200).json(user);
            }

        }

    } catch (error) {
        next(error);
    }

}

/**
 * @access public
 * @routes /api/user/verify
 * @method GET 
 */
export const userAccountVerify = async (req, res, next) => {

    try {
        
        const { id, token } = req.body;
        // const { userId, code } = req.body;

        // check token 
        const verify = await Token.findOne({ userId: id, token: token });
        // const verify = await Token.findOne({ id: userId, token: code });


        // check verify
        if( !verify ){
            next(createError(404, 'Invalid verify url'))
        }

        if( verify ){
            await User.findByIdAndUpdate(id, {
                isVerified: true
            })
            res.status(200).json({ message: "User Account Verified Successfully" });
            verify.remove();
        }

    } catch (error) {
        next(error);
    }

}


/**
 * @access public
 * @routes /api/user/recovery-password
 * @method POST
 */
export const userRecoveryPassword = async (req, res, next) => {

    try {
        
        // spread body data
        const { email } = req.body;

        // get recovery user
        const recovery_user = await User.findOne({ email });

        // check user exists
        if( !recovery_user ){
            res.status(404).json({
                "message" : "Email doesn't exits!"
            });
        }

        if( recovery_user ){
            const token = createToken({ id: recovery_user._id }, '1m');
            const recovery_url = `http://localhost:3000/recovery-password/${token}`;

            SendEmail( recovery_user.email, 'Password Reset', recovery_url );

            res.status(200).json({
                "message": "Password recovery link send."
            });

        }


    } catch (error) {
        next(error);
    }

}

/**
 * @access private
 * @routes /api/user/reset-password
 * @method POST 
 */
export const resetPassword = async (req, res, next) => {

    try {
        // get form token
        const { token, password } = req.body;

        // make hash password
        const salt = await bcrypt.genSalt(10);
        const hash_pass = await bcrypt.hash(req.body.password, salt);

        // get id from token
        let { id } = jwt.verify(token, process.env.JWT_SECRET);
        
        // check user id has 
        if( id ){

           const user_details = await User.findByIdAndUpdate(id, {
                password: hash_pass
           })

            res.send("Password Changed Successfully!");

        }else {
            next(createError(401, 'Token Not Match'));
        }

    } catch (error) {
        next(error);
    }

}
