$(".to-pack-button").click(function() {
    let userInput= $(".to-pack-input").val(); 
    $(".packing-list").append ("<li> " + userInput  + "<li>"); 
    
});