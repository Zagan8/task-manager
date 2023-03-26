import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema(
  {
    accountId: String,
    name: String,
    description: String,
  },
  { versionKey: false }
);
const TaskModel = mongoose.model('Task', taskSchema);
export default TaskModel;
