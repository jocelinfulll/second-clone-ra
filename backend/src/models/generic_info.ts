import mongoose, {Schema as schema} from 'mongoose';

const genericInfoSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: true },
        company_code:{ type: String, required: true},
        company_id:{ type: String, required: true},
        company_name:{ type: String, required: true},
        domain_key:{ type: String, required: true},
        inex_code:{ type: String, required: true},
        practice_id:{ type: String, required: true},
        platform_accounting:{ type: Number, required: true},
        platform_immo:{ type: Number, required: true},
        platform_accounting_type:{ type: Number, required: true},
        platform_pay:{ type: Number, required: true},
        rrh_id:{ type: String, required: true},
        session_id:{ type: String, required: true},
        site_id:{ type: String, required: true},
        transaction_id:{ type: String, required: true},
        user_id:{ type: String, required: true}
    },
    {timestamps: true}
)

export const Generic_Info = mongoose.model('Generic_Info', genericInfoSchema); 
