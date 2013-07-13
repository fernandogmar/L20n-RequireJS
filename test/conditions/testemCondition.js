/**
 * testemCondition
 * Check if 'testem' appears in the hash section of the url.
 * @author @fernandogmar
 */
define(function() {
	"use strict";

	return (location.hash.indexOf("testem") > -1);
});