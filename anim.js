// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "YA LLEGÓ LA PRIMAVERA", time: 0 },
  { text: "Se acabaron los jerseys", time: 3 },
  { text: "Y las chicas se liberan", time: 7 },
  { text: "Del aprisionamiento del corsé", time: 9 },
  { text: "Y puedes observar", time: 13 },
  { text: "Que hay fallas en la ley de gravedad", time: 16 },
  { text: "Cuídate del calorcito", time: 19 },
  { text: "Que te pone vacilón", time: 22 },
  { text: "Y debajo del ombligo", time: 26 },
  { text: "Te suele aparecer un dictador", time: 28 },
  { text: "Y bajo su versión", time: 32 },
  { text: "Aumenta más y más la población", time: 35.5 },
  { text: "La primavera", time: 38 },
  { text: "La sangre altera", time: 41 },
  { text: "La primavera", time: 45 },
  { text: "Te sube la presión y te acelera el corazón", time: 50 },
  { text: "La primavera", time: 53 },
  { text: "La sangre altera", time: 56 },
  { text: "La primavera", time: 60 },
  { text: "Aumenta las tensiones y las más bajas pasiones", time: 65 },
  { text: "Déjate de vitaminas", time: 68 },
  { text: "Y aprovecha la ocasión", time: 72 },
  { text: "Como bien dice Sabina", time: 76 },
  { text: "Aprieta a fondo el acelerador", time: 78 },
  { text: "Y la imaginación", time: 82 },
  { text: "La pones al servicio del colchón", time: 84.5 },
  { text: "La primavera", time: 88 },
  { text: "La sangre altera", time: 91 },
  { text: "La primavera", time: 95 },
  { text: "Te sube la presión y te acelera el corazón", time: 100 },
  { text: "La primavera", time: 103 },
  { text: "Te pone de aquella manera", time: 106 },
  { text: "La primavera", time: 110 },
  { text: "Aumenta las tensiones y las más bajas pasiones", time: 115 },
  { text: "Y la imaginación", time: 132 },
  { text: "La pones al servicio del colchón", time: 135.5 },
  { text: "La primavera", time: 138 },
  { text: "La sangre altera", time: 142 },
  { text: "La primavera", time: 145 },
  { text: "Te sube la tensión y te acelera el corazón", time: 150 },
  { text: "La primavera", time: 153.5 },
  { text: "Te pone de aquella manera", time: 156 },
  { text: "La prima Rosa", time: 160 },
  { text: "La prima Juana", time: 168 },
  { text: "Qué bien está por las mañanas", time: 171},
  { text: "La prima Berta", time: 174 },
  { text: "La primavera", time: 182 },
  { text: "La sangre altera", time: 185 },
  { text: "La primavera", time: 189 },
  { text: "LA PRIMAVERA", time: 197 },
];

// Animar las letras
function updateLyrics() {
  var time = audio.currentTime; // No redondeamos los segundos para mayor precisión
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 2 // Utiliza márgenes pequeños
  );

  if (currentLine) {
    lyrics.innerHTML = currentLine.text;
    lyrics.style.transition = "opacity 0.5s ease-in-out"; // Ajuste suave para transiciones
    lyrics.style.opacity = 1; // Aparece suavemente
  } else {
    lyrics.style.opacity = 0; // Se oculta suavemente cuando no hay letra
  }
}

// Usar 'timeupdate' para mayor precisión
audio.addEventListener('timeupdate', updateLyrics);
