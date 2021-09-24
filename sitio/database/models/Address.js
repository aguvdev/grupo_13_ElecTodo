module.exports = (sequelize, dataTypes) => {
    
    let alias = "Address";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            allowNull: false,
            primaryKey : true
        },
        Address : {
            type : dataTypes.STRING(255),
            allowNull: false
        }
    }

    let config = {
        underscored : true
    }
    const Address = sequelize.define(alias, cols, config);

    return Address
}