//jquery hover
$(document).ready(function(){
    $('.glow').hover(
    //trigger when mouse hovers
        function(){
            $(this).animate({
                marginTop: "-=1%",
            },200);
        },
        //trigger when mouse leaves
        function(){
            $(this).animate({
                marginTop: "0%"
            },200);
        }
    );
});

//messages from animals
function revealMessage(){
    document.getElementById("hiddenMessage").style.display="block";
}