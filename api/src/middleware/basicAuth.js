const basicAuth = require("basic-auth");
const userService = require("../Services/user.service");

const BasicAuth = (req, res, next) => {    
    var user = basicAuth(req);
    
    if (!user || !user.name || !user.pass) {        
        res.set("WWW-Authenticate", "Basic realm=Authorization Required");
        res.sendStatus(401);
        return;
    }
    userService.authenticate({username: user.name, password: user.pass})
        .then((result) => {
            if(result){
                next();
            }else{
                res.set("WWW-Authenticate", "Basic realm=Authorization Required");
                res.sendStatus(401);
                return;
            }
        })
        .catch((err) => {
            res.set("WWW-Authenticate", "Basic realm=Authorization Required");
            res.sendStatus(401);
            return;
        });    
}

module.exports = BasicAuth