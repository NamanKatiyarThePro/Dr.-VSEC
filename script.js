document.addEventListener('DOMContentLoaded', function () {
    var currentIndex = 0;
    var items = document.querySelectorAll('.slide');
    var totalItems = items.length;

    document.querySelector('.next').addEventListener('click', function() {
      currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
      updateSlider();
    });

    document.querySelector('.prev').addEventListener('click', function() {
      currentIndex = (currentIndex > 0) ? currentIndex - 1 : totalItems - 1;
      updateSlider();
    });

    document.querySelectorAll('.dot').forEach(function(dot, index) {
      dot.addEventListener('click', function() {
        currentIndex = index;
        updateSlider();
      });
    });

    function updateSlider() {
        var newTransformValue = -currentIndex * 100 + '%';
        document.querySelector('.slides').style.transform = 'translateX(' + newTransformValue + ')';
      
        // Remove the 'active' class from all dots
        document.querySelectorAll('.dot').forEach(function(dot) {
          dot.classList.remove('active');
        });
      
        // Add the 'active' class to the current dot
        document.querySelector('.dot:nth-child(' + (currentIndex + 1) + ')').classList.add('active');
      }

    setInterval(function() {
      currentIndex = (currentIndex < totalItems - 1) ? currentIndex + 1 : 0;
      updateSlider();
    }, 7000);
  });