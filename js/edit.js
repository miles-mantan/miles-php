$(document).ready(function() {

	// Initialize all components.
	initComponents();

	// Add event listener.
	addEventListener();
});

function initComponents() {
	
	// Hide the search pane.
	$("#search-pane").hide();
}

function addEventListener() {

	// Show or hide the navigator.
	$(document).bind("mousemove", documentMouseMoveActionPerformed);

	// Show or hide the search input field.
	$("#search").click(searchButtonClickActionPerformed);
	$("#searchInputField").blur(searchInputBlurActionPerformed);
}

function documentMouseMoveActionPerformed(event) {
	
	// Show or hide the navigator.
	if (event.pageY <= 45) {
		$("#navigator").css("top", "0px");
	} else {
		$("#navigator").css("top", "-45px");
	}
}

function searchButtonClickActionPerformed(event) {
	
	// Show the search input field.
	if ($("#search-pane").is(":hidden")) {
		$("#search-pane").finish().show().animate({ "width": "200px" });
		$("#searchInputField").focus();
	}
}

function searchInputBlurActionPerformed(event) {

	// Hide the input field.
	$("#search-pane").finish().animate({ "width": "0px" }, function() { $("#search-pane").hide(); });
}
