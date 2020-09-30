const {
    Sequelize
} = require("sequelize/types")

module.exports = (sequelize, DataTypes) => {
    const Message = sequelize.define(
        "Message", {
            messageId: {
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
            message: {
                type: DataType.TEXT,
                allowNull: false
            },
            userId: {
                type: DataTypes.INTEGER,
                allowNull: false
            }
        }, {
            timestamps: false, //CreatedAt, UpdatedAt 자동 날리기 
            underscored: false,
            freezeTableName: true, //자동으로 복수형 만들기 금지
            tableName: 'Message',
        }
    );
    Message.associate = (models) => {
        Message.belongsTo(models.Chatting, {
            foreignKey: 'messageId',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        })
    };
    return Message;
};