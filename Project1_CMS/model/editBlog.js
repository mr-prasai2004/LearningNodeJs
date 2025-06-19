
module.exports=(sequelize, DataTypes)=>{
    const editBlog= sequelize.define('editblog',{
        blogid:{
            type: DataTypes.INTEGER,
        },
        title:{
            type: DataTypes.STRING,
        },
        description:{
            type: DataTypes.STRING,
        },
        subTitle:{
            type: DataTypes.STRING,
        }
    })

    

}