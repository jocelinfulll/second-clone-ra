import mongoose, {Schema as schema} from 'mongoose';

const financialYearSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: true,  },
        object_id:{type:String,required:true},
        state:{type:Number,required:true},
        name:{type:String,required:true},
        start_date:{type:String,required:true},
        end_date:{type:String,required:true}
    },
    {timestamps: true}
)

export const Financial_Year = mongoose.model('Financial_Year', financialYearSchema); 
