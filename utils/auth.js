// Authenticate login

const withAuth = (req, res, next) => {
    if(!req.sessio.user_id) {
        res.redirect('/login');
    } else {
        next();
    }
};

module.exports = withAuth;