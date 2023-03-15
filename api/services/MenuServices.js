const dbConnection = require('../../config/DBConnection');

const get = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const modifiersQuery = `SELECT modifiers.id, modifiers.description as title,
      items_modifiers.item_id FROM items_modifiers JOIN modifiers
      on modifiers.id = items_modifiers.modifier_id`;
      const itemsQuery = `SELECT id,name as title, section_id FROM items;`;
      const sectionsQuery = `SELECT id,name as title FROM sections;`;

      const [modifiers] = await dbConnection.query(modifiersQuery);
      const [items] = await dbConnection.query(itemsQuery);
      const [sections] = await dbConnection.query(sectionsQuery);
      const menuItems = items.map(item => {
        return {
          id: item.id,
          title: item.title,
          section_id: item.section_id,
          modifiers: modifiers
            .filter(mod => mod.item_id == item.id)
            .map(mod => ({ id: mod.id, title: mod.title }))
        };
      });
      const menu = sections.map(section => {
        return {
          id: section.id,
          title: section.title,
          items: menuItems
            .filter(item => item.section_id == section.id)
            .map(item => ({ id: item.id, title: item.title, modifiers: item.modifiers }))
        };
      });

      return resolve(menu);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { get };
