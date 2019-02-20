'use strict';
export default (sequelize, DataTypes) => {
  const category = sequelize.define('category', {
    name: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Please enter a name'}
    },
    parent_category_id: {
      type: DataTypes.INTEGER,
      allowNull: { args: true }
    }
  }, { timestamps: false});
  category.associate = models => {
   category.hasMany(models.job, { foreignKey: 'category_id'})
  };
  return category;
};