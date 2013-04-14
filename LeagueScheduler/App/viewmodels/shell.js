define(['durandal/system', 'durandal/plugins/router', 'services/logger'],
    function (system, router, logger) {
 	
        var adminRoutes = ko.computed(function () {
            return router.allRoutes().filter(function (r) {
                return r.settings.admin;
            });
        });

        var shell = {
            activate: activate,
            adminRoutes: adminRoutes,
            router: router
        };
        
        return shell;

        //#region Internal Methods
        function activate() {

            ko.bindingHandlers.shortDate = {
                init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var value = valueAccessor();
                    $(element).text(moment(value).format('MMMM Do YYYY'));
                }
            };

            ko.bindingHandlers.shortTime = {
                init: function (element, valueAccessor, allBindingsAccessor, viewModel, bindingContext) {
                    var value = valueAccessor();
                    $(element).text(moment(value).format('h:mm a'));
                }
            };
        

            return boot();
        }

        function boot() {
            router.mapNav('home');
            //router.mapNav('details');
            router.mapNav('fullschedule', null, 'full schedule');
            router.mapNav('teams', null, 'schedule by team');
            router.mapRoute('teams/:name', 'viewmodels/teamschedule');
            router.mapNav('locations', null, 'schedule by location');
            router.mapRoute('locations/:name', 'viewmodels/locationschedule');
            router.mapNav('rules');
            //log('Hot Towel SPA Loaded!', null, true);
            return router.activate('home');
        }

        function log(msg, data, showToast) {
            logger.log(msg, data, system.getModuleId(shell), showToast);
        }
        //#endregion
    });