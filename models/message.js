module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        body: {
            type: DataTypes.TEXT,
            allowNull: false,
            len: [1]
        }
    });

    Message.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Message.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Message;
};