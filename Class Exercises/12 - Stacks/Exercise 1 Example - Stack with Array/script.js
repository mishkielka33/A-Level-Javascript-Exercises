// =============================
// Stack implemented with an array (manual push/pop)
// =============================

// --- Stack setup ---
const STACK_LIMIT = 10; // Maximum stack size
const stack = [];
let topIndex = -1; // Index of the top element

function push(value) {
// --- Push operation ---
  if (topIndex >= STACK_LIMIT - 1) {
    // Stack is full
    return -1;
  } else {
    topIndex = topIndex + 1;
    stack[topIndex] = value;
    return topIndex;
  }
}

function pop() {
// --- Pop operation ---
  if (topIndex === -1) {
    // Stack is empty
    return -1;
  } else {
    var popped = stack[topIndex];
    stack[topIndex] = undefined;
    topIndex = topIndex - 1;
    return popped;
  }
}

function peek() {
// --- Peek operation ---
  if (topIndex >= 0) {
    return stack[topIndex];
  } else {
    return -1;
  }
}

function clear() {
// --- Clear operation ---
  var i = 0;
  while (i <= topIndex) {
    stack[i] = undefined;
    i = i + 1;
  }
  topIndex = -1;
}

function updateOutput() {
// --- Display stack contents ---
  var contents = [];
  var i = 0;
  while (i <= topIndex) {
    contents.push(stack[i]);
    i = i + 1;
  }
  var out = "Stack contents (top at right): [" + contents.join(", ") + "]\n";
  document.getElementById("output").innerText = out;
}

document.getElementById("btnPush").onclick = function() {
// --- Push button handler ---
  var value = document.getElementById("value").value;
  if (value === "") {
    return;
  }
  var result = push(value);
  updateOutput();
  if (result === -1) {
    document.getElementById("output").innerText += "\nStack is full. Cannot push.";
  }
};

document.getElementById("btnPop").onclick = function() {
// --- Pop button handler ---
  var popped = pop();
  updateOutput();
  if (popped === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Cannot pop.";
  } else {
    document.getElementById("output").innerText += "\nPopped: " + popped;
  }
};

document.getElementById("btnPeek").onclick = function() {
// --- Peek button handler ---
  var topValue = peek();
  updateOutput();
  if (topValue === -1) {
    document.getElementById("output").innerText += "\nStack is empty. Nothing to peek.";
  } else {
    document.getElementById("output").innerText += "\nTop: " + topValue;
  }
};

document.getElementById("btnClear").onclick = function() {
// --- Clear button handler ---
  clear();
  updateOutput();
};

updateOutput();
