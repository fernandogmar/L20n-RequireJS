(function(){
    'use strict';

    var options = {
        src_path: '../example',
        config_file: '../example/config',
        test_path: '../test/'
    };

    var config_for_test = {
        baseUrl: options.src_path,
        //urlArgs: 'cb=' + Math.random(),
        shim: {
            "jasmine-html": ['jasmine'],
            "testem": ['jasmine']
        },
        paths: {
            "test": options.test_path,
            "jasmine": options.test_path + 'libs/jasmine/1.3.1/jasmine',
            "jasmine-html": options.test_path + 'libs/jasmine/1.3.1/jasmine-html',
            'testem': '/testem',
            'testemCondition': options.test_path + 'conditions/testemCondition'
        },
        map: {
            '*': {
                'is': options.test_path + 'libs/require-is/31_05_2013/is'
            }
        }
    };

    if(options.config_file) {
        define([options.config_file], function(config){
            // extending configuration for testing
            extendConfig(config, config_for_test);

            return config;
        });
    } else {
        define(config_for_test);
    }

    // helpers
    function extendConfig(obj, extension){
        for(var name in extension) {

            if (extension.hasOwnProperty(name)) {
                if (obj[name] && (extension[name] instanceof Object)) {
                    extendConfig(obj[name], extension[name]);
                } else {
                    obj[name] = extension[name];
                }
            }

        }
    }

})();
