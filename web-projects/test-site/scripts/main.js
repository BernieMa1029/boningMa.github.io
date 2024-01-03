// 图像切换器
let myImage = document.querySelector("img");

myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "images/fire.png") {
    myImage.setAttribute("src", "images/fire2.jpg");
  } else {
    myImage.setAttribute("src", "images/fire.png");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
// 个性化欢迎信息
function setUserName() {
    let myName = prompt("请输入你的名字。");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = "Mozilla 酷毙了，" + myName;
    }
  }
  
  // 初始化
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    let storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla 酷毙了，" + storedName;
  }
  myButton.onclick = function () {
    setUserName();
  }
  
