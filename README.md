L20n-RequireJS
==============
(keywords: L20n, localization, requirejs, plugin)

A simple way of using [l20n](https://github.com/l20n/l20n.js) with [RequireJS](http://requirejs.org/). I hope it would be useful for you too, any suggestion will be welcome.

## L20nCtx Plugin

It is a plugin which donwloads a localization file and create a context object for it. And no more worries about asynchronous parsing, because this plugin will return the context when it is ready to be used.

The full API of the created context can be seen [here](https://github.com/l20n/l20n.js#the-javascript-api).


### How to use it

* We can write the full name of the file:

```javascript
define([l20nCtx!locales/exampleLocale-es.l20n], function(exampleLocaleCtx){
  exampleLocaleCtx.get("hello");
});
```

* We can write a template for the name. In that case we can specify the localization and the default extension in the RequireJS configuration (full example example/config.js):

```javascript
config: {
	l20nCtx: {
		locale: 'es',
		extension: 'l20n'
	}
}
```

so we can write something as:

```javascript
define([l20nCtx!locales/exampleLocale-{{locale}}], function(exampleLocaleCtx){
	exampleLocaleCtx.get("hello");
});
```

that makes more flexible the place where we can find the files:

```javascript
define([l20nCtx!locales/{{locale}}/exampleLocale], function(exampleLocaleCtx){
	exampleLocaleCtx.get("hello");
});
```

### Config file options

* `locale`: the locale to use to load the files (e.g. es, en-US, ...). By default 'en'.
* `extension`: the default extension of a file if none is specified. By default 'l20n'.
* `prefix`, `suffix`: used to specify the locale in the the path (e.g. {{locale}}). By default: '{{', '}}'.

(full example example/config.js)

### Requirements

Configure L20n dependency in your project as you can see in example/config


### Testing

The test can be executed with [testem](https://github.com/airportyh/testem), you need this installed ([installation](https://github.com/airportyh/testem#installation)).

If you don't have it and you don't want to use it you can open in a browser the file test.html allowing file access. For example this can be done easily from command line in:

* Chrome:
 `google-chrome -allow-file-access-from-files test/test.html`
* Chromium: 
 `chromium-browser -allow-file-access-from-files test/test.html`
