const submitButton = document.querySelector('.rating-evaluation button.submit');
const ratingEvaluationSection = document.querySelector('.rating-evaluation');
const ratingAcknowledgementSection = document.querySelector('.rating-acknowledgement');
const ratingOptions = document.querySelectorAll('.rating-evaluation .rating-options span');
const ratingSelected = document.querySelector('.rating-acknowledgement span.rating-selected');
let ratingResult = 0

function onRatingOptionPress(ratingOption) {
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
}

function onSubmitButton() {
    ratingSelected.textContent = `You selected ${ratingResult} out of 5`;
    ratingEvaluationSection.classList.add('hidden');
    ratingAcknowledgementSection.classList.remove('hidden');
}

function clearRatingOptions() {
    ratingOptions.forEach((ratingOption) => {
        ratingOption.classList.remove('selected');
    });
}

function enableSubmitButton() {
    submitButton.disabled = false;
}

function disableSubmitButton() {
    submitButton.disabled = true;
}

ratingOptions.forEach((ratingOption) => {
    ratingOption.addEventListener('click', () => onRatingOptionPress(ratingOption));
    ratingOption.onkeydown = (e) => {
        if (e.keyCode == 13) { // enter
            onRatingOptionPress(ratingOption);
        }
        if (e.keyCode == 39) { // arrow-right
            const nextElement = ratingOption.nextElementSibling;
            if (nextElement) {
                ratingOption.tabIndex = -1;
                nextElement.tabIndex = 0;
                nextElement.focus();
            }
        }
        if (e.keyCode == 37) { // arrow-left
            const previousElement = ratingOption.previousElementSibling;
            if (previousElement) {
                ratingOption.tabIndex = -1;
                previousElement.tabIndex = 0;
                previousElement.focus();
            }
        }
    }
});

submitButton.addEventListener('click', onSubmitButton);