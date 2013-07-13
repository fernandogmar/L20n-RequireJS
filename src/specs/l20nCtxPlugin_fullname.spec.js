/**
 * l20nCtxPlugin.spec
 * The l20nCtxPlugin.spec module.
 * @author @fernandogmar
 */
define(["l20nCtx!locales/exampleLocale-es.l20n"], function(exampleLocaleCtx) {
	"use strict";

	describe("l20nCtxPlugin full name", function() {
		it("should returns a context ready for the action", function() {
			expect(exampleLocaleCtx.get("hi")).toBe("hola");
		});
	});
});
