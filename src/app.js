window.onload = function() {
  let who = ["Paco Martínez Soria", "Ramontxu", "Chavelo", "Paul Anka"];
  let what = ["se comió", "aplastó", "robó", "rompió", "vilipendió"];
  let when = [
    "al salir a silbar a los pájaros",
    "al dormir",
    "al retarme a un duelo",
    "al comerse un helado"
  ];

  function generadorExcusas() {
    console.log(Math.floor(Math.random() * who.lenght));
  }
};
