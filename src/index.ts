import { User } from './models/User';

const user = User.buildUser({ id: 1, name: 'Builtman', age: 99 });

user.on('save', () => {
  console.log(user);
});

user.save();