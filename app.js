const $yogaButton = $('#yogaButton')
const $picture = $('#picture')
// console.log($yogaButton)
$yogaButton.on('click' , function() {
    // alert('jQuery works')
    let num = Math.floor(Math.random() * 49)
        $.ajax({
            url: 'https://lightning-yoga-api.herokuapp.com/yoga_poses'
        }).then(
            (data) => {
                //    $picture.img_url(data.items.img_url);
                let img = data.items[num].img_url
                    $picture.attr("src", img)
                console.log(img)
                $('#name').text(data.items[num].english_name)
                    // let $poseName = $('#name').val();
                    // $('p').val('');
            });
            (error) => {
                console.log('no data', error);
            }
});
//  handleGetData(evt)

// Charles Barlett, Iyana Marquez, David Aydin
// const url = 'https://lightning-yoga-api.herokuapp.com/yoga_poses'
// $.ajax(url).then(
//     function(data){
//     console.log(data.items.img_url)
//     }
// )