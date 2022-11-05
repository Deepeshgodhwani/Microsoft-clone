{
  //dropdown //
  let count = 0;
  var dropdown = () => {
    if (count == 0) {
      let element = document.getElementById("dropdown");
      let btn = document.getElementById("dropdown-btn");
      btn.style.backgroundColor = "rgb(242,242,242)";
      btn.style.border = "2px dotted black";
      element.style.display = "block";

      count++;
    } else if (count == 1) {
      let element = document.getElementById("dropdown");
      let btn = document.getElementById("dropdown-btn");
      btn.style.backgroundColor = "white";
      btn.style.border = "none";
      element.style.display = "none";
      count = 0;
    }
    let body = document.getElementById("element-1");
    body.addEventListener("click", function () {
      let element = document.getElementById("dropdown");
      element.style.display = "none";
      let btn = document.getElementById("dropdown-btn");
      btn.style.backgroundColor = "white";
      btn.style.border = "none";
      count = 0;
    });

    window.onresize = function () {
      if (window.innerWidth < 1016) {
        let element = document.getElementById("dropdown");
        element.style.display = "none";
        let btn = document.getElementById("dropdown-btn");
        btn.style.backgroundColor = "white";
        btn.style.border = "none";
        count = 0;
      }
    };
  };

  //menu //
  let toggle = 0;
  var toggleMenu = () => {
    if (toggle == 0) {
      let st1 = document.getElementById("s-1");
      let st2 = document.getElementById("s-2");
      let st3 = document.getElementById("s-3");
      st1.style.rotate = "140deg";
      st1.style.top = "6px";
      st2.style.rotate = "40deg";
      st3.style.display = "none";
      let element = document.getElementById("menu");
      element.style.display = "flex";
      toggle++;
    } else {
      let st1 = document.getElementById("s-1");
      let st2 = document.getElementById("s-2");
      let st3 = document.getElementById("s-3");
      st1.style.rotate = "0deg";
      st1.style.top = "0px";
      st2.style.rotate = "0deg";
      st3.style.display = "block";
      let element = document.getElementById("menu");
      element.style.display = "none";
      toggle = 0;
    }

    window.onresize = function () {
      if (window.innerWidth > 770) {
        let st1 = document.getElementById("s-1");
        let st2 = document.getElementById("s-2");
        let st3 = document.getElementById("s-3");
        st1.style.rotate = "0deg";
        st1.style.top = "0px";
        st2.style.rotate = "0deg";
        st3.style.display = "block";
        let element = document.getElementById("menu");
        element.style.display = "none";
        toggle = 0;
      }
    };
  };
}
