import { User } from './models/User';

// const user = new User({ id: 1 });

// user.set({ name: 'Michael Jackson', age: 0 });

// user.save();

const user = new User({ name: 'Billy Jean', age: 16 });
user.save();