import mongoose, {Schema as schema} from 'mongoose';

const taxSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: false },
        object_id:{ type: String, required: false},
        vat_deductible:{ type: String, required: false},
        rate:{ type: Number, required: false},
        code:{type: String, required: false}
    },
    {timestamps: true}
)

export const Tax = mongoose.model('Tax', taxSchema); 
