import bcrypt from 'bcryptjs';

const users = [
   {
    first_name: 'kiko',
    last_name: 'tiko',
    user_name: 'Admin User',
    email: 'admin@email.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'admin'
   },
   {
    first_name: 'siko',
    last_name: 'liko',
    user_name: 'Ali00',
    email: 'ali@email.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'manager'
   },
   {
    first_name: 'miko',
    last_name: 'piko',
    user_name: 'Adams',
    email: 'adam@email.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'manager'
   },
   {
    first_name: 'kimo',
    last_name: 'tipo',
    user_name: 'karim',
    email: 'karim@email.com',
    password: bcrypt.hashSync('123456', 10),
    role: 'admin'
   }
];

export default users;