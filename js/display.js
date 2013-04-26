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

	// Left section.
	$("#left-section ol figcaption").click(figcaptionClickActionPerformed);
	
	// Open edit page.
	$("#edit").click(editClickActionPerformed);
}

function documentMouseMoveActionPerformed(event) {
	
	// Show or hide the navigator.
	if (event.pageY <= 45) {
		$("#navigator").css("top", "0px");
	} else {
		$("#navigator").css("top", "-45px");
	}

	if (event.pageX <= 120) {
		$("#left-section").css("left", "0px");
	} else {
		$("#left-section").css("left", "-120px");
	}

	if (event.pageX >= $(window).width() - 120) {
		$("#right-section").css("right", "0px");
	} else {
		$("#right-section").css("right", "-120px");
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

function figcaptionClickActionPerformed(event) {
	$(event.target).next().toggle("fast");
}

function editClickActionPerformed(event) {
	window.location.href = "edit.php";
}
