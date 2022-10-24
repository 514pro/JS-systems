


function transfer(){

  let num = document.getElementById("num").value
  let sys = document.getElementById("sys").value
  let result = document.getElementById("result")

  switch(sys){

    case "2": dectobin(); break;

case "16": dectohex(); break;

case "17": bintodec(); break;
 
 }
}



function dectobin(){

  let num = document.getElementById("num").value
  let numBin = Number(num).toString(2)
  result.value = numBin
}



function dectohex(){

  const num = document.getElementById("num").value
  const hexToDecimal = hex => parseInt(hex, 16);
  const hexNum = hexToDecimal(num);

  result.value = hexNum
}


function bintodec(){


const num = document.getElementById("num").value
const binNum = parseInt(num, 2)
alert(binNum)

}

