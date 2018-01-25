import Sequelize = require("sequelize");

import * as Common from "../common";

interface IAttributes {
    id ?: number;

    countryCode: string;

    refreshToken: string;

    profile: string;


}

interface IRecord
extends
    Sequelize.Instance<IAttributes>,
    IAttributes {

    }

type IModel = Sequelize.Model<IRecord, IAttributes>;

export interface IManager extends Common.IModelManager {

    getModel(): IModel;

    findByCode(countryCode: string): any;

}

class CManager implements IManager {
    protected _model: IModel;

    protected _db: Sequelize.Sequelize;

    protected _initializeModel(): void {
        this._model = this._db.define<
            IRecord,
            IAttributes
        >(
            "country", {
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
                "instanceMethods": {

                }
            }
        );
    }
    public initialize(deps: Common.DependencyContainer): void {
        this._db = deps.database;
        this._initializeModel();
    }
    public associate(): void {
        return ;
    }
    public getModel(): IModel {
        return this._model;
    }

    public findByCode(countryCode: string): any {
        return this._model.findOne({
                where: {
                    countryCode: countryCode,
                }}
        );
    }

}

export let manager: IManager = new CManager();

export default manager;