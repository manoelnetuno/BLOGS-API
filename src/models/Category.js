module.exports = (sequelize, Datatypes) => {
    const Category = sequelize.define('Category', {
        id: {
            primaryKey: true,
            type: Datatypes.INTEGER,
            autoIncrement:true,
        },
        name: Datatypes.STRING,
    }, {
        tableName: 'categories',
        timestamps: false,
        underscored: true,
    });
    return Category;
};

