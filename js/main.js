const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".main-nav");

if (menuButton && navigation) {

  menuButton.addEventListener("click", () => {

    const isOpen = navigation.classList.toggle("open");

    menuButton.setAttribute(
      "aria-expanded",
      isOpen
    );

  });


  navigation.querySelectorAll("a").forEach((link) => {

    link.addEventListener("click", () => {

      navigation.classList.remove("open");

      menuButton.setAttribute(
        "aria-expanded",
        "false"
      );

    });

  });

}



/* --------------------------------
   WEDDING ENQUIRY FORM
-------------------------------- */

const weddingForm = document.getElementById("wedding-form");

if (weddingForm) {

  weddingForm.addEventListener("submit", async (event) => {

    event.preventDefault();


    const submitButton =
      weddingForm.querySelector('button[type="submit"]');


    const originalButtonText =
      submitButton.textContent;


    submitButton.disabled = true;

    submitButton.textContent = "Sending...";


    try {

      const response = await fetch(
        weddingForm.action,
        {
          method: weddingForm.method,

          body: new FormData(weddingForm),

          headers: {
            Accept: "application/json"
          }
        }
      );


      if (response.ok) {

        window.location.href =
          "thank-you.html";

      }

      else {

        submitButton.disabled = false;

        submitButton.textContent =
          originalButtonText;


        alert(
          "Sorry, there was a problem sending your enquiry. Please try again or call us on (053) 942 1723."
        );

      }

    }

    catch (error) {

      submitButton.disabled = false;

      submitButton.textContent =
        originalButtonText;


      alert(
        "Sorry, there was a problem sending your enquiry. Please try again or call us on (053) 942 1723."
      );

    }

  });

}
