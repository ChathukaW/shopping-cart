function changeFontSize(target) {
  var size = document.getElementById("size");
  var style = window.getComputedStyle
        ? getComputedStyle(size) 
        : size.currentStyle;     
  var fontSize;

  if (style) { 
      fontSize = parseFloat(style && style.fontSize);

      if (target == document.getElementById("button1")) {
        fontSize += 5;
      } else if (target == document.getElementById("button2")) {
        fontSize -= 5;
      }
      size.style.fontSize = fontSize + "px";
  }
}


