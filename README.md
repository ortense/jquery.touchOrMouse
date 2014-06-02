# jQuery.touchOrMouse

jQuery plugin for attach touch or mouse events according to browser support.

## use forms

Simple invocation

```javascript
$('.element').touchOrMouse(function(event){
	/* ... */
});
```

Delegate event

```javascript
$(document).touchOrMouse('.element', function(event){
	/* ... */
});
```

Configuration object
	
```javascript
var options = {touch: 'touchend'};
$('.element').touchOrMouse(options, function(event){
	/* ... */
});
```

Delegate and configuration object
	
```javascript
var options = {touch: 'touchend'};
$(document).touchOrMouse('.element', options, function(event){
	/* ... */
});
```

All parameters into an object

```javascript
$(document).touchOrMouse({
	selector: '.element',
	mouse: 'click',
	touch: 'touchend',
	handler: function(event){
		/* ... */
	}
});
```