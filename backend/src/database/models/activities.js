module.exports = (sequelize, DataTypes) => {
  const Activity = sequelize.define(
    "Activity",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
        unique: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "title",
      },
      
    },
    {
      tableName: "activity",
      underscore: true,
      timestamp: true,
    }
  );

  return Activity;
};
