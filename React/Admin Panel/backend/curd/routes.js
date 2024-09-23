const User = require ('./controllers/user')
const Employee = require ('./controllers/employee')
const Register = require('./controllers/register')
const Status = require('./controllers/status')

module.exports=function(app){
    app.use("/user",User);
    app.use("/employee",Employee);
    app.use("/register",Register);
    app.use("/status",Status);

}
