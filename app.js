const $yogaButton = $('#yogaButton')
// console.log($yogaButton)
function handleGetData(evt) {
    evt.preventDefault();
        $.ajax({
            URL: 'https://lightning-yoga-api.herokuapp.com/yoga_poses'
        }).then(
            (data) => {
                data.items.img_url;
                console.log(data);
            },
            (error) => {
                console.log('no data', error);
            }
        );
}

$yogaButton.on('click' , function() {
    let $poseName = $('#poseName').val();
    $('#poseName').append(`<li>${data.items.img_url}</li>`)
    $('ul').val('');
});

// handleGetData(evt)
// Charles Barlett
// const url = 'https://lightning-yoga-api.herokuapp.com/yoga_poses'
// $.ajax(url).then(
//     function(data){
//     console.log(data.items[1].img_url)
//     }
// )