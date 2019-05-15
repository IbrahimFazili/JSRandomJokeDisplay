$("#button").click(function(){
  $.getJSON("https://sv443.net/jokeapi/category/Any?format=json", function(data){
    console.log(data)
    if (data.type === "single"){
      $("#thejoke").text(data.joke)
    }
    else{
      $("#thejoke").text(data.setup + '\n ' + data.delivery)
    }
  })
})

$("#dark").click(function(){
  $.getJSON("https://sv443.net/jokeapi/category/Dark?format=json", function(data){
    console.log(data)
    if (data.type === "single"){
      $("#darkjoke").text(data.joke)
    }
    else{
      $("#darkjoke").text(data.setup + '\n ' + data.delivery)
    }
  })
})