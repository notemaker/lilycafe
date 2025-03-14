var script_url = "https://script.google.com/macros/s/AKfycbwaROA9OlZ1oz4XL0wRZTfcHd_aYYrRmyS4BaY0DpN8Dbh3V8ootYgg4R7AmO6LL0qlCw/exec";
$(document).ready(function ($) {
    $("#google-sheet").submit(function (event) {
        $('#date, #time, #man, #name, #phone').prop("disabled", false);
        var title= $("#restitle").val();
        var date = $("#date").val();
        var time = $("#time").val();
        var man=$("#man").val();
        var name = $("#name").val();
        var phone = $("#phone").val();
        var url = script_url + "?callback=ctrlq&date=" + date + "&time=" + time + "&man=" + man + "&name=" + name + "&phone=" + phone + "&action=create";
        var request = $.ajax({
            url: url,
            type: "POST"
        });
        request.done(function (response, textStatus, jqXHR) {
            window.location.reload();
        });
        request.always(function () {
           $('#date, #time, #man, #name, #phone').prop("disabled", true);
        });
        event.preventDefault();

        // 隱藏表單
        $('#restitle').hide(); //隱藏Title
        $('#google-sheet').hide();

        // 顯示感謝訊息
        $('#thank-you-message').show();
    })
})