document.querySelectorAll('.stars').forEach(starContainer => {
    const rating = starContainer.dataset.rating;

    // Fill the stars based on the rating
    const stars = starContainer.querySelectorAll('i');
    stars.forEach((star, index) => {
        if (index < rating) {
            star.classList.add('fas'); // filled star
            star.classList.remove('far'); // remove empty star
        } else {
            star.classList.add('far'); // empty star
            star.classList.remove('fas'); // remove filled star
        }
    });

    // Add event listeners for interactive rating if needed
    starContainer.addEventListener('click', (e) => {
        if (e.target.tagName === 'I') {
            const selectedRating = Array.from(stars).indexOf(e.target) + 1;
            starContainer.dataset.rating = selectedRating;

            // Update stars display
            stars.forEach((star, index) => {
                if (index < selectedRating) {
                    star.classList.add('fas');
                    star.classList.remove('far');
                } else {
                    star.classList.add('far');
                    star.classList.remove('fas');
                }
            });

            console.log(`Rated: ${selectedRating} stars`);
        }
    });
});
