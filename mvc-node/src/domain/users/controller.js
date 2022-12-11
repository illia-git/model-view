const userModel = require('./model');

module.exports = {
    getAll: (req, res) => {
        return res.render('users.hbs', {
            users: userModel.getAll()
        })
    },
    create: (req, res) => {
        try {
            const {username, age} = req.body;

            if (!age || !username) {
                throw new Error('Wrong username or age');
            }

            userModel.create({username, age});

            return res.redirect('/users');
        } catch (err) {
            return res.render('users-error.hbs', {
                message: err.message
            });
        }
    },
    removeById: (req, res) => {
    }
}