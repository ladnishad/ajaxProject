var ourRequest = new XMLHttpRequest();
var btn = document.getElementById('btn');

btn.addEventListener("click",function(){
  const proxyurl = "https://cors-anywhere.herokuapp.com/"; //to handle blocked by CORS policy issue
  const url = "http://aimtell.com/files/sites.json"
  ourRequest.open('GET',proxyurl + url)

  ourRequest.onload = function(){
    var ourData = JSON.parse(ourRequest.responseText)
    renderHTML(ourData)
  }
  ourRequest.send()
})

function renderHTML(data){
  var raw = document.getElementById('template').innerHTML
  var compiled = Handlebars.compile(raw)
  var generatedHTML = compiled(data)

  var container = document.getElementById('table-space')
  container.innerHTML = generatedHTML
}
