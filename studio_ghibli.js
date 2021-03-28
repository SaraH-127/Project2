function getFilms() {
    $.get(`https://ghibliapi.herokuapp.com/films`, function(data){
        $("#data").empty();
        for(var x=0; x<data.length; x++) {
            console.log(data)
            var info = "";
            info += `<h3>Title: ${data[x].title},  ${data[x].release_date}</h3>`;
            info += `<h4>Original Title: ${data[x].original_title}(${data[x].original_title_romanised})</h4>`;
            info += `<h5>Description: ${data[x].description}</h5>`;
            info += "<hr>";
            $("#data").append(info);
        }
    });
}
function getPeople() {
    $.get(`https://ghibliapi.herokuapp.com/people`, function(data){
        $("#data").empty();
        for(var x=0; x<data.length; x++) {
            console.log(data)
            var info = "";
            info += `<h3>Name: ${data[x].name}</h3>`;
            info += `<h4>Gender: ${data[x].gender}, ${data[x].age}</h4>`;
            info += `<h5>Features: ${data[x].eye_color} Eyes, ${data[x].hair_color} Hair</h5>`;
            info += "<hr>";
            $("#data").append(info);
        }
    });
}
function getVehicles() {
    $.get(`https://ghibliapi.herokuapp.com/vehicles`, function(data){
        $("#data").empty();
        for(var x=0; x<data.length; x++) {
            console.log(data)
            var info = "";
            info += `<h3>Name: ${data[x].name}</h3>`;
            info += `<h5>Class: ${data[x].vehicle_class} - ${data[x].description}</h5>`;
            info += "<hr>";
            $("#data").append(info);
        }
    });
}
$(document).ready(function(){
    var selectTopic = "";
    $("#topic").change(function(){
        console.log("Yes it works!!");
        var selectedTopic = $(this).children("option:selected").val();
        if(selectedTopic === "films"){
            getFilms();
        } else if (selectedTopic === "people"){
            getPeople();
        } else {
            getVehicles();
        }
    });
});