import AccountModel from '../models/account.model';

const accountService = {
  findOneById: async (id: string) => {
    const account = await AccountModel.findOne({ _id: id });
    return account;
  },
};

export default accountService;
