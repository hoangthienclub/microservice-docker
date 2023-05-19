import { DataTypes, Model, Optional } from "sequelize";
import sequelizeConnection from "../config";

interface UserAttribute {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
    hashedPassword: string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
}

export interface UserInput extends Optional<User, 'id'> {}

export interface UserOutput extends Required<User> {}

class User extends Model<UserAttribute, UserInput> implements User {
    public id!: number;
    public email!: string;
    public firstName!: string;
    public lastName!: string;
    public hashedPassword!: string;

    // timestamp!
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
    public readonly deletedAt!: Date;
}

User.init({
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    hashedPassword: {
        type: DataTypes.STRING,
        allowNull: false,
    }
}, {
    sequelize: sequelizeConnection,
    paranoid: true
})

export default User;