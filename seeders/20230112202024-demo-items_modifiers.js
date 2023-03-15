'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'items_modifiers',
      [
        {
          item_id: 1,
          modifier_id: 1
        },
        {
          item_id: 1,
          modifier_id: 2
        },
        {
          item_id: 1,
          modifier_id: 3
        }
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('items_modifiers', null, {});
  }
};
