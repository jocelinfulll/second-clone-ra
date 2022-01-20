import mongoose, {Schema as schema} from 'mongoose';


const contactSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: false,  },
        object_id:{type:String, required:false},
        is_associate:{type:Number, required:false},
        last_name:{type:String, required:false},
        first_name:{type:String, required:false},
        title:{type:String, required:false},
        email:{type:String, required:false},
        telephone:{type:String, required:false},
        fax:{type:String, required:false},
        mobile:{type:String, required:false},
        job_title:{type:String, required:false},
        main_contact:{type:Number, required:false},
        birth_date:{type:String, required:false},
        street:{type:String, required:false},
        building:{type:String, required:false},
        post_code:{type:String, required:false},
        town:{type:String, required:false},
        country:{type:String, required:false},
        birth_departement:{type:Number, required:false},
        birth_town:{type:String, required:false},
        num_indice:{type:Number, required:false},
        sci_associate:{type:Number, required:false}
    },
    {timestamps: true}
)

export const Contact = mongoose.model('Contact', contactSchema); 
