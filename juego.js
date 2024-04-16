function replyYes() {
    alert("¡Te amo!");
  }

  function moveNo() {
    var button = document.getElementById("no");
    var newX = Math.random() * (window.innerWidth - button.offsetWidth);
    var newY = Math.random() * (window.innerHeight - button.offsetHeight);
    button.style.left = newX + "px";
    button.style.top = newY + "px";
  }