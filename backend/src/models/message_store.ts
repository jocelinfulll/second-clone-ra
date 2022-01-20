import mongoose, {Schema as schema} from 'mongoose';


const messageStoreSchema = new schema(
    {   
        id : { type: String, required: false },
        stream_name: { type: String, required: false },
        meta_data:{type: Object, required:false},
        type:{type:String, required:false},
        data:{type:Object, required:false},
    },
    {timestamps:true}
)

export const Message_store = mongoose.model('Message_Store', messageStoreSchema); 
