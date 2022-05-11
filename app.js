const $yogaButton = $('#yogaButton')
// console.log($yogaButton)
function handleGetData(evt) {
    evt.preventDefault();
const getYogaPose = () => {
$.ajax({
    URL:'https://lightning-yoga-api.herokuapp.com/yoga_poses'
}).then(
    (data) => {
        console.log(data);
    },
    (error) => {
        console.log('no data', error);
    }
);
}
}

$yogaButton.on('click' , function() {
    let $poseName = $('#poseName').val();
    $('#poseName').append(`<li>${URL}</li>`)
    $('ul').val('');
});

