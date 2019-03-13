module.exports = function(sequelize, DataTypes) {
    var Groups = sequelize.define("Groups", {
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

    Groups.associate = function(models) {
        // We're saying that a Post should belong to an Author
        // A Post can't be created without an Author due to the foreign key constraint
        Groups.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Groups;
};