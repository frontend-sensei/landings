var color1 = "#000", color2 = "#fff";
var json = {
  "particles": {
    "number": {
      "value": 100,
      "density": {
        "enable": true,
        "value_area": 1000
      }
    },
    "color": {
      "value": color2
    },
    "shape": {
      "type": "circle",
      "stroke": {
        "width": 0,
        "color": color2
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/github.svg",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 1,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 3,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 10,
        "size_min": .1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": color1,
      "opacity": 1,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "none",
      "random": false,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode": "grab"
      },
      "onclick": {
        "enable": false,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 1,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 900,
        "size": 50,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 11,
        "duration": 0.9
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
};

json.particles.line_linked.color = color2;
particlesJS('particles_header', json, function() {});

json.particles.line_linked.color = color1;
json.particles.color.value = color1;
particlesJS('particles_form', json, function() {});

// json.particles.line_linked.color = color1;
// json.particles.color.value = color1;
// particlesJS('particles_modal', json, function() {});