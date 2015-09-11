function loadEvents() {
    $.ajax({
        url: "/ap/events",
        method: "GET"
    }).done(function (data) {
        var list = $.parseJSON(data);
        
        if (list.events.length > 0) {
            // TODO: List first five events if available.
        } else {
            // No events are currently available.
            $("#events").html("<h4><strong>No events here.</strong></h4>");
        }
    }).fail(function (error) {
        $("#events").html("<h4><strong>Error grabbing events. Please try again later.</strong></h4>");
        console.log("Error getting events.");
    });
}

loadEvents();