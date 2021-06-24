import bcrypt from 'bcryptjs'

const users = [
    {
        name: 'Admin User',
        email: 'admin@example.com',
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name: 'Riya Jain',
        email: 'riya@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
    {
        name: 'Ridhi dogra',
        email: 'ridhi@example.com',
        password: bcrypt.hashSync('123456', 10),
    },
]

export default users