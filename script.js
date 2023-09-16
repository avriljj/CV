// Get references to the right card and link elements
const rightCardContent = document.getElementById('right-card');
const dynamicLinks = document.querySelectorAll('.dynamic-link');


function slideRightCardUnderLeftCard() {
    const rightCard = document.getElementById('right-card');
    rightCard.classList.add('slide-in'); // Apply the slide-out animation

    setTimeout(() => {
        rightCard.style.opacity = 0 ; // Hide the right card after the animation
    }, 500); // Duration of animation in milliseconds (0.5s)
}



// Function to load content from an HTML file
function loadContent(url) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.text();
        })
        .then(content => {
            rightCardContent.innerHTML = content;
        })
        .catch(error => {
            console.error('Error fetching content:', error);
        });
}

window.addEventListener('load', () => {
    const initialUrl = 'about.html';
    loadContent(initialUrl);
});

// Event listeners for the dynamic links
// Function to load content from an HTML file with animation
// Function to load content from an HTML file with animation
// Function to load content from an HTML file with animation
function loadContentWithAnimation(url) {
    // Add the slide-out class to the right card to slide it out
    

    setTimeout(() => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.text();
            })
            .then(content => {
                // Update the right card content
                rightCardContent.innerHTML = content;
                
                // Add the slide-in class to slide the new content in from the right
                //rightCardContent.classList.add('slide-in');
                rightCardContent.classList.add('slide-out');
               //  slideRightCardUnderLeftCard();
                
                
            })
            .catch(error => {
                console.error('Error fetching content:', error);
            });

        // After the animation, remove the animation classes
        setTimeout(() => {
            rightCardContent.classList.remove('slide-out', 'slide-in');
        }, 500); // Match the animation duration (0.5s * 1000)
    }, 500); // Wait for the slide-out animation to complete
}

// ...

// Event listeners for the dynamic links
dynamicLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const url = this.getAttribute('href');
        console.log('Link clicked:', url);
        loadContentWithAnimation(url); // Use the new function with animation
    });
});


