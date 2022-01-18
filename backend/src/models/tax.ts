import mongoose, {Schema as schema} from 'mongoose';

const taxSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: true },
        object_id:{ type: String, required: true},
        vat_deductible:{ type: String, required: true},
        rate:{ type: Number, required: true},
        code:{type: String, required: true}
    },
    {timestamps: true}
)

export const Tax = mongoose.model('Tax', taxSchema); 
