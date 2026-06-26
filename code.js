// by Ali Ghandali

let a;

function generate() {
  a = Math.floor(Math.random() * 5) + 1;

  document.getElementById("yon").innerHTML = "Number generated! Now guess it.";
}

function action() {
  if (a === undefined) {
    document.getElementById("yon").innerHTML = "First generate a number!";
    return;
  }

  let b = Number(document.getElementById("inp").value);

  if (b === a) {
    document.getElementById("yon").innerHTML = "🎉 It was right bro!";
  } else {
    document.getElementById("yon").innerHTML =
      "❌ Game over :( <br>The correct number was " + a;
  }

  document.getElementById("inp").value = "";

  a = undefined;
}
