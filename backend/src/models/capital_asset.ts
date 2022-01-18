import mongoose, {Schema as schema} from 'mongoose';


const capitalAssetSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: true,  },
        quantity:{type:Number, required:true},
        main_component:{type:Number, required:true},
        decomposed:{type:Number, required:true},
        reprise_amount:{type:Number, required:true},
        reprise_date:{type:String, required:true},
        reprise:{type:Number, required:true},
        dep_rate:{type:Number, required:true},
        dep_length:{type:Number, required:true},
        dep_method:{type:Number, required:true},
        dep_base:{type:Number, required:true},
        depreciable:{type:Number, required:true},
        depreciation:{type:Number, required:true},
        tax_base:{type:Number, required:true},
        tp_base:{type:Number, required:true},
        tp_taxable:{type:Number, required:true},
        residual_value:{type:Number, required:true},
        activation:{type:String, required:true},
        acquisition:{type:String, required:true},
        initial_vat_value:{type:Number, required:true},
        initial_value:{type:Number, required:true},
        further_info:{type:String, required:true},
        description:{type:String, required:true},
        number:{type:Number, required:true},
        account:{type:String, required:true},
        composite:{type:Number, required:true},
        endowment:{type:String, required:true},
        presence:{type:Number, required:true},
        start_date:{type:String, required:true},
        object_id:{type:String, required:true}
    },
    {timestamps: true}
)

export const Capital_Asset = mongoose.model('Capital_Asset', capitalAssetSchema); 
