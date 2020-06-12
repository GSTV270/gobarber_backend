interface IMailDriver {
  driver: 'ethereal' | 'ses';

  defaults: {
    from: {
      name: string;
      email: string;
    };
  };
}

export default {
  driver: process.env.MAIL_DRIVER || 'ethereal',

  defaults: {
    from: {
      name: 'Gustavo da GoBarber',
      email: 'gstv270@gmail.com',
    },
  },
} as IMailDriver;
