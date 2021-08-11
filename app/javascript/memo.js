const buildHTML = (XHR) => {
  const item = XHR.response.post;
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html;
};

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
    XHR.onload = () => {                            // レスポンスの受信に成功したときの処理を記述
      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null;
      };
      const list = document.getElementById("list"); // 新しいメモを挿入するための要素を取得する記述
      const formText = document.getElementById("content");
      list.insertAdjacentHTML("afterend", buildHTML(XHR));
      formText.value = "";
    };
  });
};

window.addEventListener('load', post);