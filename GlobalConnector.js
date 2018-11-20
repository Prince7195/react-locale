var Store;
(function (Store) {
    var GlobalConnector = /** @class */ (function () {
        function GlobalConnector() {
            this.subject = new Rx.BehaviorSubject({});
        }
        GlobalConnector.prototype.dispatch = function (action) {
            this.subject.next(action);
        };
        GlobalConnector.prototype.listen = function (callback) {
            var _this = this;
            this.subject.subscribe(function (action) {
                callback.call(_this, action);
            });
        };
        return GlobalConnector;
    }());
    Store.GlobalListener = new GlobalConnector();
})(Store || (Store = {}));
