module.exports = (db) => {
  const getUsers = () => {
    const queryStr = {
      text: `SELECT * FROM users;`,
    };

    return db.query(queryStr).then((data) => data.rows);
  };

  const addUser = (name) => {
    const queryStr = {
      text: `INSERT INTO users(name) VALUES ($1) RETURNING *`,
      values: [name],
    };

    return db.query(queryStr).then((data) => data.rows[0]);
  };

  const getUserWidgets = () => {
    const queryStr = {
      text: `SELECT users.id as userId, users.name as username, widgets.id as widgetId, widgets.name as widgetName FROM users INNER JOIN widgets ON users.id = widgets.user_id`,
    };
    return db.query(queryStr).then((data) => data.rows);
  };

  return { getUsers, addUser, getUserWidgets};
};
