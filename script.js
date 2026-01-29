let child;
let intervalId;

let x = 0;
let y = 0;
let speed = 4;

const winW = 300;
const winH = 200;

function openWin() {
  child = window.open(
    "./childWindow/index.html",
    "_blank",
    `width=${winW},height=${winH},left=0,top=0`,
  );

  x = 0;
  y = 0;

  intervalId = setInterval(moveWindow, 30);
}

function moveWindow() {
  if (!child || child.closed) {
    clearInterval(intervalId);
    return;
  }

  x += speed;
  y += speed;

  if (x >= screen.availWidth - winW || y >= screen.availHeight - winH) {
    smoothReturn();
    return;
  }

  child.moveTo(x, y);
}

function smoothReturn() {
  clearInterval(intervalId);

  let backInterval = setInterval(() => {
    if (x <= 0 && y <= 0) {
      clearInterval(backInterval);
      x = 0;
      y = 0;
      intervalId = setInterval(moveWindow, 30);
      return;
    }

    x -= speed;
    y -= speed;

    child.moveTo(x, y);
  }, 30);
}

// ^ Stop flying
function stopWin() {
  clearInterval(intervalId);
}
//*task 2.1.1
let typ;
function openWintyping() {
  typ=window.open(
    "./typingWindow/index.html",
    "_blank",
    `width=400,height=200,left=500,top=300`,
  )
};
function closeTypWin()
{
  typ.close();
}

//* task 2.1.2 
let Add;
function openAdWin() {
  Add=window.open(
    "./AdvWindow/index.html",
    "_blank",
    `width=400,height=200,left=500,top=300 ,scrollbars=yes`,
  );
  
}

function closeAdWin() {
  Add.window.close();
}