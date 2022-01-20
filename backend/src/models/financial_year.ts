import mongoose, {Schema as schema} from 'mongoose';

const financialYearSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: false,  },
        object_id:{type:String,required:false},
        state:{type:Number,required:false},
        name:{type:String,required:false},
        start_date:{type:String,required:false},
        end_date:{type:String,required:false}
    },
    {timestamps: true}
)

export const Financial_Year = mongoose.model('Financial_Year', financialYearSchema); 
