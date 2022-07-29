const submitButton = document.querySelector(".rating-evaluation form button");
const ratingOptionsForm = document.querySelector(".rating-evaluation form");
const ratingEvaluationSection = document.querySelector(".rating-evaluation");
const ratingAcknowledgementSection = document.querySelector(
    ".rating-acknowledgement"
);
const ratingOptions = document.querySelectorAll(
    ".rating-evaluation .rating-options input"
);
const ratingSelected = document.querySelector(
    ".rating-acknowledgement span.rating-selected"
);

/* 
function onRatingOptionChange(event) {
    const ratingOption = event.target;

    if (!ratingOption.checked) {
        disableSubmitButton();
        return;
    }

    enableSubmitButton();
} */

/* a function acima pode ser simplificada assim:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
*/
const onRatingOptionChange = ({ target }) =>
    (submitButton.disabled = !target.checked);

function onSubmitButton(event) {
    event.preventDefault();

    /*
    const data = Object.fromEntries(
        new FormData(ratingOptionsForm).entries()
    );
    */

    // Ao invés de percorrer as entries do formData pra criar
    // um Object eai acessar a prop que você quer
    // É possível usar o método .get diretamente

    // developer.mozilla.org/en-US/docs/Web/API/FormData/get
    const formData = new FormData(ratingOptionsForm);
    const value = formData.get("ratingValue");

    if (value !== null) {
        ratingSelected.textContent = `You selected ${value} out of 5`;
        ratingEvaluationSection.classList.add("hidden");
        ratingAcknowledgementSection.classList.remove("hidden");
    }
}

ratingOptions.forEach((ratingOption) => {
    ratingOption.addEventListener("change", onRatingOptionChange);
});

ratingOptionsForm.addEventListener("submit", (e) => onSubmitButton(e));
