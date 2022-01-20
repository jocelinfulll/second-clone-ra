import mongoose, {Schema as schema} from 'mongoose';


const appErrorSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: false,  },
        name:{type: String, required:false},
        domain:{type: String, required:false},
        message:{type: String, required:false},
        field:{type: String, required:false},
    },
    {timestamps: true}
)

export const App_Error = mongoose.model('App_Error', appErrorSchema); 
