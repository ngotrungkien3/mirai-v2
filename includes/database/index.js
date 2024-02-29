const Sequelize = require("sequelize");


let storage = cwd+'/includes/database/db.sqlite'

module.exports.sequelize = new Sequelize({
    dialect: 'sqlite',
    storage,
    pool: {
        max: 20,
        min: 0,
        acquire: 60000,
        idle: 20000
    },
    retry: {
        match: [
            /SQLITE_BUSY/,
        ],
        name: 'query',
        max: 20
    },
    logging: false,
    transactionType: 'IMMEDIATE',
    define: {
        underscored: false,
        freezeTableName: true,
        charset: 'utf8',
        dialectOptions: {
            collate: 'utf8_general_ci'
        },
        timestamps: true
    },
    sync: {
        force: false
    }
});

module.exports.Sequelize = Sequelize;