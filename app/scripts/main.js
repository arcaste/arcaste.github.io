function toggleFunction(id) {
  var x = document.getElementById('AccContent' + id);
  var y = document.getElementById('AccIcon' + id);
  if (x.className.indexOf('w3-show') == -1) {
    x.className += ' w3-show';
    $('html, body').animate({
      scrollTop: $('#Acc' + id).offset().top
    }, 700);
    y.className = y.className.replace(' fa-arrow-down', ' fa-arrow-up');
  } else {
    x.className = x.className.replace(' w3-show', '');
    y.className = y.className.replace(' fa-arrow-up', ' fa-arrow-down');
  }
}

function toggleSidePanel() {
  var x = document.getElementById('SidePanelContent');
  var y = document.getElementById('SidePanelIcon');
  if (x.className.indexOf('w3-show') == -1) {
    x.className += ' w3-show';
    $('html, body').animate({
      scrollTop: $('#SidePanel').offset().top
    }, 700);
    y.className = y.className.replace(' fa-arrow-down', ' fa-arrow-up');
    moveBars();
  } else {
    x.className = x.className.replace(' w3-show', '');
    y.className = y.className.replace(' fa-arrow-up', ' fa-arrow-down');
  }
}

function moveBars() {
    var javaBar = document.getElementById("javaBar");
    var webDevBar = document.getElementById("webDevBar");
    var phpBar = document.getElementById("phpBar");
    var devOpsBar = document.getElementById("devOpsBar");
    var itBar = document.getElementById("itBar");
    var enBar = document.getElementById("enBar");
    var frBar = document.getElementById("frBar");
    var deBar = document.getElementById("deBar");

    var width = 1;

    var javaMax = 90;
    var javaWidth = 1;
    var phpMax = 70;
    var phpWidth = 1;
    var devOpsMax = 60;
    var devOpsWidth = 1;
    var webDevMax = 80;
    var webDevWidth = 1;
    var itMax = 100;
    var itWidth = 1;
    var enMax = 85;
    var enWidth = 1;
    var frMax = 70;
    var frWidth = 1;
    var deMax = 40;
    var deWidth = 1;

    var id = setInterval(frame, 10);
    function frame() {
        if (width > 100) {
            clearInterval(id);
        } else {
            width++;
            if(itWidth < itMax){
              itWidth++;
              itBar.style.width = width + '%';
            }
            if(enWidth < enMax){
              enWidth++;
              enBar.style.width = width + '%';
            }
            if(frWidth < frMax){
              frWidth++;
              frBar.style.width = width + '%';
            }
            if(deWidth < deMax){
              deWidth++;
              deBar.style.width = width + '%';
            }
            if(javaWidth < javaMax){
              javaWidth++;
              javaBar.style.width = width + '%';
            }
            if(webDevWidth < webDevMax){
              webDevWidth++;
              webDevBar.style.width = width + '%';
            }
            if(phpWidth < phpMax){
              phpWidth++;
              phpBar.style.width = width + '%';
            }
            if(devOpsWidth < devOpsMax){
              devOpsWidth++;
              devOpsBar.style.width = width + '%';
            }
        }
    }
}
