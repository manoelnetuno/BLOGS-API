'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id:{
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      displayName:{
        allowNull: false,
        field: 'display_name',
        type: Sequelize.STRING,
      },
      email:{
        allowNull: false,
        unique: true,
        type: Sequelize.STRING
      },
      password:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      image:{
        allowNull: false,
        type: Sequelize.STRING,
      }
    });
  },

  async down (queryInterface, _Sequelize) {
    await queryInterface.dropTable('users');
  }
};
