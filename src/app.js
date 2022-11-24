window.onload = function() {
  let who = ["Miyamoto-san", "Batman", "Arthur", "Bono"];
  let what = ["disposed of", "crushed", "stole", "burnt", "ate"];
  let when = [
    "near Baker Street",
    "last year in Berlin",
    "on a whim",
    "just because"
  ];

  function excuseGenerator() {
    let sayWho = Math.floor(Math.random() * who.length);
    let sayWhat = Math.floor(Math.random() * what.length);
    let sayWhen = Math.floor(Math.random() * when.length);
    return who[sayWho] + " " + what[sayWhat] + " my homework " + when[sayWhen];
  }

  let excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseGenerator(who, what, when);
};
