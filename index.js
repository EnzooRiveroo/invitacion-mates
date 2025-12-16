emailjs.init("QP7lXgXVTpqlnwv3F");

function confirmar() {
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;
    const mensaje = document.getElementById("mensaje-final");
    const sorpresa = document.getElementById("sorpresa");
    const btn = document.getElementById("confirm-btn");
    const btnText = btn.querySelector(".btn-text");
    const progressBar = btn.querySelector(".progress");

    mensaje.textContent = "";
    mensaje.classList.remove("mostrar");
    sorpresa.textContent = "";
    sorpresa.classList.remove("mostrar");

    if (!fecha || !hora) {
        mensaje.style.color = "red";
        mensaje.textContent = "Elegí fecha y hora 😉";
        mensaje.classList.add("mostrar");
        return;
    }

    mensaje.style.color = "#1b4d2b";

    const partes = fecha.split("-");
    const fechaFormateada = `${partes[2]}/${partes[1]}/${partes[0]}`;

    btn.disabled = true;
    btn.classList.add("loading");

    let progress = 0;
    const interval = setInterval(() => {
        progress += 20;
        progressBar.style.width = progress + "%";

        if (progress >= 100) {
            clearInterval(interval);
            btn.classList.remove("loading");
            btnText.textContent = "Enviado";

            mensaje.textContent = `Perfecto… nos vemos el ${fechaFormateada} a las ${hora} 💚`;
            mensaje.classList.add("mostrar");

            setTimeout(() => {
                sorpresa.textContent = "Ya tengo ganas de ese momento lindo con vos ✨";
                sorpresa.classList.add("mostrar");
            }, 600);

            const templateParams = {
                name: "Invitación a tomar mates",
                email: "sin@email.com",
                fecha: fechaFormateada,
                hora: hora,
                message: `La chica eligió: ${fechaFormateada} a las ${hora}`
            };

            emailjs.send('service_enzooriveroo', 'template_20i7kdp', templateParams)
                .then(response => console.log('SUCCESS!', response.status, response.text),
                    error => console.log('FAILED...', error));
        }
    }, 300);
}