const handlePost = (req, res) => {
    res.send('This handles the POST method')
}

const handleGet = (req, res) => {
    res.send('This handles the GET method');
}

const handleMyName = (req, res) => {
    const { name, age } = req.params;
    res.send(`Welcome to my page, ${name}. You are ${age}`);
}

module.exports = {
    handlePost, handleGet, handleMyName
}