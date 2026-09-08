$(document).ready(function () {
    $("#payment-form").on("submit", function () {
        $("#pageloader").fadeIn();
    });//submit
});//do
$(window).on('load', function () {
    // Animate loader off screen
    $("#pageloader").show().fadeOut();
});
$(document).ready(function () {
    $('#hideMeBack').delay(8000).fadeOut()

});
$(document).ready(function () {
    $('#hideMe').delay(8000).fadeOut()

});
$(document).ready(function () {

    $('#is_shipped').change(function () {
        $(this).closest("form").submit();
    });
});
$(document).ready(function () {
    $('.file-input').change(function () {
        var curElement = $('.image');
        console.log(curElement);
        var reader = new FileReader();

        reader.onload = function (e) {
            // get loaded data and render thumbnail.
            curElement.attr('src', e.target.result);
        };

        // read the image file as a data URL.
        reader.readAsDataURL(this.files[0]);
    });
});
function printableDiv(printableAreaDivId) {
    var printContents = document.getElementById(printableAreaDivId).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}
