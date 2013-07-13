/**
 * l20nCtxPlugin.spec
 * The l20nCtxPlugin.spec module.
 * @author @fernandogmar
 */
define(["l20nCtx!locales/exampleLocale-{{locale}}"], function(exampleLocaleCtx) {
	"use strict";

	describe("l20nCtxPlugin with template for the name", function() {
		it("should returns a context ready for the action", function() {
			expect(exampleLocaleCtx.get("hi")).toBe("hello");
		});
	});
});