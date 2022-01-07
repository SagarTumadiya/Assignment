var i=0,j=0,l=0,m=1;
$(".add1").click(function (){
  i++;

  var r= $('<input ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)"  type="button" id="num1" draggable="true" class="newbutton btn btn-outline-dark" />');

          $(".content1").after(r);
          $("#num1").prop('value','Card '+m);
          $(".p1").text(i);
          m++;
});
$(".add2").click(function (){
  j++;
  var r= $('<input ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)" type="button" id="num2" draggable="true" class="newbutton btn btn-outline-dark" />');
          $(".content2").after(r);
            $("#num2").prop('value','Card '+m);
            $(".p2").text(j);
            m++;
});
$(".add3").click(function (){
  l++;
  var r= $('<input ondragstart="drag(event)"  ondrop="drop(event)" ondragover="allowDrop(event)" type="button" id="num3"  draggable="true" class="newbutton btn btn-outline-dark" value="new button"/>');
          $(".content3").after(r);
          $("#num3").prop('value','Card '+m);
            $(".p3").text(l);
            m++;
});
function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.before(document.getElementById(data));

}
