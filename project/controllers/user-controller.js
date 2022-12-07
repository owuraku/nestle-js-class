const { addUser, getUsers, getOneUser, deleteUser, editUser } = require('../user-data');

class UserController {
    
    getAllUsers = (req, res) => {
    const allUsers = getUsers();
    res.send(allUsers);
    }

     getAllUsers = (req, res) => {
    const allUsers = getUsers();
    res.send(allUsers);
    }

    addUserHandler = (req, res) => {
    const user = {
        name: req.body.name,
        age: +req.body.age
    };

    const addedUser = addUser(user);
    res.status(201).send(addedUser);
}

deleteUserHandler = (req, res) => {
    const deleted = deleteUser(req.params.id);
    if(!deleted){
        res.status(400).send('Unable to delete ')
    } 
    res.status(200).send('Deleted successfully')
}

editUserHandler = (req,res) => {
     const user = {
        name: req.body.name,
        age: +req.body.age
    };

    const edited = editUser(req.params.id, user);
    res.send(edited)
}

getOneUserHandler = (req,res) => {
    const user = getOneUser(req.params.id);
    res.send(user);
}

}

const handleApplyForWar = (req, res) => {
    res.send('You are ready to fight');
}

const handleViewGoodies = (req, res) => {
    res.send('You are ready to view the good things in life');
}


module.exports = { 
    handleApplyForWar, handleViewGoodies,
    userController: new UserController()
}