$(document).ready(function() {
	$.ajax({
		url : "http://api.geonames.org/citiesJSON?north=44.1&south=-9.9&east=-22.4&west=55.2&lang=de&username=demo",
		type : "GET",
		success : function(response) {
			var responseArray = response.geonames;

			for (var i = 0; i < responseArray.length; i++) {
				$("#content").append("Naziv grada: " + responseArray[i].toponymName + "<br>");
				$("#content").append("Originalni naziv grada: " + responseArray[i].name + "<br>");
				$("#content").append("Vrsta naselja: " + responseArray[i].fclName + "<br>");
				$("#content").append("Broj stanovnika: " + responseArray[i].population + "<br>");
				$("#content").append("<br>");
			}
		}
	});
});