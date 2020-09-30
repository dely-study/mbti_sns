const {
    Sequelize
} = require("sequelize/types")

module.exports = (sequelize, DataTypes) => {
    const UserChatting = sequelize.define(
        "UserChatting", {
            userchattingId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },
        }, {
            timestamps: false, //CreatedAt, UpdatedAt 자동 날리기 
            underscored: false,
            freezeTableName: true, //자동으로 복수형 만들기 금지
            tableName: 'UserChatting',
        }
    );
    UserChatting.associate = (models) => {
        UserChatting.belongsTo(models.User, {
            foreignKey: 'userchattingId',
            onUpdate: 'cascade',
            onDelete: 'cascade'

        })
    };
    UserChatting.associate = (models) => {
        UserChatting.belongsTo(models.Chatting, {
            foreignKey: 'userchattingId',
            onUpdate: 'cascade',
            onDelete: 'cascade'

        })
    };
    return UserChatting;
};