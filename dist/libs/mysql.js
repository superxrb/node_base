"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Common = require("../common");
const db_1 = require("../config/db");
const Sequelize = require("sequelize");
class CMysqlDB {
    constructor() {
        this._db = new Common.DependencyContainer();
    }
    init() {
        this.init_db();
        let models = require("../models/index");
        for (let modelName of models) {
            let model = require(`../models/${modelName}`);
            model.manager.initialize(this._db);
        }
        for (let modelName of models) {
            let model = require(`../models/${modelName}`);
            model.manager.associate();
        }
    }
    init_db() {
        this._db.database =
            new Sequelize(db_1.MYSQL_CONFIG.database, db_1.MYSQL_CONFIG.username, db_1.MYSQL_CONFIG.password, {
                host: db_1.MYSQL_CONFIG.host,
                dialect: "mysql",
                operatorsAliases: false,
                pool: {
                    max: 20,
                    min: 0,
                    idle: 10000
                }
            });
    }
}
exports.mysql = new CMysqlDB();
exports.default = exports.mysql;
//# sourceMappingURL=mysql.js.map