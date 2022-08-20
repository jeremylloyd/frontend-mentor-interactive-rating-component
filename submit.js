let rating = null;

function updateRating(newRating) {
    // Store rating
    rating = newRating;
    
    // Update styling
    ratings = document.getElementsByClassName("rating")
    for (let i=0; i<5; i++) {
        ratings[i].classList.remove("selector-active")
    }
    ratings[newRating - 1].classList.add('selector-active')
}

function favourite() {
    element = document.getElementById("favourite")
    if (element.classList.contains("selector-active")) {
        element.classList.remove("selector-active")
    } else {
        element.classList.add("selector-active")
    }
}

function submit() {
    // Ensure user has selected a rating
    if (rating == null) {
        return alert("Please select a rating.")
    }

    // Hide the old form
    let form = document.getElementById('form')
    form.style.display = 'none'
    
    // Update rating output
    document.getElementById('rating-output').textContent = `You selected ${rating} out of 5`

    // Show the new one
    let newForm = document.getElementById('thankyou')
    newForm.style.alignItems = 'center'
    newForm.style.display = 'visible'
}
