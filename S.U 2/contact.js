document.addEventListener("DOMContentLoaded", function () {
    const contact = document.querySelector(".contact-form");
    const see = document.querySelector(".see");

    contact.addEventListener("submit", function (event) {
    event.preventDefault();
    
    const email = document.querySelector(".con-input").value.trim();
    const name = document.querySelector(".con-input").value.trim();

    if (!email || !name) {
        alert("please fill all");
        return;
    }

    const constactUs = {email, name};
       fetch("https://jsonplaceholder.typicode.com/users" ,{
                    method: "POST",
                    body: JSON.stringify(constactUs)
                })
                .then(response => response.json())
                .then(data => {
                    see.innerHTML = `
                    <h3>Appointment Successfully Submitted</h3>
                    <p><strong>Name:</strong>${constactUs.name}</p>
                    <p><strong>Email:</strong>${constactUs.email}</p>
                    `;                                     
                    form.reset();
                })
                .catch(error =>{
                    console.error("Error:" , error);
                    see.innerHTML = `<p> Failed to submit Appointment. Try again</p>`
                });
    });
});