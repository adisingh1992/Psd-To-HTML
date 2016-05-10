$(document).ready(function(){
    $("#title").fadeIn(3000);
    $("#sidebar").delay(2000).fadeIn(3000);
});

function cycle(){
    $(document).ready(function(){
        $("body").vegas({
            slides: [
                { src: "static/images/1.jpg" },
                { src: "static/images/2.jpg" },
                { src: "static/images/3.jpg" },
                { src: "static/images/4.jpg" }
            ]
        });
    });
}