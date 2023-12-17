function validateForm() {
    var firstName = document.getElementById("fname").value.trim();
    var lastName = document.getElementById("lname").value.trim();
    var roleSelect = document.getElementById("cars");
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("password").value;

    // First Name validation
    var nameRegex = /^[a-zA-Z\s]+$/;
    if (!nameRegex.test(firstName)) {
        alert("Please enter a valid First Name (only letters and spaces allowed)");
        return false;
    }

    // Last Name validation
    if (!nameRegex.test(lastName)) {
        alert("Please enter a valid Last Name (only letters and spaces allowed)");
        return false;
    }

    // Choose Your Role validation
    if (roleSelect.selectedIndex < 1) {
        alert("Please choose at least one role");
        return false;
    }

    // Email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Password validation
    var passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
        alert("Password must be at least 6 characters with at least 1 alphabet and 1 number");
        return false;
    }

    return true; // Form will be submitted if all fields are valid
}

// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Function to fetch video metadata and display it in the container
    function fetchAndDisplayVideoMetadata() {
      fetch('/api/videos')
        .then(response => response.json())
        .then(videos => {
          const videoMetadataContainer = document.getElementById('videoMetadataContainer');
          videoMetadataContainer.innerHTML = ''; // Clear previous content
  
          videos.forEach(video => {
            const videoCard = document.createElement('div');
            videoCard.className = 'video-card';
  
            const videoElement = document.createElement('video');
            videoElement.width = 320;
            videoElement.height = 240;
            videoElement.controls = true;
  
            const sourceElement = document.createElement('source');
            sourceElement.src = `/uploads/${video.filename}`;
            sourceElement.type = 'video/mp4';
  
            videoElement.appendChild(sourceElement);
  
            const titleElement = document.createElement('h3');
            titleElement.textContent = video.title;
  
            const descriptionElement = document.createElement('p');
            descriptionElement.textContent = video.description;
  
            videoCard.appendChild(videoElement);
            videoCard.appendChild(titleElement);
            videoCard.appendChild(descriptionElement);
  
            videoMetadataContainer.appendChild(videoCard);
          });
        })
        .catch(error => console.error('Error fetching video metadata:', error));
    }
  
    // Fetch and display video metadata on page load
    fetchAndDisplayVideoMetadata();
  });  