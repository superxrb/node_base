"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Sequelize = require("sequelize");
class CManager {
    _initializeModel() {
        this._model = this._db.define("country", {
            "id": {
                "type": Sequelize.INTEGER.UNSIGNED,
                "autoIncrement": true,
                "primaryKey": true
            },
            "countryCode": {
                "type": Sequelize.STRING(8),
                "allowNull": false,
                "field": "country_code"
            },
            "refreshToken": {
                "type": Sequelize.STRING(1024),
                "allowNull": false,
                "field": "refresh_token"
            },
            "profile": {
                "type": Sequelize.STRING(512),
                "allowNull": false,
                "field": "profile"
            },
        }, {
            "tableName": "country",
            "timestamps": false,
            "instanceMethods": {}
        });
    }
    initialize(deps) {
        this._db = deps.database;
        this._initializeModel();
    }
    associate() {
        return;
    }
    getModel() {
        return this._model;
    }
    findByCode(countryCode) {
        return this._model.findOne({
            where: {
                countryCode: countryCode,
            }
        });
    }
}
exports.manager = new CManager();
exports.default = exports.manager;
//# sourceMappingURL=country.js.map