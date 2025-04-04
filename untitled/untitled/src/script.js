// Muestra un mensaje simple para las opciones que aún no tienen contenido
function showMessage(message) {
  alert("Seleccionaste: " + message);
}

// Muestra la rutina de fuerza y oculta el contenido principal
function showRoutine(type) {
  if (type === 'fuerza') {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('routine').style.display = 'block';
  }
}

// Oculta la rutina y vuelve a mostrar el contenido principal
function hideRoutine() {
  document.getElementById('routine').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}
