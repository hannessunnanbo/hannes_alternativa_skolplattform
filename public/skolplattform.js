fetch("/meny")
   .then(response => response.text())
   .then(menyData => document.getElementById("mat").innerHTML = menyData)