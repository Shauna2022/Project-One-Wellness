const URL = "https://api.thenounproject.com/icons/yoga"

// let $button = $('#button');

function handleGetData() {

    $.ajax(URL).then(function(data) {
        console.log('daily yoga pose')
        // console.log(data)
        $button.icon(data.icons)
         $('content').append(`<img src="${data.icons}"/>`)
    }, function(error) {
        console.log('no yoga')
        console.log(error)
    });
}
