// src/models/Book.js
const { error } = require("console");
const db = require("../database/db");

class User {
  static getAllUsers(callback) {
    const sql = "SELECT * FROM tbl_user";

    db.query(sql, (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  }

  static getUserDetails(user_id, callback) {
    const sql = "SELECT * FROM tbl_user WHERE user_id = ?";

    db.query(sql, [user_id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  }

  static updateUserDetail(detail, callback) {
    const sql = `
    UPDATE tbl_user
    SET user_name = ?,
        user_email = ?,
        user_password = ?,
        user_image = ?,
        total_orders = ?,
        last_logged_in = ?
    WHERE user_id = ?
  `;

    const values = [
      detail.user_name,
      detail.user_email,
      detail.user_password,
      detail.user_image,
      detail.total_orders,
      detail.last_logged_in,
      detail.user_id,
    ];

    db.query(sql, values, (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  }

  static getUserImage(user_id, callback) {
    const sql = "SELECT * FROM tbl_user WHERE user_id = ?";

    db.query(sql, [user_id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results[0].user_image);
    });
  }

  static addUser(detail, callback) {
    const sql = `
    INSERT INTO tbl_user
    (user_name, user_email, user_password, user_image, total_orders, last_logged_in)
    VALUES (?, ?, ?, ?, ?, ?)
  `;

    const values = [
      detail.user_name,
      detail.user_email,
      detail.user_password,
      detail.user_image,
      detail.total_orders,
      detail.last_logged_in,
    ];

    db.query(sql, values, (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  }

  static deleteUser(user_id, callback) {
    const sql = "DELETE FROM tbl_user WHERE user_id = ?";

    db.query(sql, [user_id], (error, results) => {
      if (error) {
        return callback(error, null);
      }
      return callback(null, results);
    });
  }
}

module.exports = User;
