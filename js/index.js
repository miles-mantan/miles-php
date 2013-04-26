{
	var total_loading_step = 3;
}

$(document).ready(function() {

	// Debug option.
//	$("#loading").hide();

	// Initialize all components.
	initComponents();

	// Add event listener.
	addEventListener();

	// Load datas.
	loadProject();
});

function initComponents() {
	
	// Hide the search pane.
	$("#search-pane").hide();
	
	// Finish active.
	animation(1);
}

function animation(step) {
	
	$("#bg-color").animate({
		"height": 256 * (step / total_loading_step),
		"margin-top": 128 - 256 * (step / total_loading_step)
	}, 1000, function() {
		
		if (step == total_loading_step) {
			$("#loading").fadeOut("slow");
		}
	});
}

function addEventListener() {

	// Show or hide the navigator.
	$(document).bind("mousemove", documentMouseMoveActionPerformed);

	// Show or hide the search input field.
	$("#search").click(searchButtonClickActionPerformed);
	$("#searchInputField").blur(searchInputBlurActionPerformed);

	// Next page.
	$("#corner").click(cornerClickActionPerformed);

	// Finish active.
	animation(2);
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

function cornerClickActionPerformed(event) {
	
	// Add animation.
	$(event.target).css("-webkit-animation", "page-corner 500ms");
	setTimeout(function() {

		// Reset the page corner.
		$(".project").remove(); 
		$(event.target).css("-webkit-animation", "none"); 

		// Load new datas.
		loadProject();

	}, 500);
}


function loadProject() {

	// Calculate Item margin.
	var SEC_WIDTH = $("#main-section").width();
	var SEC_HEIGHT = $("#main-section").height();
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

			// Finish active.
			animation(3);
		}
	});
}
