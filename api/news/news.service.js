const pool = require("../../config/database");

module.exports = {
    createNews: (data, callBack) => {
        pool.query(
          `insert into news_table(title, user_id, blog, category) 
                    values(?,?,?,?)`,
          [
            data.title,
            data.user_id,
            data.blog,
            data.category
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
    getNews: (callBack) => {
        pool.query(`select * from news_table`, [], (error, results, fields) => {
          if (error) {
            return callBack(error);
          }
          return callBack(null, results);
        });
    },
    getNewsByUserId: (id, callBack) => {
        pool.query(
          `select * from news_table where user_id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
    getNewsById: (id, callBack) => {
        pool.query(
          `select * from news_table where blog_id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
    updateNews: (data, callBack) => {
        pool.query(
          `update new_table set title=?, blog=?, category=? where blog_id = ?`,
          [
            data.title,
            data.blog,
            data.category,
            data.blog_id
          ],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
    },
    deleteNews: (data, callBack) => {
        pool.query(
          `delete from news_table where blog_id = ?`,
          [data.blog_id],
          (error, results, fields) => {
            if (error) {
              return callBack(error);
            }
            return callBack(null, results);
          }
        );
    }
}