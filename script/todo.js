var tabBody = document.getElementById("table-body");
var done = 0;
function getData() {
  console.log("get data clicked");
  // Step 1:create XHR object
  var xhttp = new XMLHttpRequest();
  console.log("UNSENT", xhttp.readyState); // readyState will be 0

  // Step:2 request specification
  //   xhttp.open("GET", "input.txt", true);
  //   xhttp.open("GET", "data.json", true);

  xhttp.open("GET", "https://jsonplaceholder.typicode.com/todos", true);
  console.log("OPENED", xhttp.readyState); // readyState will be 1

  // Step 4:create an event listener
  xhttp.onreadystatechange = function () {
    console.log("done", xhttp.readyState); // readyState will be
    console.log(xhttp.status);
    if (xhttp.readyState == 4 && xhttp.status == 200) {
      //  var data = this.responseText
      var jFile = this.responseText;
      test(jFile);
    }
  };
  // Step :3 sending request
  xhttp.send();
}

function test(data) {
  var jList = JSON.parse(data);
  for (var n = 0; n < jList.length; n++) {
    if (jList[n].completed == true) {
      tabBody.innerHTML += `<tr><td>${jList[n].title}</td><td><input class="form-check-input" type="checkbox" checked="true" disabled = "true"></input></td></tr>`;
    } else {
      tabBody.innerHTML += `<tr><td>${jList[n].title}</td><td><input class="form-check-input" type="checkbox" onclick="val(this)" id="box"></input></td></tr>`;
    }
  }
}
function val(c) {
  if (c.checked) {
    done++;
    console.log(done);
    displayMsg();
  } else {
    done--;
    console.log(done);
  }
}
function displayMsg() {
  let promiseFn = new Promise(function (resolve, reject) {
    if (done == 5) {
      resolve("Congrats. 5 Tasks have been Successfully Completed");
    }
  });
  promiseFn.then(function (i) {
    alert(i);
  });
}
