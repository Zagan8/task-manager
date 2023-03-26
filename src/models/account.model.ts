import mongoose from 'mongoose';

const accountSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  { versionKey: false }
);
const AccountModel = mongoose.model('Account', accountSchema);
export default AccountModel;
