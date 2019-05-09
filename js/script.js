$(document).ready(function(){

    var apiBase = 'https://jsonplaceholder.typicode.com/photos/';


    $('.btn').on('click', function(){

    axios.get(apiBase).then(function(response){

        console.log(response);

                var id = $(this).data('id');
                //var url = apiBase + id;
                    
                var title = response.data.title;
                var url = response.data.url;
                var thumbnailUrl = response.data.thumbnailUrl;


                        
                var $title = $('<h2>').html(title);
                var $url = $('<h3>').html(url);
                var $thumbnailUrl = $('<h4>').html(thumbnailUrl);
                $('#task').html(  [$title]);        
        });

     });

                
    });



