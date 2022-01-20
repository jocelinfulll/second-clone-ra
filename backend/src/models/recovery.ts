import mongoose, {Schema as schema} from 'mongoose';

const recoverySchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: false },
        status:{ type: String, required: false},
    },
    {timestamps: true}
)

export const Recovery = mongoose.model('Recovery', recoverySchema); 
