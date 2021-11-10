let tela = document.getElementById("tela");


let cxt = tela.getConttext ("2d");
cxt.moveTo(0,0);
cxt.lineTo(250, 250);
cxt.stroke();
cxt.lineTo(500, 0);
cxt.stroke();