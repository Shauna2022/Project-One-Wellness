const $yogaButton = $('#yogaButton')
const $picture = $('#picture')
$yogaButton.on('click' , function() {
    let num = Math.floor(Math.random() * 49)
        $.ajax({
            url: 'https://lightning-yoga-api.herokuapp.com/yoga_poses'
        }).then(
            (data) => {
                let img = data.items[num].img_url
                    $picture.attr("src", img)
                console.log(img)
                $('#name').text(data.items[num].english_name)
            });
            (error) => {
                console.log('no data', error);
            }
});