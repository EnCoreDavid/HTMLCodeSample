$("ul").on("click", "li",function () {
   $(this).toggleClass("completed");
});

$("ul").on("click", "span",function(event) {
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

$("input[type='text']").on("keypress", function(event){
    if(event.which === 13) {
        var todoText = $(this).val();
        // create a new li
        $("ul").append("<li>"+"<span><i class='fa fa-trash' aria-hidden='true'></i></span> "+ todoText+"</li>")
    }
});

$(".fa-plus-square").click(function(){
    $("input[type='text']").fadeToggle();
})