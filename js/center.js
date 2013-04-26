$(document).ready(function() {

	// Initialize all components.
	initComponents();

	// Add event listener.
	addEventListener();

	// Load projects.
	loadProject();
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

	// Enter the display page.
	$(document).on("click", ".project", projectClickActionPerformed);
}

function documentMouseMoveActionPerformed(event) {
	
	// Show or hide the navigator.
	if (event.pageY <= 45) {
		$("#navigator").css("top", "0px");
	} else {
		$("#navigator").css("top", "-45px");
	}

	if (event.pageY >= $(window).height() - 80) {
		$("#friends-section").css("bottom", "0px");
	} else {
		$("#friends-section").css("bottom", "-80px");
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

function projectClickActionPerformed(event) {
	window.location.href = "display.php";
}

function loadProject() {

	// Calculate Item margin.
	var SEC_HEIGHT = $("#main-section").height() - $(".user-info").height() - $(".title").height() - 10;
	var SEC_WIDTH = $("#projects").width();
	var column = parseInt(SEC_WIDTH / 220);
	var row = parseInt(SEC_HEIGHT / 220);
	var width = SEC_WIDTH / column;
	var height = SEC_HEIGHT / row;

	$.ajax({
		"url":	"project.php",
		"data":	"count=" + row * column,
		"dataType":	"html",
		"type":	"get",
		success:	function(data) {
			$("#main-section").append(data);
			$(".project").css("width", width - 2).css("height", height - 2);
			$(".project:first-child").css("border-top-left-radius", "10px");
			$(".project:eq(" + (column - 1) + ")").css("border-top-right-radius", "10px");
			$(".project:eq(" + ((row - 1) * column) + ")").css("border-bottom-left-radius", "10px");
			$(".project:eq(" + (row * column - 1) + ")").css("border-bottom-right-radius", "10px");
		}
	});
}
