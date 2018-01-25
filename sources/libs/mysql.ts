
import * as Common from "../common";

import { MYSQL_CONFIG } from "../config/db";

import Sequelize = require("sequelize");

interface IMysqlDB {
    init(): void;
}

class CMysqlDB implements IMysqlDB {

    protected _db: Common.DependencyContainer;

    constructor() {
        this._db = new Common.DependencyContainer();
    }
    public init(): void {
        this.init_db();
        let models = require("../models/index");
        // initialize model
        for (let modelName of models) {
            let model = require(`../models/${modelName}`);
            model.manager.initialize(this._db);
        }
        // associate model
            for (let modelName of models) {
            let model = require(`../models/${modelName}`);
            model.manager.associate();
        }
    }
    protected init_db(): void {
        this._db.database =
            new Sequelize(MYSQL_CONFIG.database,
                    MYSQL_CONFIG.username,
                    MYSQL_CONFIG.password, {
                        host: MYSQL_CONFIG.host,
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

export let mysql: IMysqlDB = new CMysqlDB();

export default mysql;