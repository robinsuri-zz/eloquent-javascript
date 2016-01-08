<div id="main" style="position: absolute">
  <div class="trail"></div>
  <div class="trail" style="left: 20px"></div>
  <div class="trail" style="left: 40px"></div>
  <div class="trail" style="left: 60px"></div>
  <div class="trail" style="left: 80px"></div>
</div>
<script>
  addEventListener("mousemove", function(event) {
      var main = document.getElementById('main');
      if (main.style.visibility === 'hidden') {
          main.style.visibility = 'visible';
      }
      var x = event.clientX;
      var y = event.clientY;
      main.style.left = x + "px";
      main.style.top = y + "px";
      if (typeof timer !== 'undefined') {
          clearTimeout(timer);
      }
      var timer = setTimeout(function() {
          main.style.visibility = 'hidden';

      }, 2000);

  });
</script>