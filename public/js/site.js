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
		dataval = data;
		for (var i = 0; i < data.bios.length; i++){
			$("#biocontent").append("<h2>" + data.bios[i].name + "</h1><b2>");
			$("#biocontent").append("<p>" + data.bios[i].bio + "</p><b2>");
		}
	}).fail(function(error) {
		console.log(error);
	});
}

/**
	Wide modals.
**/
$(".modal-wide").on("show.bs.modal", function() {
  var height = $(window).height() - 200;
  $(this).find(".modal-body").css("max-height", height);
});

/**
	Self-explanitory.
**/
//loadEvents();

/**
	Toggle the bio modal. 
**/
$(".togglebio").click(function(e){
	loadBios();
});

/**
	Fixes the dupe bios issue.
**/
$('.modal-wide').on('hidden.bs.modal', function () {
    $("#biocontent").text("");
});

/**
	Init carousel.
**/
(function($) {
    $(function() {
        $('.jcarousel').jcarousel();

        $('.jcarousel-control-prev')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .on('jcarouselcontrol:active', function() {
                $(this).removeClass('inactive');
            })
            .on('jcarouselcontrol:inactive', function() {
                $(this).addClass('inactive');
            })
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .jcarouselPagination();
    });
})(jQuery);
