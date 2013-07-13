define({
    shim: {
        'l20n': {
            exports: 'L20n'
        }
    },
    config: {
        l20nCtx: {
            extension: "l20n",
            locale: "es",
            debug: true
        }
    },
    paths: {
        'l20n': 'libs/l20n/1.0.0beta3/l20n',
        'l20nCtx': '../src/l20nCtxPlugin'
    }
});
