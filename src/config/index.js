const dotenv = require('dotenv');
const envFound = dotenv.config({path:`.env`});
if(!envFound){
    throw new Error('can\'t find .env file')
}
//set NODE_ENV to devopment by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
    port: parseInt(process.env.PORT,10),
    db_url: process.env.DB_URL,
    // db_user: process.env.DB_USER,
    // db_password: process.env.DB_PASSWORD,
    // db_name: process.env.DB_NAME
}