var dayHeadings = document.querySelectorAll('.day-heading');


dayHeadings.forEach(function (dayHeading) {
    
    dayHeading.addEventListener('click', function () {
        
        var activityDetails = this.nextElementSibling;

        if (activityDetails.style.display === 'block') {
            
            activityDetails.style.display = 'none';
        } else {
            
            hideAllActivityDetails();
            activityDetails.style.display = 'block';
        }
    });
});

function hideAllActivityDetails() {
    var allActivityDetails = document.querySelectorAll('.activity-details');
    allActivityDetails.forEach(function (activityDetails) {
        activityDetails.style.display = 'none';
    });
}