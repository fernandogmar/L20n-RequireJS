
require(["config", "specs"], function(config, specs){
    requirejs.config(config);
    require(["jasmine", "jasmine-html", "is!testemCondition?testem"].concat(specs), function(){

        var jasmineEnv = jasmine.getEnv();
        var htmlReporter = new jasmine.HtmlReporter();

        jasmineEnv.addReporter(htmlReporter);
        jasmineEnv.execute();

    });
});