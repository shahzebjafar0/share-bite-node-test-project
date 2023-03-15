const dbConnection = require('../../config/DBConnection');

const get = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = 'Select * from items';
      const result = await dbConnection.query(queryString);
      return resolve(result[0]);
    } catch (error) {
      reject(error);
    }
  });
};

const getById = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = 'Select * from items+  WHERE id= ?';
      const result = await dbConnection.query(queryString, [data.id]);
      return resolve(result[0]);
    } catch (error) {
      reject(error);
    }
  });
};

const create = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = `INSERT INTO items(name,description,price,section_id) VALUES  (?,?,?,?)`;
      const result = await dbConnection.query(queryString, [
        data.name,
        data.description,
        data.price,
        data.section_id
      ]);
      return resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const update = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = `Update items SET  name = ?, description =?, price=?,section_id=?  where id = ?`;
      const result = dbConnection.query(queryString, [
        data.name,
        data.description,
        data.price,
        data.section_id,
        data.id
      ]);
      return resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const remove = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = `DELETE from items where id = ?`;
      const result = await dbConnection.query(queryString, [data.id]);
      return resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { get, getById, create, update, remove };
