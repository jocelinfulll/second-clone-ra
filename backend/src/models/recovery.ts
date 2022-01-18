import mongoose, {Schema as schema} from 'mongoose';

const recoverySchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: true },
        status:{ type: String, required: true},
    },
    {timestamps: true}
)

export const Recovery = mongoose.model('Recovery', recoverySchema); 
