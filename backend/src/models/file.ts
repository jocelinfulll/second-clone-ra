import mongoose, {Schema as schema} from 'mongoose';

const fileSchema = new schema(
    { 
        path:{type:String,required:false},
        name:{type:String,required:false},
        type:{type:String,required:false}
    },
    {timestamps: true}
)

export const File = mongoose.model('File', fileSchema); 
