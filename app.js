// const apiYoga = "https://lightning-yoga-api.herokuapp.com/yoga_poses"

// i should click a button and get a random yoga pose



const $yogaButton = $('#yogaButton')
// console.log($yogaButton)

const getYogaPose = () => {
$.ajax({
    url:'https://lightning-yoga-api.herokuapp.com/yoga_poses'
}).then(
    (data) => {
        console.log(data);
    },
    (error) => {
        console.log('no data', error);
    }
);

}

$yogaButton.on('click' , getYogaPose)
