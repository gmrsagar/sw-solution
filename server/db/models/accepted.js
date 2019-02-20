'use strict';
export default (sequelize, DataTypes) => {
  const accepted = sequelize.define('accepted', {
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: { args: false }
    },
    tradie_id: {
      type: DataTypes.INTEGER,
      allowNull: { args: false }
    },
    status: {
      type: DataTypes.STRING,
      allowNull: { args: false }
    }
  }, { timestamps: false});
  accepted.associate = models => {
   accepted.hasMany(models.job, { foreignKey: 'job_id'})
  };
  return accepted;
};