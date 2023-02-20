/* --------------------------------- scroll --------------------------------- */
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


/* ------------------------------- typewriter ------------------------------- */
let containerCode = document.getElementById("code");
let gradoConSeccionesInactiva = [];
gradoConSeccionesInactiva['id_grado'] = 2;
gradoConSeccionesInactiva['grado'] = "2°";
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

/* ---------------------------------- gmail form --------------------------------- */
let enviarGmail = () => {
  Swal.fire({
    showCloseButton: false,
    showCancelButton: true,
    focusConfirm: false,
    showLoaderOnConfirm: true,
    confirmButtonText: 'Enviar',
    cancelButtonText: 'Cancelar',
    confirmButtonColor: 'rgb(45,108,223)',
    cancelButtonColor: 'rgb(205, 92, 92)',
    showClass: {
      popup: 'scale-in-ver-center'
    },
    hideClass: {
      popup: 'scale-out-vertical '
    },

    customClass: {
      confirmButton: 'text-bold',
      cancelButton: 'text-bold',
      loader: 'rgb(205, 92, 92)',
    },
    html:
      `
      <img src="styles/svg/logo-azul.svg" class="logo logo-azul" alt="logo">
      <div class="form-floating mb-3 mt-1 p-1">
          <input type="text" class="form-control form-control-lg" id="input-nombre" placeholder=" ">
          <label for="input-nombre">Nombre</label>
      </div>
      <div class="form-floating mb-3 p-1">
          <input type="email" class="form-control form-control-lg" id="input-correo" placeholder="name@example.com">
          <label for="input-correo">Correo electrónico</label>
      </div>

      <div class="form-floating mb-3 p-1">
          <textarea class="form-control fomr-control-lg" placeholder=" " id="input-mensaje"></textarea>
          <label for="input-mensaje">Comentame tu idea</label>
        </div>
      `,
    preConfirm: () => {

      let name = Swal.getHtmlContainer().querySelector("#input-nombre").value;
      let correo = Swal.getHtmlContainer().querySelector("#input-correo").value;
      let mensaje = Swal.getHtmlContainer().querySelector("#input-mensaje").value;

      if (name.length <= 3 || correo.length <= 10 || mensaje.length <= 10) {
        Swal.showValidationMessage('Porfavor rellene todos los campos')
      } else {
        let data = {
          name: name,
          correo: correo,
          mensaje: mensaje
        }

        return emailjs.send('service_w04bzde', 'template_ukf2has', data, '6YDZgV42XfQE43fz_')
          .then((res) => {
            return res
          })

      }


    },

  }).then(res => {
    if (res.value.text == "OK") Swal.fire({ title: 'Gracias por ponerte en contacto, me comunicare en breve ;)', showConfirmButton: false, showClass: { popup: 'scale-in-ver-center' }, hideClass: { popup: 'scale-out-vertical ' } })
    else Swal.fire({ title: 'Ops no he recibido tu mensaje, intenta mas tarde :(', showConfirmButton: false, showClass: { popup: 'scale-in-ver-center' }, hideClass: { popup: 'scale-out-vertical ' } })


  })
}

let gmail = document.getElementById("gmail")

gmail.addEventListener("click", enviarGmail)