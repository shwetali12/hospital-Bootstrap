// Get the navbar2 element
var navbar2 = document.getElementById('navbar2');

// Check the initial scroll position on page load
var initialScrollPosition = window.scrollY;

// Set a scroll threshold, adjust as needed
var scrollThreshold = 100;

// Toggle the visibility and background color of navbar2 based on initial scroll position
if (initialScrollPosition > scrollThreshold) {
    navbar2.style.display = 'block';
    navbar2.style.backgroundColor = 'blue';
} else {
    navbar2.style.display = 'none';
}

// Listen for the scroll event
window.addEventListener('scroll', function() {
    // Get the updated scroll position
    var scrollPosition = window.scrollY;

    // Toggle the visibility and background color of navbar2 based on scroll position
    if (scrollPosition > scrollThreshold) {
        navbar2.style.display = 'block';
        navbar2.style.backgroundColor = 'blue';
    } else {
        navbar2.style.display = 'none';
    }
});





//home_clanic js code

document.addEventListener('DOMContentLoaded', function() {
    var doctorCells = document.querySelectorAll('.doctor1');

    doctorCells.forEach(function(cell) {
        cell.addEventListener('mouseover', function() {
            var doctorInfo = this.getAttribute('data-info');
            showDoctorInfo(doctorInfo, this);
        });

        cell.addEventListener('mouseout', function() {
            hideDoctorInfo();
        });
    });

    function showDoctorInfo(info, cell) {
        var doctorInfoDisplay = document.getElementById('doctor-info-display');
        doctorInfoDisplay.textContent = info;
        doctorInfoDisplay.style.left = cell.offsetLeft + 'px';
        doctorInfoDisplay.style.top = (cell.offsetTop + cell.offsetHeight) + 'px';
        doctorInfoDisplay.style.display = 'block';
    }

    function hideDoctorInfo() {
        var doctorInfoDisplay = document.getElementById('doctor-info-display');
        doctorInfoDisplay.style.display = 'none';
    }
});


/*signle shop*/

document.addEventListener('DOMContentLoaded', function() {
    const btnReview = document.getElementById('Review');
    const btnDescription = document.getElementById('Description');
    const shopcontent = document.getElementById('shopcontent');
    const description = document.getElementById('description');

    btnReview.addEventListener('click', function() {
      toggleContent(shopcontent);
    });

    btnDescription.addEventListener('click', function() {
      toggleContent(description);
    });

    function toggleContent(element) {
      if (element.classList.contains('hidden')) {
        element.classList.remove('hidden');
      } else {
        element.classList.add('hidden');
      }
    }
  });


  /*checkout*/
 
  document.querySelectorAll('.form-check-input').forEach(item => {
    item.addEventListener('change', event => {
        if (event.target.id === 'exampleRadio1' && event.target.checked) {
            document.getElementById('box1').style.display = 'block';
            document.getElementById('box2').style.display = 'none';
        } else if (event.target.id === 'exampleRadio2' && event.target.checked) {
            document.getElementById('box2').style.display = 'block';
            document.getElementById('box1').style.display = 'none';
        }
    });
});

  
  
/*contact*/
function initMap() {
    // Coordinates of the map center
    var centerCoords = { lat: 40.7128, lng: -74.0060 }; // New York City

    // Create a new map object
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: centerCoords
    });

    // Add a marker at the center of the map
    var marker = new google.maps.Marker({
      position: centerCoords,
      map: map,
      title: 'New York City'
    });
  }
