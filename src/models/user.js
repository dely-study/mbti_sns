const {
    Sequelize
} = require("sequelize/types")

// sequelize.define('객체이름', 스키마 정의, 테이블 설정)
module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User", {
            userId: {
                type: DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            //시간이 필요한가?
            createdAt: {
                type: DataTypes.DATE
            },
            updatedAt: {
                type: DataTypes.DATE
            },
            firstName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            lastName: {
                type: DataTypes.STRING,
                allowNull: false
            },
            email: {
                type: DataTypes.STRING,
                allowNull: false
            },
            password: {
                type: DataTypes.STRING,
                allowNull: false
            },
            phoneNumber: {
                type: DataTypes.STRING,
                allowNull: false
            },
            mbtiType: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            isVerificated: {
                type: DataTypes.BOOLEAN,
                allowNull: false
            },
            profileImg: DataTypes.JSON,
            nickname: DataTypes.STRING,
            gender: DataTypes.BOOLEAN,
        }, {
            timestamps: false, //CreatedAt, UpdatedAt 자동 날리기 
            underscored: false,
            freezeTableName: true, //자동으로 복수형 만들기 금지
            tableName: 'User',
        }
    );
    User.associate = (models) => {
        models.User.hasMany(models.Post);
    };
    User.associate = (models) => {
        models.User.hasMany(models.Comment);
    };
    User.associate = (models) => {
        models.User.hasMany(models.UserChatting);
    };
    return User;
};