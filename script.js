const songs = [
  { id: 1, nombre: "Ya Supérame", categoria: "Regional Mexicano", descripcion: "Un tema popular de Grupo Firme que habla sobre superar una relación.", audio: "a.mp3" },
  { id: 2, nombre: "El Tóxico", categoria: "Regional Mexicano", descripcion: "Canción que narra una relación complicada llena de emociones intensas.", audio: "b.mp3" },
  { id: 3, nombre: "Devuélveme a Mi Chica", categoria: "Pop-Rock", descripcion: "Un clásico del rock en español que habla de una ruptura amorosa.", audio: "c.mp3" },
  { id: 4, nombre: "Te Quiero", categoria: "Pop-Rock", descripcion: "Una canción de amor llena de energía y nostalgia.", audio: "d.mp3" },
  { id: 5, nombre: "Es épico", categoria: "Hip-Hop", descripcion: "Un himno del rap consciente, abordando temas profundos y sociales.", audio: "e.mp3" },
  { id: 6, nombre: "Pensando en Ti", categoria: "Hip-Hop", descripcion: "Canción que combina poesía con crítica social y melancolía.", audio: "f.mp3" },
  { id: 7, nombre: "Hips Don't Lie", categoria: "Pop", descripcion: "Uno de los mayores éxitos de Shakira, con un ritmo contagiante.", audio: "g.mp3" },
  { id: 8, nombre: "Waka Waka", categoria: "Pop", descripcion: "La canción oficial del Mundial de Fútbol 2010, llena de energía positiva.", audio: "h.mp3" },
  { id: 9, nombre: "No Es El Primero", categoria: "Regional Mexicano", descripcion: "Una canción que habla de la vida de los hombres de campo y sus emociones.", audio: "i.mp3" },
  { id: 10, nombre: "Soy El Único", categoria: "Regional Mexicano", descripcion: "Canción que se presenta como un manifiesto de estilo de vida único y singular.", audio: "j.mp3" },
  { id: 11, nombre: "Latinoamérica", categoria: "Reggaetón", descripcion: "Un himno a la identidad latinoamericana, con un mensaje de unidad.", audio: "k.mp3" },
  { id: 12, nombre: "El Hormiguero", categoria: "Reggaetón", descripcion: "Canción que mezcla humor y crítica social, característico de Calle 13.", audio: "k.mp3" },
  { id: 13, nombre: "Me Gustas", categoria: "Pop", descripcion: "Canción que habla sobre el amor y la atracción juvenil.", audio: "l.mp3" },
  { id: 14, nombre: "Otra Vez", categoria: "Pop", descripcion: "Un tema romántico sobre la búsqueda del amor verdadero.", audio: "m.mp3" },
  { id: 15, nombre: "Todo Me Gusta de Ti", categoria: "Rock", descripcion: "Canción con una mezcla de romance y rock clásico.", audio: "n.mp3" },
  { id: 16, nombre: "Solo Tú", categoria: "Rock", descripcion: "Una balada romántica que se convirtió en todo un éxito en su época.", audio: "o.mp3" }
];

// Mostrar las canciones
function displaySongs(songs) {
  const songList = document.getElementById("song-list");
  songList.innerHTML = ""; // Limpiar la lista de canciones antes de mostrar

  songs.forEach(song => {
    const songElement = document.createElement("div");
    songElement.classList.add("song-item");

    // Contenido HTML para cada canción
    songElement.innerHTML = `
      <div class="song-title">${song.nombre}</div>
      <div class="song-desc">${song.descripcion}</div>
      <button class="play-button" data-audio="${song.audio}">Reproducir</button>
      <div class="song-player" id="player-${song.id}" style="display:none;">
        <audio controls>
          <source src="${song.audio}" type="audio/mp3">
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>
    `;

    songList.appendChild(songElement);
  });

  // Agregar funcionalidad para el botón "Reproducir"
  const buttons = document.querySelectorAll(".play-button");
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      const playerDiv = button.nextElementSibling; // El contenedor del reproductor
      // Alternar la visibilidad del reproductor
      if (playerDiv.style.display === "none" || playerDiv.style.display === "") {
        playerDiv.style.display = "block";  // Mostrar el reproductor
      } else {
        playerDiv.style.display = "none";   // Ocultar el reproductor
      }
    });
  });
}

// Filtro por categoría
const categories = document.querySelectorAll(".category");
categories.forEach(category => {
  category.addEventListener("click", () => {
    const selectedCategory = category.innerText;
    const filteredSongs = songs.filter(song => song.categoria === selectedCategory);
    displaySongs(filteredSongs);
  });
});

// Búsqueda de canciones
document.getElementById("search-bar").addEventListener("input", function() {
  const searchTerm = this.value.toLowerCase();
  const filteredSongs = songs.filter(song => song.nombre.toLowerCase().includes(searchTerm));
  displaySongs(filteredSongs);
});

// Mostrar todas las canciones al inicio
displaySongs(songs);
