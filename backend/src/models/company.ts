import mongoose, {Schema as schema} from 'mongoose';


const companySchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: true,  },
        usage_name:{type:String, required:false},
        siren:{type:String, required:false},
        website:{type:String, required:false},
        person_type:{type:String, required:false},
        business_type:{type:String, required:false},
        mono_branch:{type:String, required:false}
    },
    {timestamps: true}
)

export const Company = mongoose.model('Company', companySchema); 
