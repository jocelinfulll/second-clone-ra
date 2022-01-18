import mongoose, {Schema as schema} from 'mongoose';

const fileSchema = new schema(
    { 
        path:{type:String,required:true},
        name:{type:String,required:true},
        type:{type:String,required:true}
    },
    {timestamps: true}
)

export const File = mongoose.model('File', fileSchema); 
