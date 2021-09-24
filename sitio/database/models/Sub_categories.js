module.exports = (sequelize, dataTypes) => {
    
    let alias = "sub_categories";
    
    let cols = {
        id : {
            type : dataTypes.INTEGER,
            autoIncrement : true,
            allowNull: false,
            primaryKey : true
        },
        name : {
            type : dataTypes.STRING(100),
            allowNull: false
        }
    }

    let config = {
        underscored : true
    }
    const sub_categories = sequelize.define(alias, cols, config);

    return sub_categories
}