let users = [
    {
        id: 1,
        name: 'Owuraku',
        age: 20
    },
     {
        id: 2,
        name: 'Seth',
        age: 22
    },
];

const getUsers = () => users;

const addUser = (user) => {
    const newUser = { id: users.length + 1 ,...user}
    // const newUsers = [...users, newUser ];
    // users = newUsers;
    users.push(newUser);
    return newUser;
}

const getOneUser = id => {
    return users.find(u => u.id == id)
}

//  edit user

const editUser = (id, user) => {
    const index = users.findIndex(u => u.id == id);
    if (index > -1){
        const newUser = {...users[index], ...user };
        const newUsers = [...users];
        newUsers.splice(index, 1, newUser);
        users = newUsers;
        return newUser;
    }

}

// delete user

const deleteUser = id => {
    const index = users.findIndex(u => u.id == id);
    if (index > -1){
        const newUsers = [...users];
        newUsers.splice(index, 1);
        users = newUsers;
        return true;
    }
    return false;
}

module.exports = {
    getOneUser, getUsers, addUser, editUser, deleteUser
}