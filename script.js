$(document).ready(function() {
    // Retrieve the stored content number
    var storedContentNumber = retrieveSelectedContent();

    // Set the initial state based on the stored content number or default to the first content
    var initialContentNumber = storedContentNumber || 1;

    // Add 'active' class to the initially selected button
    $('.button[data-target="' + initialContentNumber + '"]').addClass('active');

    // Show the initially selected content section
    $('.content-' + initialContentNumber).addClass('active');

    // Change the text color of the target div
    var initialColor = getColorByTarget(initialContentNumber);
    $('body').css('--color-fg', initialColor);

    // Hide the default content section
    $('.content > div.default').removeClass('active');

    // Add click event handlers to the buttons
    $('.button').click(function() {
        var target = $(this).data('target');

        // Check if the clicked button is already active
        if ($(this).hasClass('active')) {
            return; // No need to do anything if the button is already active
        }

        // Remove 'active' class from all buttons
        $('.button').removeClass('active');

        // Add 'active' class to the clicked button
        $(this).addClass('active');

        // Hide all content sections
        $('.content > div').removeClass('active');

        // Show the corresponding content section
        $('.content-' + target).addClass('active');

        // Change the text color of the target div
        var color = getColorByTarget(target);
        $('body').css('--color-fg', color);

        // Hide the default content section
        $('.content > div.default').removeClass('active');

        // Store the selected content
        storeSelectedContent(target);
    });
});

// Helper function to determine the color based on the target
function getColorByTarget(target) {
    switch (target) {
        case 1:
            return '#e2c99d'; // Example color for target 1
        case 2:
            return '#edbaff'; // Example color for target 2
        case 3:
            return '#8cc87a'; // Example color for target 3
        case 4:
            return '#8ad1cf'; // Example color for target 4
        default:
            return 'white'; // Default color
    }
}

// Store the selected content
function storeSelectedContent(contentNumber) {
    localStorage.setItem('selectedContent', contentNumber);
}

// Retrieve the selected content
function retrieveSelectedContent() {
    return localStorage.getItem('selectedContent');
}
