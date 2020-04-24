
function movieSearch() {
  var input = document.getElementById('searchInput');
  var filter = input.value.toLowerCase();
  var divId = document.getElementById('movie-container');
  var divClass = divId.getElementsByTagName('div');

  for (var i = 0; i < divClass.length; i++) {
    var title = divClass[i].getElementsByTagName('h2')[0];
    var textValue = title.textContent || title.innerText;
    if (textValue.toLowerCase().indexOf(filter) > -1) {
      divClass[i].style.display = "";
    } else {
      divClass[i].style.display = "none";
    }
  }

}
