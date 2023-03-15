const dbConnection = require('../../config/DBConnection');

const get = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const modifiersQuery = `SELECT modifiers.id, modifiers.description as title,
        items_modifiers.item_id FROM items_modifiers JOIN modifiers
        on modifiers.id = items_modifiers.modifier_id`;
      const itemsQuery = `SELECT id,name as title, section_id FROM items;`;

      const [modifiers] = await dbConnection.query(modifiersQuery);
      const [items] = await dbConnection.query(itemsQuery);

      const menuItems = items.map(item => {
        return {
          id: item.id,
          title: item.title,
          modifiers: modifiers
            .filter(mod => mod.item_id == item.id)
            .map(mod => ({ id: mod.id, title: mod.title }))
        };
      });

      return resolve(menuItems);
    } catch (error) {
      reject(error);
    }
  });
};

const create = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = `INSERT INTO items_modifiers(item_id,modifier_id) VALUES(?,?)`;
      const result = await dbConnection.query(queryString, [data.item_id, data.modifier_id]);
      return resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { get, create };
