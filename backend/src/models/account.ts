import mongoose, {Schema as schema} from 'mongoose';


const accountSchema = new schema(
    { 
        object_id:{ type: String, required: false },
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: false,  },
        name:{ type: String },
        number:{ type: String },
        short_name:{ type: String },
        type:{ type: Number },
        category:{ type: Number },
        nature_auxi:{ type: Number },
        sens:{ type: Number },
        depreciable:{ type: Number },
        method:{ type: Number },
        length:{ type: Number },
        vat_intra_com:{ type: Number },
        input_entry_cut_off:{ type: Number },
    },
    {timestamps: true}
)

export const Account = mongoose.model('Account', accountSchema); 
