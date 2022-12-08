
const jwt = require('jsonwebtoken');

const { addUser, getUsers, getOneUser, deleteUser, editUser, checkCredentialsAndReturnUser } = require('../user-data');

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

const handleGetToken = (req,res) => {
    const { email, password} = req.body;
    if (!email || !password){
        return res.status(400).send({message: 'Email/password required'});
    }
    const user = checkCredentialsAndReturnUser(email, password);

    if(!user){
        return res.status(400).send({message: 'Email/password is wrong'});
    }
    delete user.password;
    const token = jwt.sign( user, 'secret', { expiresIn : '10m'});

    res.send({token});
}

const handleWelcome = (req,res) => {
    res.send({message: `Welcome, ${req.user.name}`});
}


module.exports = { 
    handleApplyForWar, handleViewGoodies, handleGetToken, handleWelcome,
    userController: new UserController()
}