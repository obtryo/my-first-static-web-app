// async function callApi() {
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users = await res.json();
//     console.log(users)
//   };
  
//   callApi();


// XMLHttpRequestオブジェクトの作成
// var request = new XMLHttpRequest();

// // レスポンスが返ってきた時の処理を記述 
// request.onreadystatechange = function() {
//     // if( request.readyState === 4 && request.status === 200 ) {
//     //   //エラーを出さずに通信が完了した時の処理。
//     //   console.log( request.responseText );
//     // }
//     alert( this.responseText );
// }

// URLを開く
// request.open('POST', 'https://7778856-pytest-vscode.azurewebsites.net/api/hello/', true);
// request.setRequestHeader('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
// request.send('name=Azure');



// リクエストをURLに送信
// request.send();

// async function callApi() {
//     const url = "https://7778856-pytest-vscode.azurewebsites.net/api/hello/";
//     const params = {method : "POST", mode: 'no-cors', body : JSON.stringify({name : "Azure"})};
  
//     const response = await fetch(url, params);
//     const data = await response.json();

//     console.log(data);
// }

// callApi();

url = 'https://7778856-pytest-vscode.azurewebsites.net/api/hello/?name=Azure'

fetch(url, {
    method: 'POST'
    // mode: 'no-cors',
    // body: JSON.stringify({name : "Azure"})
}).then((response) => {
    if(!response.ok) {
        console.log('error!');
    } 
    console.log('ok!');
    return response.json();
}).then((data)  => {
    console.log(data);
}).catch((error) => {
    console.log(error);
});
