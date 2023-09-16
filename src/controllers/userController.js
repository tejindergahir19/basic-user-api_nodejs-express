const User = require("../models/User");

class UserController {
  static getAllUsers = (req, res) => {
    User.getAllUsers((error, users) => {
      if (error) {
        res.status(500).json({ error: "Internal Server Error | " + error });
      } else {
        res.status(200).json(users);
      }
    });
  };

  static getUserDetails = (req, res) => {
    User.getUserDetails(req.params.user_id, (error, user) => {
      if (error) {
        res.status(500).json({ error: "Internal Server Error | " + error });
      } else {
        res.status(200).json(user);
      }
    });
  };

  static updateUserDetails = (req, res) => {
    User.updateUserDetail(req.body, (error, user) => {
      if (error) {
        res.status(500).json({ error: "Internal Server Error | " + error });
      } else {
        res.status(200).json(user);
      }
    });
  };

  static getUserImage = (req, res) => {
     User.getUserImage(req.params.user_id, (error, img) => {
       if (error) {
         res.status(500).json({ error: "Internal Server Error | " + error });
       } else {
         res.status(200).json(img);
       }
     });
  }

  static addUser = (req, res) => {
     User.addUser(req.body, (error, user) => {
       if (error) {
         res.status(500).json({ error: "Internal Server Error | " + error });
       } else {
         res.status(201).json(user);
       }
     });
  }

  static deleteUser = (req, res) => {
    User.deleteUser(req.params.user_id, (error, user) => {
      if (error) {
        res.status(500).json({ error: "Internal Server Error | " + error });
      } else {
        res.status(200).json(user);
      }
    });
  }
}

module.exports = UserController;
