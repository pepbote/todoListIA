document.addEventListener('DOMContentLoaded', function() {
    // Elements HTML
    const novaTascaInput = document.getElementById('novaTascaInput');
    const filtrarInput = document.getElementById('filtrarInput');
    const llistaTasques = document.getElementById('llistaTasques');
  
    // Event listener per afegir noves tasques
    novaTascaInput.addEventListener('keypress', function(event) {
      if (event.key === 'Enter' && novaTascaInput.value.trim() !== '') {
        afegirTasca(novaTascaInput.value.trim());
        novaTascaInput.value = '';
      }
    });
  
    // Event listener per filtrar tasques
    filtrarInput.addEventListener('input', function() {
      filtrarTasques();
    });
  
    // Funció per afegir tasca a la llista
    function afegirTasca(text) {
      const novaTasca = document.createElement('li');
      novaTasca.innerHTML = `
        <input type="checkbox" class="tascaCheckbox">
        <span>${text}</span>
        <button class="eliminarBtn">Eliminar</button>
      `;
      llistaTasques.appendChild(novaTasca);
  
      // Event listener per marcar tasca com a finalitzada
      const tascaCheckbox = novaTasca.querySelector('.tascaCheckbox');
      tascaCheckbox.addEventListener('change', function() {
        if (tascaCheckbox.checked) {
          novaTasca.style.textDecoration = 'line-through';
          novaTasca.style.color = 'grey';
        } else {
          novaTasca.style.textDecoration = 'none';
          novaTasca.style.color = 'black';
        }
      });
  
      // Event listener per eliminar tasca
      const eliminarBtn = novaTasca.querySelector('.eliminarBtn');
      eliminarBtn.addEventListener('click', function() {
        llistaTasques.removeChild(novaTasca);
      });
    }
  
    // Funció per filtrar tasques
    function filtrarTasques() {
      const filtre = filtrarInput.value.toLowerCase();
      const tasques = llistaTasques.getElementsByTagName('li');
  
      for (const tasca of tasques) {
        const textTasca = tasca.innerText.toLowerCase();
        if (textTasca.includes(filtre)) {
          tasca.style.display = 'block';
        } else {
          tasca.style.display = 'none';
        }
      }
    }
  });  