module.exports = (sequelize, DateTypes) =>{
    const product = sequelize.define("Product", {
        name:{
            type:DateTypes.STRING(20),
            allowNull:false,

        },
        price:{
            type:DateTypes.INTEGER(10),
            allowNull:false,
            
        },
        seller:{
            type:DateTypes.STRING(30),
            allowNull:false,

        },
        description:{
            type:DateTypes.STRING(300),
            allowNull:false,

        },
        imageUrl:{
            type:DateTypes.STRING(300),
            allowNull:true,

        },
    });
    return product;
}