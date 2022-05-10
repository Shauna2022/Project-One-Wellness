const URL = "https://api.thenounproject.com/icons/yoga"

const $button = $('#button');

function haneleGetData() {

    $.ajax(URL).then(function(data) {
        console.log('daily yoga pose')
        // console.log(data)
        $button.
    }, function(error) {
        console.log('no yoga')
        console.log(error)
    })
}
