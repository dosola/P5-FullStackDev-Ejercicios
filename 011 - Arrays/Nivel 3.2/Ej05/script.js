// *** Ej 5 - Playlist
// Tenemos un Arreglo playlist con canciones seleccionadas 
// al azar por Spotify para reproducir. Tenemos otro Arreglo 
// playlistEscuchada que tiene canciones que ya escuchamos.

// Usando .filter(), creá una nueva lista con las canciones 
// guardadas en playlist que no estén en playlistEscuchada. 
// Guardá el resultado en la Variable playlistSinEscuchar.

let playlist = [
    "Smells Like Teen Spirit",
    "Everlong",
    "Come As You Are",
    "The Pretender",
    "Heart-Shaped Box",
    "Learn to Fly",
    "Lithium",
  ];

let playlistEscuchada = ["The Pretender", "Lithium", "Come As You Are"];

let playlistSinEscuchar = playlist.filter(song=>{
    return playlistEscuchada.indexOf(song) == -1 })

console.log(playlistSinEscuchar);
