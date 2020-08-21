/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into api/users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require("express");
const router = express.Router();
const {formatUserWidgets} = require('../helpers/dataHelpers');

module.exports = ({ getUsers, addUser, getUserWidgets }) => {
  router.get("/", (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.post("/", (req, res) => {
    const { name } = req.body;

    addUser(name)
      .then((user) => {
        console.log("user", user);
        res.json(user);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  router.get("/widgets", (req, res) => {
    getUserWidgets()
      .then((userWidgets) => {
        const result = formatUserWidgets(userWidgets);
        res.json(result);
      })
      .catch((err) => {
        res.status(500).json({ error: err.message });
      });
  });

  return router;
};
