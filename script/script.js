var docSelect = document.getElementById("doc_select");
function UserAction() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
         if (this.readyState == 4 && this.status == 200) {
             alert(this.responseText);
         }
    };
    xhttp.withCredentials = true;
    xhttp.open("GET", "http://localhost:60463/api/DocScanner/DocumentTypes", true);
    xhttp.setRequestHeader("Access-Control-Allow-Origin", "https://localhost:60463");
    xhttp.send();
}

UserAction();

// const myHeaders = new Headers();

// const myInit = {
//   method: 'GET',
//   headers: myHeaders,
//   mode: 'no-cors',
//   cache: 'default'
// };
// async function req(){
// const myRequest = new Request('http://localhost:60463/api/DocScanner/DocumentTypes', myInit);
// const response = await fetch(myRequest);
// console.log(JSON.stringify(response));
// }
// req();
