const Sequelize = require("sequelize");
const sequelize = new Sequelize(
 'connect_db',
 'root',
 'root',
  {
    host: '127.0.0.1',
    dialect: 'mysql'
  }
);

sequelize.authenticate().then(() => {
    console.log('Conexão realizada com sucesso.');
 }).catch((error) => {
    console.error('Impossivel criar conexão: ', error);
 });