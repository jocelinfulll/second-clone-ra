import mongoose, {Schema as schema} from 'mongoose';

const userCredentialsSchema = new schema(
    { 
        email:{type:String, required:false},
        password_hash:{type:String, required:false}
    },
    {timestamps: true}
)

export const User_Credentials = mongoose.model('User_Credentials', userCredentialsSchema); 
