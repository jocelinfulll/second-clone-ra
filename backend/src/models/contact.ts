import mongoose, {Schema as schema} from 'mongoose';


const contactSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: true,  },
        object_id:{type:String, required:true},
        is_associate:{type:Number, required:true},
        last_name:{type:String, required:true},
        first_name:{type:String, required:true},
        title:{type:String, required:true},
        email:{type:String, required:true},
        telephone:{type:String, required:true},
        fax:{type:String, required:true},
        mobile:{type:String, required:true},
        job_title:{type:String, required:true},
        main_contact:{type:Number, required:true},
        birth_date:{type:String, required:true},
        street:{type:String, required:true},
        building:{type:String, required:true},
        post_code:{type:String, required:true},
        town:{type:String, required:true},
        country:{type:String, required:true},
        birth_departement:{type:Number, required:true},
        birth_town:{type:String, required:true},
        num_indice:{type:Number, required:true},
        sci_associate:{type:Number, required:true}
    },
    {timestamps: true}
)

export const Contact = mongoose.model('Contact', contactSchema); 
