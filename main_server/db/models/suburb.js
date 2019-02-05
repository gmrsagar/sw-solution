'use strict';
export default (sequelize, DataTypes) => {
  const suburb = sequelize.define('suburb', {
    name: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Please enter a valid name' }
    },
    postcode: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Please enter a valid postcode' }
    }
  }, { timestamps: false});
  suburb.associate = models => {
    suburb.hasMany(models.job, { foreignKey: 'suburb_id'})
  };
  return suburb;
};