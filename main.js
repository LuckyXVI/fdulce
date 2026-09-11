document.addEventListener("DOMContentLoaded", function () {

    const intro = document.getElementById("intro-screen");
    const startButton = document.getElementById("start-story");
    const audio = document.getElementById("bg-music");

    const messages = document.querySelectorAll(".message");
    const finalMessage = document.querySelector(".final-message");

    // Ajuste de altura para celulares
    function setViewportHeight() {
        document.documentElement.style.setProperty(
            "--viewport-height",
            window.innerHeight + "px"
        );
    }

    setViewportHeight();
    window.addEventListener("resize", setViewportHeight);


    // Mostrar un mensaje
    function showMessage(index) {

        messages.forEach(function (message) {
            message.classList.remove("active");
        });

        if (messages[index]) {
            messages[index].classList.add("active");
        }
    }


    // Iniciar historia
    function startStory() {

        // Activar música
        audio.volume = 0.7;

        audio.play().catch(function (error) {
            console.log("No se pudo reproducir la música:", error);
        });

        // Mostrar escenario
        document.body.classList.add("story-running");

        // Ocultar portada
        intro.classList.add("hide");

        // Primera frase
        setTimeout(function () {
            showMessage(0);
        }, 1000);

        // Segunda frase
        setTimeout(function () {
            showMessage(1);
        }, 4800);

        // Tercera frase
        setTimeout(function () {
            showMessage(2);
        }, 8600);

        // Amanecer + cuarta frase
        setTimeout(function () {

            document.body.classList.add("sunrise");

            showMessage(3);

        }, 11500);

        // Quinta frase
        setTimeout(function () {
            showMessage(4);
        }, 15500);

        // Sexta frase
        setTimeout(function () {
            showMessage(5);
        }, 19500);

        // Mensaje final
        setTimeout(function () {

            messages.forEach(function (message) {
                message.classList.remove("active");
            });

            finalMessage.classList.add("show");

        }, 24000);
    }


    // BOTÓN ABRIR
    if (startButton) {

        startButton.addEventListener("click", function () {

            startButton.disabled = true;

            startStory();

        });

    } else {

        console.error("No se encontró el botón #start-story");

    }

});