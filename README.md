This is a wellness resource to make sure that we are taking care of our mental health while we are taking this intense course.
Charles Barlett, Iyana Marquez, David Aydin, Ayla Ex, Abidur

 const url = 'https://lightning-yoga-api.herokuapp.com/yoga_poses'
 $.ajax(url).then(
         function(data){
      console.log(data.items.img_url)
   }