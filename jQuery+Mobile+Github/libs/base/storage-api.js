(function (Apperyio, undefined) {
    "use strict";

    var Storage = (function (Apperyio) {
        function Storage() {
        }

        Storage.prototype.clear = function () {
            this.set(undefined);
        };

        Storage.prototype.update = function (path, value) {
            if (arguments.length === 0) return;

            var result = null;
            if (arguments.length === 1) {
                result = $.extend(true, this.get(), path); // path is a value in this case
            } else {
                result = Apperyio.MEP.merge(path, this.get(), value);
            }

            this.set(result);
            return result;
        };

        return Storage;
    })(Apperyio);

    var WindowStorage = (function (Storage) {
        function WindowStorage(name, type) {
            this.name = name;
            this.type = type;
        }

        WindowStorage.prototype = Object.create(Storage.prototype);
        WindowStorage.prototype.constructor = WindowStorage;

        WindowStorage.prototype.get = function (path) {
            if (path === undefined) {
                return window[this.name];
            } else {
                return Apperyio.MEP.get(path, window[this.name]);
            }
        };

        WindowStorage.prototype.set = function (value) {
            window[this.name] = value;
        };

        return WindowStorage;
    })(Storage);

    var LocalStorage = (function (Storage) {
        function LocalStorage(name, type) {
            this.name = name;
            this.type = type;
        }

        LocalStorage.prototype = Object.create(Storage.prototype);
        LocalStorage.prototype.constructor = LocalStorage;

        LocalStorage.prototype.get = function (path) {
            var data = localStorage.getItem(this.name);

            if (data === null) return undefined;
            if (this.type === "String") return data;

            try {
                data = JSON.parse(data);
            } catch (e) {
                // intentionally left empty
            }

            if (path === undefined) {
                return data;
            } else {
                return Apperyio.MEP.get(path, data);
            }
        };

        LocalStorage.prototype.set = function (value) {
            if (value === undefined) {
                localStorage.removeItem(this.name);
            } else if (this.type === "String") {
                localStorage.setItem(this.name, value);
            } else {
                localStorage.setItem(this.name, JSON.stringify(value));
            }
        };

        return LocalStorage;
    })(Storage);

    var SessionStorage = (function (Storage) {
        function SessionStorage(name, type) {
            this.name = name;
            this.type = type;
        }

        SessionStorage.prototype = Object.create(Storage.prototype);
        SessionStorage.prototype.constructor = SessionStorage;

        SessionStorage.prototype.get = function (path) {
            var data = sessionStorage.getItem(this.name);

            if (data === null) return undefined;
            if (this.type === "String") return data;

            try {
                data = JSON.parse(data);
            } catch (e) {
                // intentionally left empty
            }

            if (path === undefined) {
                return data;
            } else {
                return Apperyio.MEP.get(path, data);
            }
        };

        SessionStorage.prototype.set = function (value) {
            if (value === undefined) {
                sessionStorage.removeItem(this.name);
            } else if (this.type === "String") {
                sessionStorage.setItem(this.name, value);
            } else {
                sessionStorage.setItem(this.name, JSON.stringify(value));
            }
        };

        return SessionStorage;
    })(Storage);

    Apperyio.Storage = Storage;
    Apperyio.WindowStorage = WindowStorage;
    Apperyio.LocalStorage = LocalStorage;
    Apperyio.SessionStorage = SessionStorage;
}(Apperyio));
