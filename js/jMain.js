$(function() {
	// initialize menu
	$( "#menu" ).buttonset();
	$( "#menu" ).ptMenu();

	// initialize option bar
	$( '#btn1' ).button({
		text: false,
		icons: {
			primary: "ui-icon-circle-minus"
		}
	}).click( function() {
		var options;
		if ( $( this ).text() === 'btn2-plus' ) {
			options = {
				label: "btn2-minus",
				icons: {
					primary: "ui-icon-circle-minus"
				}
			};
		} else {
			options = {
				label: "btn2-plus",
				icons: {
					primary: "ui-icon-circle-plus"
				}
			};
		}
		$( this ).button( "option", options );
	});
	$( '#btn2' ).button({
		text: false,
		icons: {
			primary: "ui-icon-circle-zoomin"
		}
	});
	$( '#btn3' ).button({
		text: false,
		icons: {
			primary: "ui-icon-circle-close"
		}
	});
	$( '#btn4' ).button({
		text: false,
		icons: {
			primary: "ui-icon-circle-check"
		}
	});

	// initislize checkbox
	$( '#checkbox1' ).button();

	// initialize radio button group
	$( '#radiogroup' ).buttonset();

	$( '#btn5' ).button({
		text: false,
		icons: {
			primary: "ui-icon-gear"
		}
	});
	$( '#btn6' ).button({
		text: false,
		icons: {
			primary: "ui-icon-pencil"
		}
	});
	$( '#btn7' ).button({
		text: false,
		icons: {
			primary: "ui-icon-tag"
		}
	});
	$( '#btn8' ).button({
		text: false,
		icons: {
			primary: "ui-icon-image"
		}
	});
	$( '#btn9' ).button({
		text: false,
		icons: {
			primary: "ui-icon-flag"
		}
	});
	$( '#btn10' ).button({
		text: false,
		icons: {
			primary: "ui-icon-star"
		}
	});

	// initialize draggable toolbar
	$( '#optionbar' ).draggable();
	$( '#toolbar' ).draggable();

	// initialize draggable inspector
	$( '#inspector-panel' ).draggable();
});
