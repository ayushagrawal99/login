module.exports = (sequelize, DataTypes) => {
    const SignUp = sequelize.define('signup', {
        id: {
            type: DataTypes.INTEGER, 
            allowNull: false, 
            autoIncrement: true,
            primaryKey : true,
        },
        first_name : { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        last_name : { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        username : { 
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true,
        },
        email : { 
            type: DataTypes.STRING, 
            allowNull: false,
            unique: true,
        },
        password : { 
            type: DataTypes.STRING, 
            allowNull: false 
        },
        createdAt : {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue : sequelize.fn("now"),
        },
        updatedAt : {
            type: DataTypes.DATE,
            allowNull: true,
            defaultValue : sequelize.fn("now"),
        }
    });

    return SignUp;
}