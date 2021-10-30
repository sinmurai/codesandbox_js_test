import "./styles.css";

const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  appendToIncompleteList(inputText);
};

// 未完了リストから削除する関数
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

// 未完了リストに追加する関数
const appendToIncompleteList = (target) => {
  // div生成
  const div = document.createElement("div");
  div.className = "list-row";
  // console.log(div);
  // liタグ生成
  const li = document.createElement("li");
  li.innerText = target;

  // ボタン追加：完了
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // 削除
    deleteFromIncompleteList(completeButton.parentNode);
    // 完了に追加する
    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;
    addTarget.textContent = null;

    //情報追加
    // liタグ生成
    const li = document.createElement("li");
    li.innerText = text;
    // 戻るボタン
    const backbutton = document.createElement("button");
    backbutton.innerText = "戻す";
    backbutton.addEventListener("click", () => {
      document
        .getElementById("complete-list")
        .removeChild(backbutton.parentNode);
      const addTarget = backbutton.parentNode;
      const text = addTarget.firstElementChild.innerText;
      appendToIncompleteList(text);
    });

    addTarget.appendChild(li);
    addTarget.appendChild(backbutton);
    document.getElementById("complete-list").appendChild(addTarget);
  });

  // ボタン追加：削除
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // 押下された削除ボタンの親タグを削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //構造化
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // 未完了リストに追加する
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());

/**
 * アロー関数
 */

// const test = (num) => {
//   return num + 5;
// };

// console.log(test(2));

// const test2 = (str = "村井") => console.log(`こんにちは${str}`);
// test2();

// const test3 = [1, 2, 3, 4, 5];
// test3.map((number, index) => console.log(`${index + 1}番目は${number}です`));

// const test3_filter = test3.filter((number) => {
//   return number % 2 === 1;
// });

// console.log(test3_filter);

// const newArr = ["村井", "真也", "奏太"];
// const test_san = newArr.map((str) => {
//   if (str === "村井") {
//     return `${str}さん`;
//   } else {
//     return str;
//   }
// });

// console.log(test_san);

// const number_test = 1300;
// const formatNum = typeof number_test === "number" ? "Yeee" : "Nooo";
// console.log(formatNum);
