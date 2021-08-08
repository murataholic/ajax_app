function post (){
  const submit = document.getElementById("submit"); // 投稿ボタンの要素を取得する記述
  submit.addEventListener("click", (e) => {         // 投稿ボタンをクリックしたときにイベント発火する記述
    e.preventDefault();                             // デフォルトで設定されているイベント（ブラウザからのリクエスト）をキャンセルするための記述
    const form = document.getElementById("form");   // フォームの要素を取得する記述
    const formData = new FormData(form);            // フォームに入力された値を取得するための記述
    const XHR = new XMLHttpRequest();               // 非同期通信のためのリクエストを行う記述
    XHR.open("POST", "/posts", true);               // リクエストの内容を指定する記述
    XHR.responseType = "json";                      // レスポンスの形式を指定する記述
    XHR.send(formData);                             // フォームの内容をコントローラーへ送信するための記述
  });
};

window.addEventListener('load', post);