$(document).ready(function() {
    var storedContent = localStorage.getItem('selectedContent');
    var storedColor = localStorage.getItem('selectedColor');
  
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
      $('body').css('--color-fg', storedColor);
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
      $('body').css('--color-fg', color);
  
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
        return 'white'; // Default color
    }
  }