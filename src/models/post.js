const {
    Sequelize
} = require("sequelize/types")

module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define(
        "Post", {
            postId: {
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
            boardType: {
                type: DataType.INTEGER, //타입 설정하기
                allowNull: false
            },
            title: {
                type: DataTypes.STRING,
                allowNull: false
            },
            content_text: {
                type: DataTypes.TEXT,
                allowNull: false
            },
            content_img: DataTypes.JSON,
            like: DataTypes.INTEGER,
        }, {
            timestamps: false, //CreatedAt, UpdatedAt 자동 날리기 
            underscored: false,
            freezeTableName: true, //자동으로 복수형 만들기 금지
            tableName: 'Post',
        }
    );
    Post.associate = (models) => {
        Post.belongsTo(models.User, {
            foreignKey: 'postId',
            onUpdate: 'cascade',
            onDelete: 'cascade'
        })
    };
    Post.associate = (models) => {
        Post.hasMany(models.Comment);
    };
    return Post;
};