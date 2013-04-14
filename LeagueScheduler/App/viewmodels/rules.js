define(['services/logger'], function (logger) {
    var vm = {
        activate: activate,
    };

    return vm;

    //#region Internal Methods
    function activate() {
        //logger.log('Details View Activated', null, 'details', true);
        return true;
    }
    //#endregion
});