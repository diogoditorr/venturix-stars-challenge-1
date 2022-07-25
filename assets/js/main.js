const submitButton = document.querySelector('.rating-evaluation button.submit');
const ratingEvaluationSection = document.querySelector('.rating-evaluation');
const ratingAcknowledgementSection = document.querySelector('.rating-acknowledgement');
const ratingOptions = document.querySelectorAll('.rating-evaluation ul.rating-options li');
const ratingSelected = document.querySelector('.rating-acknowledgement span.rating-selected');
let ratingResult = 0

function onSubmitButton() {
    ratingSelected.textContent = `You selected ${ratingResult} out of 5`;
    ratingEvaluationSection.classList.add('hidden');
    ratingAcknowledgementSection.classList.remove('hidden');
}

function clearRatingOptions() {
    ratingOptions.forEach((value) => {
        value.classList.remove('selected');
    });
}

function enableSubmitButton() {
    submitButton.disabled = false;
}

function disableSubmitButton() {
    submitButton.disabled = true;
}

ratingOptions.forEach((ratingOption) => {
    ratingOption.addEventListener('click', () => {
        clearRatingOptions();

        const newRatingResult = ratingOption.getAttribute('data-value');
        if (newRatingResult == ratingResult) {
            ratingResult = 0;
            disableSubmitButton();
            return
        }

        ratingResult = newRatingResult;
        enableSubmitButton();
        ratingOption.classList.add('selected');
    });
});

submitButton.addEventListener('click', onSubmitButton);