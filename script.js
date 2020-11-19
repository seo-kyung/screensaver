function sliderChange(val) {
    var getnumber = document.getElementById('number').value;
    // var column_number = Math.round(getnumber * 10)
    document.getElementById("container").style.gridTemplateColumns = 'repeat(' + getnumber+ ', 1fr)';

    var font_size = 1/getnumber * 5 + 10;
    var height = 1/getnumber  + 2.5;
    var paragraph = document.getElementsByClassName("caption_container")
    var i;

    for (i=0; i< paragraph.length; i++){
        paragraph[i].style.fontSize = font_size + 'px';
        paragraph[i].style.height = height +'vw';
    }
  

}


