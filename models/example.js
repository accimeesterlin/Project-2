module.exports = function(sequelize, DataTypes) {
    var chat = sequelize.define("chat", {
        text: DataTypes.STRING,
        description: DataTypes.TEXT
    });
    return chat;
};