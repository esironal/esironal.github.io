/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "Number": {
        "type": "number"
    },
    "Boolean": {
        "type": "boolean"
    },
    "String": {
        "type": "string"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "currentRepo": new $a.LocalStorage("currentRepo", "String"),

    "currentSHA": new $a.LocalStorage("currentSHA", "String"),

    "currentGistId": new $a.LocalStorage("currentGistId", "String"),

    "access_token": new $a.LocalStorage("access_token", "String"),

    "currentUserLogin": new $a.LocalStorage("currentUserLogin", "String")
};