const dbConnection = require('../../config/DBConnection');

const get = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = 'Select * from modifiers';
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
      const queryString = 'Select * from modifiers  WHERE id= ?';
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
      const queryString = `INSERT INTO modifiers(description) VALUES  (?)`;
      const result = await dbConnection.query(queryString, [data.description]);
      return resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const update = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = `Update modifiers SET  description =? where id = ?`;
      const result = dbConnection.query(queryString, [data.description, data.id]);
      return resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const remove = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = `DELETE from modifiers where id = ?`;
      const result = await dbConnection.query(queryString, [data.id]);
      return resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { get, getById, create, update, remove };
