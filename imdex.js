document.addEventListener('DOMContentLoaded', function() {
  const textoCambiante = document.getElementById('texto-cambiante');
  const palabras = ["gratis", "divertidas", "entretenidas", "pro", "fachas", "aventureras", "interesantes"];
  let indicePalabra = 0;
  let indiceLetra = 0;
  let primeraLetraMostrada = false;

  function escribirLetra() {
    if (indiceLetra < palabras[indicePalabra].length) {
      if (!primeraLetraMostrada) {
        // Mostrar la primera letra de la palabra actual
        textoCambiante.textContent = palabras[indicePalabra][0];
        primeraLetraMostrada = true;
        indiceLetra++;
        setTimeout(escribirLetra, 300);
      } else {
        textoCambiante.textContent += palabras[indicePalabra][indiceLetra];
        indiceLetra++;
        setTimeout(escribirLetra, 300);
      }
    } else {
      // Palabra completada, iniciar el borrado letra por letra después de 2,5 segundos
      setTimeout(borrarLetra, 2500);
    }
  }

  function borrarLetra() {
    if (indiceLetra > 0) {
      indiceLetra--;
      textoCambiante.textContent = palabras[indicePalabra].substring(0, indiceLetra);
      setTimeout(borrarLetra, 300);
    } else {
      // Borrado completado, cambiar a la siguiente palabra después de 2 segundos
      indiceLetra = 0;
      primeraLetraMostrada = false;
      indicePalabra++;
      if (indicePalabra >= palabras.length) {
        indicePalabra = 0;
      }
      setTimeout(cambiarPalabra, 2000);
    }
  }

  function cambiarPalabra() {
    textoCambiante.textContent = ""; // Reiniciar el texto cambiante
    escribirLetra();
  }

  cambiarPalabra();
});
