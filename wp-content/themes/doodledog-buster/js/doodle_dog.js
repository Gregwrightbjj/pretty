// JavaScript Document

jQuery(document).ready(function($) {
	//hide the archive category elements on page load
    $('.widget_archive .widget-wrap ul').hide();
	$('.widget_categories .widget-wrap ul').hide();
	
	//toggle the elements when clicking the widget title
	$('.widget_archive .widget-wrap .widgettitle').click(function() {
		$(this).next().slideToggle('slow', function() {
		// Animation complete.
		});
	});
	$('.widget_categories .widget-wrap .widgettitle').click(function() {
		$(this).next().slideToggle('slow', function() {
		// Animation complete.
		});
	});
});
