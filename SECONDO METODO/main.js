
function getAlbums() {

  $.ajax ({
   url : 'index.php',
   method : 'GET',
   success : function(data, state) {

     var success = data['success'];
     var arr = data['response'];

     if (success) {
        for (var i = 0; i < arr.length; i++) {

          var album = arr[i];

          var template = $('#album-template').html();
          var compiled = Handlebars.compile(template);
          var target = $('.cds-container');
          var albumHTML = compiled(album);

          target.append(albumHTML);

        }

      }

     else {
       console.log(error);
     }
   },
   error: function(request, state, error) {
     console.log('request' , request);
     console.log('state' , state);
     console.log('error' , error);
   }


 });
};

function selectGenre() {

 var selector = $("#genre-selector");
 selector.change(function() {
   $(".cd").show();
   var genre = selector.val();

   if (genre != " ") {

    $(".cd").each(function() {
    var cdGenre = $(this).data("genre");
    var isGenreEqual = (cdGenre == genre);
    if (!isGenreEqual) {
      $(this).hide();
      }

    });
  }
 });
};

function init() {

getAlbums();
selectGenre();
}

$( document ).ready(init);
