import mongoose, {Schema as schema} from 'mongoose';

const genericInfoSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: false },
        company_code:{ type: String, required: false},
        company_id:{ type: String, required: false},
        company_name:{ type: String, required: false},
        domain_key:{ type: String, required: false},
        inex_code:{ type: String, required: false},
        practice_id:{ type: String, required: false},
        platform_accounting:{ type: Number, required: false},
        platform_immo:{ type: Number, required: false},
        platform_accounting_type:{ type: Number, required: false},
        platform_pay:{ type: Number, required: false},
        rrh_id:{ type: String, required: false},
        session_id:{ type: String, required: false},
        site_id:{ type: String, required: false},
        transaction_id:{ type: String, required: false},
        user_id:{ type: String, required: false}
    },
    {timestamps: true}
)

export const Generic_Info = mongoose.model('Generic_Info', genericInfoSchema); 
