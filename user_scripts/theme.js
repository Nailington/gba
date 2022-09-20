const toggleState = 1;

function themeValue(toggleState) {
    if (toggleState == 1) {
        document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
    }
    if (toggleState == 2) {
        document.documentElement.setAttribute('data-theme', 'dark');
      
      localStorage.setItem('theme', 'dark');
    }
    if (toggleState == 3) {
        document.documentElement.setAttribute('data-theme', 'pink');
      
      localStorage.setItem('theme', 'pink');
    }
    if (toggleState == 4) {
      document.documentElement.setAttribute('data-theme', 'green');
    
    localStorage.setItem('theme', 'green');
  }
}

const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;
document.documentElement.setAttribute('data-theme', currentTheme);

function searchBar() {
    // Declare variables
    const warning = document.getElementsByClassName("warning")[0];
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('search1');
    filter = input.value.toUpperCase();
    ul = document.getElementById("searchGames");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
        ul.style.display = "block";
        warning.innerHTML = '';
      } else {
        li[i].style.display = "none";
        warning.innerText += "No search Results found";
      }
     if (warning.innerHTML === "No search Results foundNo search Results found") {
        warning.innerHTML = "No search Results found";
      }
    }
    }





    var coll = document.getElementsByClassName("collapsible-theme");
    var FL113;
    
    for (FL113 = 0; FL113 < coll.length; FL113++) {
      coll[FL113].addEventListener("click", function() {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.display === "block") {
          content.style.display = "none";
        } else {
          content.style.display = "block";
        }
      });
    }