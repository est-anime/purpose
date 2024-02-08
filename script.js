// Use jQuery's document.ready to ensure the DOM is fully loaded
$(document).ready(function () {
    var love = setInterval(function () {
      var r_num = Math.floor(Math.random() * 40) + 1;
      var r_size = Math.floor(Math.random() * 65) + 10;
      var r_left = Math.floor(Math.random() * 100) + 1;
      var r_bg = Math.floor(Math.random() * 25) + 100;
      var r_time = Math.floor(Math.random() * 3) + 2;
  
      $('.bg_heart').append("<div class='heart' style='width:" + r_size + "px;height:" + r_size + "px;left:" + r_left + "%;background:rgba(255," + (r_bg - 25) + "," + r_bg + ",1);-webkit-animation:love " + r_time + "s ease;-moz-animation:love " + r_time + "s ease;-ms-animation:love " + r_time + "s ease;animation:love " + r_time + "s ease'></div>");
  
      $('.bg_heart').append("<div class='heart' style='width:" + (r_size - 10) + "px;height:" + (r_size - 10) + "px;left:" + (r_left + r_num) + "%;background:rgba(255," + (r_bg - 25) + "," + (r_bg + 25) + ",1);-webkit-animation:love " + (r_time + 2) + "s ease;-moz-animation:love " + (r_time + 2) + "s ease;-ms-animation:love " + (r_time + 2) + "s ease;animation:love " + (r_time + 2) + "s ease'></div>");
    }, 500);
  
    var i = 0;
    var txt1 = "Hi SweetHeart.....! << Now I want to say something special to you. <<< So , Please read everything carefully...! > When I saw you for the first time < You seemed something Special to me.  << As the days go < you get closer to me....! << I don't know the reason why your thoughts always resonate inside my mind...! > Everything about you is always interesting for me...! I am somewhat nervous Because I haven't said these words to anyone and I won't say to anyone in the future...! > I Love my Parents so much than anything else in this world....! Now You are the only person whom I love equally with my parents....! >I Love U <SweetHeart.....! | Give me One chance to Prove my Love ...!";
    var speed = 15; // Adjusted faster typing speed
  
    function typeWriter1() {
      if (i < txt1.length) {
        document.getElementById("text1").innerHTML += txt1.charAt(i);
        i++;
        setTimeout(typeWriter1, speed);
      }
    }
  
    typeWriter1();
  });
  
