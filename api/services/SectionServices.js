const dbConnection = require('../../config/DBConnection');

const get = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = 'Select * from sections';
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
      const queryString = 'Select * from sections  WHERE id= ?';
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
      const queryString = `INSERT INTO sections(name,description) VALUES  (?,?)`;
      const result = await dbConnection.query(queryString, [data.name, data.description]);
      return resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const update = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = `Update sections SET  name = ?, description =? where id = ?`;
      const result = dbConnection.query(queryString, [data.name, data.description, data.id]);
      return resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

const remove = data => {
  return new Promise(async (resolve, reject) => {
    try {
      const queryString = `DELETE from sections where id = ?`;
      const result = await dbConnection.query(queryString, [data.id]);
      return resolve(result);
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { get, getById, create, update, remove };
