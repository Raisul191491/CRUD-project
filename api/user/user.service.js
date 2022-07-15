const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `insert into user_table(firstname, lastname, gender, email, password) 
                      values(?,?,?,?,?)`,
            [
              data.firstname,
              data.lastname,
              data.gender,
              data.email,
              data.password,
            ],
            (error, results, fields) => {
              if (error) {
                return callBack(error);
              }
              return callBack(null, results);
            }
          );
      },
    getUsers: (callBack) => {
        pool.query(
          `select id, firstname, lastname, gender, email from user_table`,
          [],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
    getUserById: (id, callBack) => {
        pool.query(
          `select id, firstname, lastname, gender, email, number from user_table where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
    updateUser: (data, callBack) => {
        pool.query(
          `update user_table set firstname=?, lastname=?, gender=?, email=?, password=? where id = ?`,
          [
            data.firstname,
            data.lastname,
            data.gender,
            data.email,
            data.password,
            data.id,
          ],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
    deleteUser: (data, callBack) => {
        pool.query(
          `delete from user_table where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
    getUserByUserEmail: (email, callBack) => {
        pool.query(
          `select * from user_table where email = ?`,
          [email],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }
}