import mongoose, {Schema as schema} from 'mongoose';

const userCredentialsSchema = new schema(
    { 
        email:{type:String, required:true},
        password_hash:{type:String, required:true}
    },
    {timestamps: true}
)

export const User_Credentials = mongoose.model('User_Credentials', userCredentialsSchema); 
