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
    });
});



"https://preview.redd.it/y8djj6h6l8041.gif?width=660&format=mp4&v=enabled&s=4cd770433d60e3655948340045671c530b5b6102"