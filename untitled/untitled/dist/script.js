// Muestra un mensaje simple para las opciones que aún no tienen contenido
function showMessage(message) {
  alert(message);
}

// Redirige a una nueva página para mostrar los detalles del plan de comida
function showRoutine(type) {
  if (type === 'comida') {
    window.location.href = 'plan-comida.html';
  } else if (type === 'fuerza') {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('routine-fuerza').classList.add('active');
  } else if (type === 'cardio') {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('routine-cardio').classList.add('active');
  } else if (type === 'masa') {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('plan-masa').classList.add('active');
  } else if (type === 'grasa') {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('plan-grasa').classList.add('active');
  }
}

// Oculta la rutina y vuelve a mostrar el contenido principal
function hideRoutine() {
  document.getElementById('main-content').style.display = 'block';
  document.querySelectorAll('.routine-section').forEach(section => {
    section.classList.remove('active');
  });
}

// Agrega un efecto de desplazamiento suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

import MiLista from "./MiLista";

function App() {
  return (
    <div>
      <h1>Mi Rutina</h1>
      <MiLista />
    </div>
  );
}

export default App;
