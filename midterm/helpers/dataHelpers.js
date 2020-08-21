const formatUserWidgets = (userWidgets) => {
  const users = {};

  for (let userWidget of userWidgets) {
    if (!users[userWidget.userid]) {
      users[userWidget.userid] = {
        userId: userWidget.userid,
        name: userWidget.username,
        widgets: [{
          widgetId: userWidget.widgetid,
          widgetName: userWidget.widgetname,
        }],
      };
    } else {
      users[userWidget.userid].widgets.push({
        widgetId: userWidget.widgetid,
        widgetName: userWidget.widgetname,
      });
    }
  }
  return users;
};

module.exports = { formatUserWidgets };
