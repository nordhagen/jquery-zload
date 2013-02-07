jquery-zload
============

Blazing fast jQuery plugin for lazy loading background images.

**Note:** This plugin is designed for performance over features. It only handles the `background-image` css property and it will wait for scrolling to stop before doing any work. For a full featured solution that also handles horizontal scrolling and img tags, check out Mika Tuupola's LazyLoad: <http://www.appelsiini.net/projects/lazyload>.

## Use

	$('.image-container').zload()

At its simplest this is all you need. Zload will detect when the user has stopped scrolling and then set the `background-image` property on any elements that are within the viewport bounds. See defaults below.

## Configuration
The `.zload()` function takes an options object as its only argument. Calling it without arguments is the same as passing these defaults:

	$('.image-container').zload({
		attribute : 'original',
		unload    : false',
		fallback  : 'none',
		delay     : 30
	});

###attribute###
The name of the data attribute attached to lazy loading elements. I.e. the default, `original` will expect the presence of an attribute named `data-original`

###unload###
Setting `unload : true` will make background images disappear whenever an element scrolls out of the viewport again (and re-appear when the element scrolls back in). Great for minimizing memory footprint. Defaults to `false`.
###fallback###
If you'd like some other default background image to show when the element is scrolled out of the viewport you can set it here, i.e. `'images/notloaded.png'`. Defaults to `'none'`.
###delay###
Lets you customize how long the pause in scrolling has to be for Zload to kick in and start applying background images. Defaults to 30 milliseconds.