const { Model, Datatypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: Datatypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        comment_text: {
            type: Datatypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: Datatypes.STRING,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        post_id: {
            type: Datatypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'comment'
    }
);
module.exports = Comment;