$(document).ready(function() {
    
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
        $('.content-' + (target)).addClass('active');
        
        // Change the text color of the target div
        var color = getColorByTarget(target);
        $('body').css('--color-fg', color);
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
