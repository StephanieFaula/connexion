const user = require('../models/user');

module.exports = {
    login: async(req, res) => {

        let email = req.body.email;
        let password = req.body.password;

        try {
            let emailFound = await user.findOne({
                attributes: ['email'],
                where: { email: email }
            })
            if (emailFound) {
                res.json({data: emailFound})
            } else {
                res.json({error: 'Identifiants incorrects, vérifier votre email ou mot de passe.'})
            }
        } catch (error) {
            res.json({error: error})
        }
    },
    logout: async(req, res) => {
        res.json({data: 'logout route'});
        console.log('logout login')
    },
    getUserProfil: async(req, res) => {
        res.json({data: 'getprofil route'});
        console.log('getprofil login')
    },
    register: async(req, res) => {
        res.json({data: 'register route'});
        console.log('register login')
    }
}