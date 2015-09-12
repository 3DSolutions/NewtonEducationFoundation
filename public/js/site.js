/**
	Loads in the events and puts them on the page.
**/
function loadEvents() {
    $.ajax({
        url: "/api/events",
        method: "GET"
    }).done(function (data) {
        var response = $.parseJSON(data);
        
        if (response.events.length > 0) {
            for(var i = 0; i < response.events.length; i++) {
                $("#events").append("<div class='panel-body'><div class='well well-sm' style='border: 1px solid #3498db'><h4><strong>" + response.events[i].title +"</strong></h4><p>" + response.events[i].summary +"</p></div></div>");
            }
        } else {
            // No events are currently available.
            $("#events").html("<h4><strong>No events here.</strong></h4>");
        }
    }).fail(function (error) {
        $("#events").html("<h4><strong>Error grabbing events. Please try again later.</strong></h4>");
        console.log("Error getting events.");
    });
}

/**
	Simple AJAX to load the JSON object of the bios.
**/
function loadBios() {
	$.ajax({
		url: "/api/bio",
		method: "GET"
	}).done(function(data){
		// It's 2 AM. I'm tired. I'll finish it in the morning.
		// I had the bios done already but I couldn't justify not doing it via ajax. I just have to port over the modal code to work dynamically with this JSON. 
		console.log(data);
	});
}

/**
	Self-explanitory.
**/
loadEvents();

/**
	Toggle the bio modal. 
**/
$(".togglebio").click(function(e){
	loadBios();
});
