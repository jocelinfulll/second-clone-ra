import mongoose, {Schema as schema} from 'mongoose';


const bankSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: false,  },
        object_id:{type: String, required:false},
        name:{type: String, required:false},
        iban_code:{type: String, required:false},
        code_swift:{type: String, required:false},
        branch_code:{type: String, required:false},
        bank_name:{type: String, required:false},
        bank_code:{type: String, required:false},
        account_type:{type: Number, required:false},
        account_owner:{type: String, required:false},
        account_number:{type: String, required:false},
        account_key:{type: String, required:false},
    },
    {timestamps: true}
)

export const Bank = mongoose.model('Bank', bankSchema); 
