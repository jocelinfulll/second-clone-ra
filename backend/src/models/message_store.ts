import mongoose, {Schema as schema} from 'mongoose';


const messageStoreSchema = new schema(
    {   
        id : { type: String, required: true },
        stream_name: { type: String, required: true },
        meta_data:{type: Object, required:true},
        type:{type:String, required:true},
        data:{type:Object, required:true},
    },
    {timestamps:true}
)

export const Message_store = mongoose.model('Message_Store', messageStoreSchema); 
