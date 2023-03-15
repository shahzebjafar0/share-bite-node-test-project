'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'modifiers',
      [
        {
          description: 'Extra Spicy'
        },
        {
          description: 'Regular Spice'
        },
        {
          description: 'No Spice'
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('modifiers', null, {});
  }
};
