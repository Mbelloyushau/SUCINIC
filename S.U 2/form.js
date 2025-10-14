document.addEventListener("DOMContentLoaded", function () {
            const form = document.querySelector("#form");
            const display = document.querySelector("#display");

            form.addEventListener("submit", function (event) {
                event.preventDefault();

                const name = document.querySelector("#name").value.trim();
                const surname = document.querySelector("#surname").value.trim();
                const email = document.querySelector("#email").value.trim();
                const phone = document.querySelector("#phone").value.trim();
                const date = document.querySelector("#date").value;
                const service = document.querySelector("#service").value;
                const message = document.querySelector("#message").value.trim();

                if (!name || !surname || !email || !phone || !date || !service) {
                    alert("Please fill in all the required fields!");
                    return;
                    
                }
                const appointment = {name, surname, email, phone, date, service, message};

                fetch("https://jsonplaceholder.typicode.com/users" ,{
                    method: "POST",
                    body: JSON.stringify(appointment)
                })
                .then(response => response.json())
                .then(data => {
                    display.innerHTML = `
                    <h3>Appointment Successfully Submitted</h3>
                    <p><strong>Name:</strong>${appointment.name}</p>
                    <p><strong>Surname:</strong>${appointment.surname}</p>
                    <p><strong>Email:</strong>${appointment.email}</p>
                    <p><strong>Phone:</strong>${appointment.phone}</p>
                    <p><strong>Date:</strong>${appointment.date}</p>
                    <p><strong>Service</strong>${appointment.service}</p>
                    <p><strong>Message:</strong>${appointment.message || "No additional explanation provided"}</p>`;

                    form.reset();
                })
                .catch(error =>{
                    console.error("Error:" , error);
                    display.innerHTML = `<p> Failed to submit Appointment. Try again</p>`
                });
            });
        });