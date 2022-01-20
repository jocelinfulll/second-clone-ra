import mongoose, {Schema as schema} from 'mongoose';


const capitalAssetSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: false,  },
        quantity:{type:Number, required:false},
        main_component:{type:Number, required:false},
        decomposed:{type:Number, required:false},
        reprise_amount:{type:Number, required:false},
        reprise_date:{type:String, required:false},
        reprise:{type:Number, required:false},
        dep_rate:{type:Number, required:false},
        dep_length:{type:Number, required:false},
        dep_method:{type:Number, required:false},
        dep_base:{type:Number, required:false},
        depreciable:{type:Number, required:false},
        depreciation:{type:Number, required:false},
        tax_base:{type:Number, required:false},
        tp_base:{type:Number, required:false},
        tp_taxable:{type:Number, required:false},
        residual_value:{type:Number, required:false},
        activation:{type:String, required:false},
        acquisition:{type:String, required:false},
        initial_vat_value:{type:Number, required:false},
        initial_value:{type:Number, required:false},
        further_info:{type:String, required:false},
        description:{type:String, required:false},
        number:{type:Number, required:false},
        account:{type:String, required:false},
        composite:{type:Number, required:false},
        endowment:{type:String, required:false},
        presence:{type:Number, required:false},
        start_date:{type:String, required:false},
        object_id:{type:String, required:false}
    },
    {timestamps: true}
)

export const Capital_Asset = mongoose.model('Capital_Asset', capitalAssetSchema); 
