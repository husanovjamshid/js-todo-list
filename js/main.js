var elForm = document.querySelector(".js-form");
var elInput = document.querySelector(".js-input");
var elRecord = document.querySelector(".js-record");
var elSpinner = document.querySelector(".js-spinner");
var elSend = document.querySelector(".js-send");
var elList = document.querySelector(".js-list");

var newArr = [];

elForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  elList.innerHTML = "";

  if(elInput.value == '') {
    alert('Biron nima kriting.')
    return;
  }
  
  var obj = {
    id: newArr.length + 1,
    title: elInput.value,
  };
  newArr.push(obj);
  for (var item of newArr) {
    var lists = document.createElement("li");
    lists.setAttribute("class", "list-group-item");
    
    lists.textContent = `${item.id}. ${item.title}`; 

    elList.appendChild(lists);
  }

  elInput.value = "";
});

// elRecord.addEventListener("click", function () {
//   elSpinner.classList.remove("d-none");
// });

// var voice = new webkitSpeechRecognition();

// elRecord.addEventListener("click", function () {
//   voice.start();
// });
// console.log(voice);
// var d = voice.results[0][0].transcript;
// console.log(d);
