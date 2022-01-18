import mongoose, {Schema as schema} from 'mongoose';


const appErrorSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: true,  },
        name:{type: String, required:true},
        domain:{type: String, required:true},
        message:{type: String, required:true},
        field:{type: String, required:true},
    },
    {timestamps: true}
)

export const App_Error = mongoose.model('App_Error', appErrorSchema); 
