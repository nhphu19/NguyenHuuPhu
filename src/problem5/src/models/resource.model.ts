import { DataTypes, Model } from "sequelize";
import { sequelize } from "../dbs/index";

class Resource extends Model {
    public id!: number;
    public name!: string;
    public type!: string;
    public size!: number; // KB
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Resource.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
    },
    {
        sequelize,
        tableName: "resources",
    }
);

export default Resource;
