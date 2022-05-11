// const URL = "https://lightning-yoga-api.herokuapp.com/yoga_poses"

// i should click a button and get a random yoga pose

const $yogaButton = $('#yogaButton')
console.log($yogaButton)

const getYogaPose = () => {
    console.log('yoga pose ready')
}

$yogaButton.on('click' , getYogaPose)
