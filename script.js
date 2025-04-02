// $(document).ready(function () {
//     $(window).scroll(function () {
//       if ($(this).scrollTop() &gt; 50) {
//         $("header").addClass("sticky");
//       } else {
//         $("header").removeClass("sticky");
//       }
//     });
  
//     function newDate() {
//       return new Date().getFullYear();
//     }
//     document.onload = document.getElementById("autodate").innerHTML = +newDate();
//   });

// Wait for the document to be fully loaded
$(document).ready(function () {
    // Add a scroll event listener
    $(window).scroll(function () {
      if ($(this).scrollTop() > 50) {
        $("header").addClass("sticky");
      } else {
        $("header").removeClass("sticky");
      }
    });
  
    // Function to get the current year
    function getCurrentYear() {
      return new Date().getFullYear();
    }
  
    // Set the current year in the element with ID 'autodate'
    $(document).on("load", function () {
      $("#autodate").text(getCurrentYear());
    });
  });
  