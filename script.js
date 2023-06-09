$(document).ready(function() {
    var storedContent = localStorage.getItem('selectedContent');
    var storedColor = localStorage.getItem('selectedColor');

    // Default values
    storedContent = storedContent || '1';
    storedColor = storedColor || '#9e9e9e';

    if (storedContent && storedColor) {
        // Remove 'active' class from all buttons
        $('.button').removeClass('active');
        // Add 'active' class to the stored content button
        $('.button[data-target="' + storedContent + '"]').addClass('active');

        // Hide all content sections
        $('.content > div').removeClass('active');
        // Show the stored content section
        $('.content-' + storedContent).addClass('active');

        // Set the stored color
        document.documentElement.style.setProperty('--color-fg', storedColor);
    }

    // Add click event handlers to the buttons
    $('.button').click(function() {
        // Remove 'active' class from all buttons
        $('.button').removeClass('active');
        // Add 'active' class to the clicked button
        $(this).addClass('active');

        // Get the index of the clicked button
        var target = $(this).data('target');

        // Hide all content sections
        $('.content > div').removeClass('active');
        // Show the corresponding content section
        $('.content-' + target).addClass('active');

        // Get the color associated with the target
        var color = getColorByTarget(target);

        // Set the color in CSS variable
        document.documentElement.style.setProperty('--color-fg', color);

        // Save the selected content and color in local storage
        localStorage.setItem('selectedContent', target);
        localStorage.setItem('selectedColor', color);
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
            return '#9e9e9e'; // Default color
    }
}
