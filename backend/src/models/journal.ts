import mongoose, {Schema as schema} from 'mongoose';

const journalSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: false },
        show_entry_reconciliation:{ type: Number, required: false},
        show_entry_analysis:{ type: Number, required: false},
        ref:{ type: String, required: false},
        present_in_ged:{ type: Number, required: false},
        external_ged_folder:{ type: String, required: false},
        description:{ type: String, required: false},
        cumulated:{ type: Number, required: false},
        auto_save_entry:{ type: Number, required: false},
        object_id:{ type: String, required: false},
        type:{ type: Number, required: false},
    },
    {timestamps: true}
)

export const Journal = mongoose.model('Journal', journalSchema); 
