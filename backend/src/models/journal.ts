import mongoose, {Schema as schema} from 'mongoose';

const journalSchema = new schema(
    { 
        file_id:{ type: schema.Types.ObjectId, ref: 'File', required: true },
        show_entry_reconciliation:{ type: Number, required: true},
        show_entry_analysis:{ type: Number, required: true},
        ref:{ type: String, required: true},
        present_in_ged:{ type: Number, required: true},
        external_ged_folder:{ type: String, required: true},
        description:{ type: String, required: true},
        cumulated:{ type: Number, required: true},
        auto_save_entry:{ type: Number, required: true},
        object_id:{ type: String, required: true},
        type:{ type: Number, required: true},
    },
    {timestamps: true}
)

export const Journal = mongoose.model('Journal', journalSchema); 
