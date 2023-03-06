
const textAdvice = document.querySelector(".text");
const btn = document.querySelector("#dice");
const Id = document.querySelector("#id");


btn.addEventListener("click", generator);

function generator() {

    fetch('https://api.adviceslip.com/advice').then(
        (response) => {
            console.log(response);
            return response.json();

        }
    )

        .then(
            (data) => {
                console.log(data);
                textAdvice.textContent = `
            ${data.slip.advice}
            `;
                Id.textContent = `
            #${data.slip.id}
            `
            }
        )

        .catch(
            (err) => {
                alert("An error has occurred")
            }
        )
}