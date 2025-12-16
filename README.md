# 💌 Invitación para Tomar Mates 🧉

Esta es una aplicación web simple y romántica, diseñada como una invitación digital para compartir un momento especial, como tomar unos mates en el Parque Metropolitano de Maipú. Permite al usuario seleccionar una fecha y hora, y automáticamente envía la confirmación al organizador a través de email.

## ✨ Características Principales

* **Diseño Responsivo:** Se adapta a diferentes tamaños de pantalla (móviles y escritorio).
* **Animaciones Suaves:** Uso de CSS para animaciones de entrada (`fadeIn`, `slideUp`) que le dan un toque elegante.
* **Confirmación de Cita:** Permite al invitado elegir su fecha y hora preferida.
* **Validación de Campos:** Asegura que se elijan la fecha y hora antes de intentar enviar.
* **Integración con EmailJS:** Utiliza EmailJS para enviar automáticamente los detalles de la cita (fecha y hora elegidas) a una dirección de correo predefinida.
* **Feedback Visual:** Barra de progreso animada en el botón de confirmación mientras se procesa la solicitud.

## 🛠️ Tecnologías Utilizadas

Este proyecto está construido con tecnologías web básicas y se apoya en un servicio de terceros para la funcionalidad de email:

* **HTML5:** Estructura principal de la invitación.
* **CSS3:** Estilos, animaciones (`@keyframes`), y diseño responsivo.
    * **Tipografía:** Fuente Poppins de Google Fonts.
    * **Efecto:** Uso de `backdrop-filter: blur(12px)` para un efecto de tarjeta de cristal (`glassmorphism` suave).
* **JavaScript:** Lógica de la aplicación, validación de campos, y manejo del envío con `emailjs.send()`.
* **EmailJS:** Servicio utilizado para manejar el envío de correos electrónicos sin necesidad de un servidor backend.

## 📺 Demo

https://enzooriveroo.github.io/invitacion-mates/

---
**Nota sobre EmailJS:** En el entorno de demo, al presionar "Confirmar", se activará el proceso de envío de email al organizador usando la configuración definida en `index.js`.
