(function ($, window) {
	/**
	 * jQuery plugin for attach touch or mouse events according to browser support.
	 * @param {string} [selector] - query selector
	 * @param {object} [options] - configuration object
	 * @param {function} handler - callback function
	 * @return {nodeList} "jQuery node list"
	 */
	var pluginName = 'touchOrMouse',
		plugin = function () { //I need rest parameters :'(
			var selector,
				handler,
				options,
				evtType;

			if ('function' === typeof arguments[0]) { // .touchOrMouse(handler)
				handler = arguments[0];
			}
			else if ('function' === typeof arguments[1]){
				handler  = arguments[1];	
				
				if ('string' === typeof arguments[0]) { // .touchOrMouse(selector, handler)
					selector = arguments[0];
				}
				else { // .touchOrMouse(options, handler)
					options  = arguments[0]; 
				}
			}
			else if ('function' === typeof arguments[2]) { // .touchOrMouse(selector, options, handler)
				selector = arguments[0];
				options  = arguments[1];
				handler  = arguments[2];
			}
			else if('object' === typeof arguments[0]){ // .touchOrMouse(options)
				options  = arguments[0];
				handler  = options.handler;
				selector = options.selector;
			}

			if (typeof handler !== 'function') {
				throw new TypeError('handler must be a function');
			}

			if (options && 'object' !== typeof options) {
				throw new TypeError('options must be a object');
			}

			if (selector && 'string' !== typeof selector ) {
				throw new TypeError('selector must be a string');
			}

			options = $.extend({mouse: 'mousedown', touch: 'touchstart'}, options); // default event types mousedown and touchstart
			evtType = 'ontouchstart' in window ? options.touch : options.mouse; // have touch support?
			
			return this.each(function(index, element){
				if(selector){
					$(element).on(evtType, selector, handler);
				}
				else{
					$(element).on(evtType, handler);
				}
			});

		};	
	
	$.fn[pluginName] = plugin;
}(jQuery, window));