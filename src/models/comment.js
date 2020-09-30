const {
    Sequelize
} = require("sequelize/types")

module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define(
        "Comment", {
            commentId: {
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
            text: {
                type: DataTypes.TEXT,
                allowNull: false
            },
        }, {
            timestamps: false, //CreatedAt, UpdatedAt 자동 날리기 
            underscored: false,
            freezeTableName: true, //자동으로 복수형 만들기 금지
            tableName: 'Comment',
        }
    );
    Comment.associate = (models) => {
        Comment.belongsTo(models.Post, {
            foreignKey: 'commentId',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        })
    };
    Comment.associate = (models) => {
        Comment.belongsTo(models.User, {
            foreignKey: 'commentId',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        })
    };
    return Comment;
};