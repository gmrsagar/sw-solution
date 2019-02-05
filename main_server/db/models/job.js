'use strict';
export default (sequelize, DataTypes) => {
  const job = sequelize.define('job', {
    status: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Please enter a valid status'}
    },
    suburb_id: {
      type: DataTypes.INTEGER,
      references: { model: 'Suburb', key: 'id', as: 'suburb_id' }
    },
    category_id: {
      type: DataTypes.INTEGER,
      references: { model: 'Category', key: 'id', as: 'category_id' },
    },
    contact_name: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Please enter a valid name'}
    },
    contact_phone: {
      type: DataTypes.INTEGER, 
      allowNull: { args: false, msg: 'Please enter a valid phone'}
    }, 
    contact_email: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Please enter a valid email' }
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: { args: false, msg: 'Please enter a price' }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: { args: false, msg: 'Please enter a description' }
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE, 
      field: 'updated_at'
    },
  }, { timestamps: true });
  job.associate = models => {
    job.belongsTo(models.category, { foreignKey: 'category_id', onDelete: 'CASCADE'})
    job.belongsTo(models.suburb, { foreignKey: 'suburb_id', onDelete: 'CASCADE'})
  };
  return job;
};