import { Message_store } from "../models";
// objectId mongodb
export const savePivotFile = async ({ message_id }) => {
  const {
    meta_data,
    data: { file_id, ...rest },
  } = await Message_store.findById(message_id);
  const streamName = `pivotFile-${file_id}`;
  const args = { id: file_id, ...rest }
  console.log("rest", rest)
  const id = new id

    await Message_store.create({
        id: uuidv4(),
        stream_name: streamName,
        type:"pivot_file_saved",
        meta_data: {
            user_id: meta_data.user_id,
            file_id: meta_data.file_id
        },
        
    })
};
