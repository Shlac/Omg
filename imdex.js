document.addEventListener('DOMContentLoaded', function() {
  const textoCambiante = document.getElementById('texto-cambiante');
  const palabras = ["gratis", "divertidas", "entretenidas", "pro", "fachas", "aventureras", "interesantes","emocionantes","fachas","insanas"];
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





document.addEventListener('DOMContentLoaded', function() {
  var inputBusqueda = document.getElementById('busqueda');
  var buscarBtn = document.getElementById('buscarBtn');
  var borrarBtn = document.getElementById('borrarBtn');

  function buscarPeliculas() {
    var valorBusqueda = inputBusqueda.value.toLowerCase();
    var peliculas = document.getElementById('peliculas');
    
    if (peliculas) {
      var peliculasEnlaces = peliculas.getElementsByTagName('a');
      
      for (var i = 0; i < peliculasEnlaces.length; i++) {
        var tituloPelicula = peliculasEnlaces[i].textContent.toLowerCase();
        
        if (tituloPelicula.indexOf(valorBusqueda) > -1) {
          peliculasEnlaces[i].style.display = '';
        } else {
          peliculasEnlaces[i].style.display = 'none';
        }
      }
    }
  }

  function limpiarBusqueda() {
    inputBusqueda.value = '';
    buscarPeliculas();
    inputBusqueda.focus();
  }

  buscarBtn.addEventListener('click', buscarPeliculas);
  inputBusqueda.addEventListener('keyup', function(event) {
    if (event.keyCode === 13) { // Código de tecla "Enter"
      buscarPeliculas();
    }
  });

  borrarBtn.addEventListener('click', limpiarBusqueda);

  inputBusqueda.addEventListener('input', function() {
    if (inputBusqueda.value !== '') {
      borrarBtn.style.display = 'block';
    } else {
      borrarBtn.style.display = 'none';
    }
  });
});
