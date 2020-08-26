document.getElementById("svar").value = ""
let tal1 = Math.ceil(Math.random() * 10);
let ratt = 0
let totalt =0
let tal2 = Math.ceil(Math.random() * 10);
let rattlistan = [];
let fellistan = [];

function tidenarute() {
  document.getElementById("fellista").innerText =  "dina fel svar: " +fellistan.join(", ");
  document.getElementById("rattlista").innerText =  "dina rätta svar: " +rattlistan.join(", ");
  document.getElementById("resultattext").innerText="du fick "+ ratt+"/"+totalt;
  document.getElementById("mattetal").setAttribute("class", "hidden");
  document.getElementById("resultat").setAttribute("class", "");
  document.getElementById("rattochfellista").setAttribute("class", "");


}
function andratal() {
  tal1 = Math.ceil(Math.random() * 10);
  tal2 = Math.ceil(Math.random() * 10);
  const hejmattetal= tal1 + "*" + tal2;
  document.getElementById("uppgift").innerText=hejmattetal; 
}
function visasak() {
  document.getElementById("mattetal").setAttribute("class", "");
  setTimeout(tidenarute,300000)
  document.getElementById("startknapp").setAttribute("class", "hidden");
}


function talrattare(event) {
    if (event.keyCode === 13){
        if(document.getElementById("svar").value == tal1*tal2 ) {
          rattlistan.push(tal1 + "*" + tal2);
          ratt = ratt+1
        }
        else {
          
          fellistan.push(tal1 + "*" + tal2);
        }
        andratal();
        document.getElementById("svar").value = ""
        totalt = totalt+1
    }
    

}

andratal();
document.getElementById("svar").addEventListener("keydown",talrattare);

document.getElementById("startknapp").addEventListener("click",visasak)