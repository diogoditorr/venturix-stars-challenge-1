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

function onRatingOptionChange(event) {
    const ratingOption = event.target;

    if (!ratingOption.checked) {
        disableSubmitButton();
        return;
    }

    enableSubmitButton();
}

function onSubmitButton(event) {
    event.preventDefault();

    const data = Object.fromEntries(
        new FormData(ratingOptionsForm).entries()
    );

    if (data.ratingValue !== null) {
        ratingSelected.textContent = `You selected ${data.ratingValue} out of 5`;
        ratingEvaluationSection.classList.add("hidden");
        ratingAcknowledgementSection.classList.remove("hidden");
    }
}

function enableSubmitButton() {
    submitButton.disabled = false;
}

function disableSubmitButton() {
    submitButton.disabled = true;
}

ratingOptions.forEach((ratingOption) => {
    ratingOption.addEventListener("change", (e) => onRatingOptionChange(e));
});

ratingOptionsForm.addEventListener("submit", (e) => onSubmitButton(e));
