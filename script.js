document.getElementById("formulario").addEventListener("submit", function(event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim(); // Se permite vacio 
    let mensaje = document.getElementById("mensaje").value.trim();

    if (nombre && mensaje) {
        let facebookURL = "https://www.facebook.com/share/18NjJCLRW3/?mibextid=wwXIfr";
        window.open(facebookURL, "_blank");

        // Componer mensaje de WhatsApp con comillas dobles en lugar de backticks
        let whatsappMensaje = "Hola, mi nombre es " + nombre + ".";
        if (email) {
            whatsappMensaje += " Mi correo es " + email + ".";
        }
        whatsappMensaje += " Quiero información sobre: " + mensaje;

        let whatsappURL = "https://api.whatsapp.com/send?phone=+5215525207534&text=" + encodeURIComponent(whatsappMensaje);
        
        // Eliminar setTimeout para pruebas
        window.open(whatsappURL, "_blank");
    } else {
        alert("Por favor, ingresa tu nombre y un mensaje.");
    }
});
