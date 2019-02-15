function showMenu() {
  var y = document.getElementById("navBar");
  if (document.getElementById('mainNav')){
    var x = document.getElementById("mainNav");
    if (x.className === "mainNav") {
      x.className += " responsive";
    }else{
      x.className = "mainNav";
    }
  } else if (document.getElementById("navBar")) {
    var x = document.getElementById('navBar');
    if (x.className === "mainNav"){
      x.className += " responsive";
    }else{
      x.className = "mainNav";
    }
  }else{
    return void(0);
  }
}
