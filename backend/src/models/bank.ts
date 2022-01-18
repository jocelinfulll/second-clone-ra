import mongoose, {Schema as schema} from 'mongoose';


const bankSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: true,  },
        object_id:{type: String, required:true},
        name:{type: String, required:true},
        iban_code:{type: String, required:true},
        code_swift:{type: String, required:true},
        branch_code:{type: String, required:true},
        bank_name:{type: String, required:true},
        bank_code:{type: String, required:true},
        account_type:{type: Number, required:true},
        account_owner:{type: String, required:true},
        account_number:{type: String, required:true},
        account_key:{type: String, required:true},
    },
    {timestamps: true}
)

export const Bank = mongoose.model('Bank', bankSchema); 
