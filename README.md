# Window Manipulation Tasks – JavaScript (BOM & DOM)

## 📌 Overview
This project demonstrates advanced usage of the **Browser Object Model (BOM)** in JavaScript by controlling multiple browser windows.  
It includes window movement, typing effects, and scrollable advertisement windows.

The project is divided into **three main tasks**, each focusing on a specific BOM concept.

---
## 🧪 Tasks Description

### 🟢 Task 2.1 – Flying Window

#### 📌 Description
- Opens a child window
- Moves it diagonally across the screen
- When it reaches screen boundaries, it smoothly returns back to `(0,0)`
- Movement can be stopped manually

#### 🔧 Concepts Used
- `window.open()`
- `window.moveTo()`
- `setInterval()` / `clearInterval()`
- Screen boundaries (`screen.availWidth`, `screen.availHeight`)
- State tracking with variables

#### 🔑 Key Functions
```js
openWin();       // Open and start moving window
stopWin();       // Stop window movement
```
----
### 🟢 Task 2.1.1 – Typing Window

#### 📌 Description
This task opens a separate child window and displays a **typing effect (typewriter effect)**.  
Text appears character by character to simulate human typing.  

#### 🔧 Concepts Used
- DOM manipulation
- Asynchronous JavaScript using `setTimeout`
- Closures for tracking typing index
- Separation of concerns: typing logic inside child window

#### 🔑 Key Functions
```js
openWintyping();  // Open typing window
closeTypWin();    // Close typing window
```
----
### 🟢 Task 2.1.2 – Advertisement Window (Scrollable)

#### 📌 Description
This task opens an **advertisement window** that is scrollable.  
The window can display content larger than its visible size, allowing users to scroll through it.  
It simulates real-world ad popup behavior.

#### 🔧 Concepts Used
- Browser Object Model (BOM)
- `window.open()` with `scrollbars` feature
- Programmatic control of child windows (open/close)

#### 🔑 Key Functions
```js
openAdWin();     // Open advertisement window
closeAdWin();    // Close advertisement window
```

-------------------------------
