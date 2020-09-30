const {
    Sequelize
} = require("sequelize/types")

module.exports = (sequelize, DataTypes) => {
    const Chatting = sequelize.define(
        "Chatting", {
            chatting_id: {
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
            tableName: 'Chatting',
        }
    );
    Chatting.associate = (models) => {
        models.Chatting.hasMany(models.UserChatting);
    };
    Chatting.associate = (models) => {
        models.Chatting.hasMany(models.Message);
    };
    return Chatting;
};