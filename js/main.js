/* ejemplo 
optionScroll={delay:300,origin:'top',distance:'5rem',interval:300,rotate:{x:x,z:z}}
*/
let optionScroll = (delayAnimation, origenAnimacion, distanciaOrigen, intervaloDeInamacion, rotacionX, rotacionZ) => {
  return { delay: delayAnimation, origin: origenAnimacion, distance: distanciaOrigen, interval: intervaloDeInamacion, rotate: { x: rotacionX, z: rotacionZ } }
}
ScrollReveal().reveal('.container-presentacion', optionScroll(300, 'left', '5rem', 0, 0, 0));
ScrollReveal().reveal('.container-fotoPerfil', optionScroll(300, 'right', '5rem', 0, 20, 20));
ScrollReveal().reveal('.container-sobreMi', optionScroll(300, 'top', '5rem', 0, 0, 0));
ScrollReveal().reveal('.container-habilidades', optionScroll(300, 'top', '5rem', 0, 0, 0));
ScrollReveal().reveal('.container-proyectos', optionScroll(300, 'right', '5rem', 0, 0, 0));
ScrollReveal().reveal('.container-contacto', optionScroll(300, 'top', '5rem', 0, 0, 0));


let containerCode = document.getElementById("code");
let gradoConSeccionesInactiva = [];
gradoConSeccionesInactiva['id_grado']=2;
gradoConSeccionesInactiva['grado']="2°";
let code = `
let gradoConSeccionesInactiva = [];<br><br>

for (let i = 0; i &lt; grados.length; i++) {<br>
  let gradoConSeccionActiva = false;<br><br>

  for (let j = 0; j &lt; seccionesActivas.length; j++) {<br><br>

    if (grados[i]['id_grado'] == seccionesActivas[j]['id_grado'])<br>
      gradoConSeccionActiva = true;<br>
  }<br>
  if (!gradoConSeccionActiva) gradoConSeccionesInactiva.push(grados[i]);<br>
}<br>
let html = ' &lt; option value=""&gt; &lt;/option&gt;'<br>
gradoConSeccionesInactiva.forEach(gradoConSeccionesInactiva => {<br><br>

html += '&lt; option value="${gradoConSeccionesInactiva['id_grado']}"&gt;${gradoConSeccionesInactiva['grado']}&lt;/option&gt;'<br>
  gradoConSeccionInactiva.innerHTML = html<br>
}); `

let typewriter = new Typewriter(containerCode, {
  loop: true,
  delay: 30,
 
});


typewriter.typeString(code)
  .pauseFor(1000)
   .start();



