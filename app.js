var bgPro = true;
function bg() {
  var bg = document.getElementById("bg");
  if (bgPro) {
    bg.innerHTML = `<i onclick="bg()" class="material-icons">chevron_left</i>
    <button onclick="white()" id="white" value="white"></button>
    <button onclick="sky_blue()" id="sky-blue" value="sky-blue"></button>
    <button onclick="blue()" id="blue" value="blue"></button>
    <button onclick="green()" id="green" value="green"></button>
    <button onclick="pic1()" id="ph1" value="pic1"></button>
    <button onclick="pic2()" id="ph2" value="pic2"></button>
    <button onclick="pic3()" id="ph3" value="pic3"></button>
    <button onclick="pic4()" id="ph4" value="pic4"></button>`;
    bgPro = false;
  } else {
    bg.innerHTML = `<img onclick="bg()" src="./images/theme.svg" alt="">`;
    bgPro = true;
  }
}
function white() {
  var textArea = document.getElementById("textArea");
  textArea.style.backgroundImage = "none";
  textArea.style.backgroundColor = "white";
  textArea.style.color = "black";
}
function sky_blue() {
  var textArea = document.getElementById("textArea");
  textArea.style.backgroundImage = "none";
  textArea.style.backgroundColor = "skyblue";
  textArea.style.textAlign = "center";
  textArea.style.padding = "70px 0";
  textArea.style.color = "white";
}
function blue() {
  var textArea = document.getElementById("textArea");
  textArea.style.backgroundImage = "none";
  textArea.style.backgroundColor = "#1877F2";
  textArea.style.textAlign = "center";
  textArea.style.padding = "70px 0";
  textArea.style.color = "white";
}
function green() {
  var textArea = document.getElementById("textArea");
  textArea.style.backgroundImage = "none";
  textArea.style.backgroundColor = "green";
  textArea.style.textAlign = "center";
  textArea.style.padding = "70px 0";
  textArea.style.color = "white";
}
function pic1() {
  var textArea = document.getElementById("textArea");
  textArea.style.backgroundImage = "url(./images/pic1.jpg)";
  textArea.style.textAlign = "center";
  textArea.style.padding = "70px 0";
  textArea.style.color = "white";
}
function pic2() {
  var textArea = document.getElementById("textArea");
  textArea.style.backgroundImage = "url(./images/pic2.jpg)";
  textArea.style.objectFit = "cover";
  textArea.style.backgroundRepeat = "norepeat";
  textArea.style.textAlign = "center";
  textArea.style.padding = "70px 0";
  textArea.style.color = "white";
}
function pic3() {
  var textArea = document.getElementById("textArea");
  textArea.style.backgroundImage = "url(./images/pic3.jpeg)";
  textArea.style.textAlign = "center";
  textArea.style.padding = "70px 0";
  textArea.style.color = "white";
}
function pic4() {
  var textArea = document.getElementById("textArea");
  textArea.style.backgroundImage = "url(./images/pic4.jpg)";
  textArea.style.textAlign = "center";
  textArea.style.padding = "70px 0";
  textArea.style.color = "white";
}

function post() {
  var textArea = document.getElementsByTagName("textarea")[0];
  var color = textArea.style.color;
  var bgColor = textArea.style.backgroundColor;
  var bgImage = textArea.style.backgroundImage;
  var pad = textArea.style.padding;
  var text_Align = textArea.style.textAlign;
  var val = textArea.value;
  if(val != ""){

  var post1 = document.getElementById("post1");
  post1.insertAdjacentHTML("afterbegin", `<div id="post-frame" class="post-frame">
    <div class="top">
        <ul>
            <li>
                <img src="./images/profile-modified.png" alt="">
            </li>
            <li>
                <p>Abdul Basit</p>
                <button><a id="now"><a></a><i class="fa fa-globe"></i></button>
            </li>
        </ul>
        <img onclick="delet(this)" src="./images/more.svg" alt="">

    </div>
    <hr>
    <div id="middle">
        <textarea class="textarea" name="" id="textAreaMid" cols="30"
        rows="10" readonly></textarea>
    </div>
    <div class="lower">
        <hr>
        <div class="likeShareComm">
            <ul>
                <li>
                    <button onclick="change(this)">
                        <i id="change" style="font-size:24px" class="fa">&#xf087;</i>
                        <a id="Like">Like</a>
                    </button>
                </li>
                <li>
                    <button >
                        <i class="material-icons">chat_bubble_outline</i>
                        <a>Comment</a>
                    </button>
                </li>
                <li>
                    <button>
                        <i class="material-icons">reply</i>
                        <a>Share</a>
                    </button>
                </li>
            </ul>

        </div>
        <hr>
    </div>
</div>`);
  var textAreaMid = document.getElementById('textAreaMid');
  textAreaMid.innerHTML = val;
  textAreaMid.style.color = color;
  textAreaMid.style.backgroundColor = bgColor;
  textAreaMid.style.backgroundImage = bgImage;
  textAreaMid.style.padding = pad
  textAreaMid.style.textAlign = text_Align;
  // textArea.innerHTML = "";
  // textArea.style.color = "none";
  // textArea.style.backgroundColor = "none";
  // textArea.style.backgroundImage = "none";
  // textArea.style.padding = "none"
  // textArea.style.textAlign = "none";
  let createPost = document.getElementById("createPost");
  createPost.style.display = "none";
  var createPostText = document.getElementById('create-post-text');
  createPostText.innerHTML = `<textarea class="textarea" placeholder="What's on your mind, Abdul Basit?" name="" id="textArea" cols="30"
  rows="10"></textarea>`
  }
  else{
    alert("Please write some thing");
  }
}

function delet(e){
    // var post = document.getElementById('post-frame')
    // post.remove();
    e.parentNode.parentNode.remove();
}

function clic() {
  let createPost = document.getElementById("createPost");
  createPost.style.display = "block";
}

function clo() {
  let createPost = document.getElementById("createPost");
  createPost.style.display = "none";
}
var colorCH = true;
function change(e) {
  var s = (e.childNodes);
  if (s[1].style.color == 'black') {
    s[1].style.color = "#1877F2";
    s[3].style.color = "#1877F2";
    colorCH = false;
  } else {
    s[1].style.color = "black";
    s[3].style.color = "black";
    colorCH = true;
  }
}
