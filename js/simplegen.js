/**
 * Class representing a text component
 */
class SimplegenTextComponent{
  /**
   * Create a SimplegenTextComponent
   * @param {Sting} text Component text
   * @param {String} color Text color in hex
   * @param {String} fontFamily Text font family
   * @param {String} fontWeight Text font weight
   * @param {Number} fontSize Text font size
   */
 constructor(text, color, fontFamily, fontWeight, fontSize){
  this.text = text;
  this.color = color;
  this.fontFamily = fontFamily;
  this.fontWeight = fontWeight;
  this.fontSize = fontSize;
 }

 /**
  * Get CSS font property
  * @returns {String} CSS font property
  */
 getFont() {
  return this.fontWeight + " " + this.fontSize + "px " + this.fontFamily;
 }
}

var canvas_logo = document.getElementById("logo_image");
var canvas_fav = document.getElementById("fav_image");

canvas_logo.width = 5;
canvas_logo.height = 5;
canvas_fav.width = 5;
canvas_fav.height = 5;

var ctx_logo = logo_image.getContext("2d");
var ctx_fav = fav_image.getContext("2d");
let icon = new SimplegenTextComponent(
  window
  .getComputedStyle(document.querySelector("#icp-component i"), ":before")
  .content.replace(/'|"/g, ""),
  "#000000",
  window.getComputedStyle(
    document.querySelector("#icp-component i")
  ).fontFamily,
  window.getComputedStyle(
    document.querySelector("#icp-component i")
  ).fontWeight,
  48
);
let main = new SimplegenTextComponent(
  "",
  "#000000",
  "Arial",
  "bold",
  48
);
let accent = new SimplegenTextComponent(
  "",
  "#cccccc",
  "Arial",
  "bold",
  48
);
var off_1 = 0;
var layout = 'HORIZONTAL';
var shapes = true;
var off_clr = "#f2f2f2";
var l_sp = 0;

var margin_w = 15;
var margin_h = 30;

$("#icp").iconpicker({});
$("#icp").on("iconpickerSelected", function (e) {
  icon.text = window
    .getComputedStyle(document.querySelector("#icp-component i"), ":before")
    .content.replace(/'|"/g, "");
    icon.fontFamily = window.getComputedStyle(
    document.querySelector("#icp-component i")
  ).fontFamily;
  icon.fontWeight = window.getComputedStyle(
    document.querySelector("#icp-component i")
  ).fontWeight;
  render();
});

document.getElementById("txt").oninput = function () {
  main.text = document.getElementById("txt").value;
  render();
};

document.getElementById("txt2").oninput = function () {
  accent.text = document.getElementById("txt2").value;
  render();
};

document.getElementById("fx1").onclick = function () {
  if (off_1 !== 3) {
    off_1 = 3;
    
  } else {
    off_1 = 0;
  }
  render();
};

document.getElementById("fx2").onclick = function () {
  main.color = document.getElementById("clr").value;
  accent.color = hexToComplimentary(main.color);
  document.getElementById("clr2").value = accent.color;
  render();
};

document.getElementById("fx4").onclick = function () {
  if (layout.toUpperCase() == 'HORIZONTAL') {
    layout = 'VERTICAL';
    document.getElementById("l_sp").hidden = false;
    accent.fontSize = 12;
  } else {
    layout = 'HORIZONTAL';
    document.getElementById("l_sp").hidden = true;
    accent.fontSize = 48;
  }
  render();
};

document.getElementById("m_bold").onclick = function () {
  if (main.fontWeight == "normal") {
    main.fontWeight = "bold";
  } else {
    main.fontWeight = "normal";
  }
  render();
};

document.getElementById("a_bold").onclick = function () {
  if (accent.fontWeight == "normal") {
    accent.fontWeight = "bold";
  } else {
    accent.fontWeight = "normal";
  }
  render();
};

document.getElementById("fx5").onclick = function () {
  if (shapes) {
    shapes = false;
  } else {
    shapes = true;
  }
  render();
};

document.getElementById("clr").oninput = function () {
  main.color = document.getElementById("clr").value;
  render();
};

document.getElementById("clr2").oninput = function () {
  accent.color = document.getElementById("clr2").value;
  render();
};

document.getElementById("off_clr").oninput = function () {
  off_clr = document.getElementById("off_clr").value;
  render();
};

document.getElementById("ico_clr").oninput = function () {
  icon.color = document.getElementById("ico_clr").value;
  render();
};

document.getElementById("ico_sz").oninput = function () {
  icon.fontSize = document.getElementById("ico_sz").value;
  render();
};

document.getElementById("l_sp").oninput = function () {
  l_sp = document.getElementById("l_sp").value;
  render();
};

var fonts = [
  "Arial",
  "Montez",
  "Lobster",
  "Josefin Sans",
  "Shadows Into Light",
  "Pacifico",
  "Amatic SC",
  "Orbitron",
  "Rokkitt",
  "Righteous",
  "Dancing Script",
  "Bangers",
  "Chewy",
  "Sigmar One",
  "Architects Daughter",
  "Abril Fatface",
  "Covered By Your Grace",
  "Kaushan Script",
  "Gloria Hallelujah",
  "Satisfy",
  "Lobster Two",
  "Comfortaa",
  "Cinzel",
  "Courgette",
  "Annie Use Your Telescope",
  "Baloo",
  "Bowlby One SC",
  "Bungee Inline",
  "Cabin Sketch",
  "Caveat",
  "Contrail One",
  "Damion",
  "Economica",
  "Fascinate Inline",
  "Faster One",
  "Fredericka the Great",
  "Gabriela",
  "Just Another Hand",
  "Kodchasan",
  "Love Ya Like A Sister",
  "Megrim",
  "Monoton",
  "Mouse Memoirs",
  "Podkova",
  "Pompiere",
  "Quicksand",
  "Reenie Beanie",
  "Rokkitt",
  "Six Caps",
  "Source Sans Pro",
  "Special Elite",
  "Spicy Rice",
  "VT323",
  "Wire One",
];
var string = "";
var select = document.getElementById("select");
var select2 = document.getElementById("select2");
for (var a = 0; a < fonts.length; a++) {
  var opt = document.createElement("option");
  opt.value = opt.innerHTML = fonts[a];
  opt.style.fontFamily = fonts[a];
  select.add(opt);
}
for (var a = 0; a < fonts.length; a++) {
  var opt = document.createElement("option");
  opt.value = opt.innerHTML = fonts[a];
  opt.style.fontFamily = fonts[a];
  select2.add(opt);
}

document.getElementById("select").oninput = function () {
  main.fontFamily = document.getElementById("select").value;
  fontChange();
  render();
};

document.getElementById("select2").oninput = function () {
  accent.fontFamily = document.getElementById("select2").value;
  fontChange2();
  render();
};

function fontChange() {
  var x = document.getElementById("select").selectedIndex;
  var y = document.getElementById("select").options;
  document.body.insertAdjacentHTML(
    "beforeend",
    "<style> #text{ font-family:'" +
      y[x].text +
      "';}" +
      "#select{font-family:'" +
      y[x].text +
      "';</style>"
  );
}

function fontChange2() {
  var x = document.getElementById("select2").selectedIndex;
  var y = document.getElementById("select2").options;
  document.body.insertAdjacentHTML(
    "beforeend",
    "<style> #text{ font-family:'" +
      y[x].text +
      "';}" +
      "#select2{font-family:'" +
      y[x].text +
      "';</style>"
  );
}

/**
 * Render favicon and logo canvas
 */
function render() {
  document.fonts.ready.then((_) => {
    renderFav(ctx_fav , canvas_fav);
    if (layout.toUpperCase() == "HORIZONTAL") {
      renderLogoHorizontal(ctx_logo, canvas_logo);
    } else {
      renderLogoVertical(ctx_logo, canvas_logo);
    }
  });
}

/**
 * Render favicon
 * @param {CanvasRenderingContext2D} ctx : Context for drawing favicon
 * @param {HTMLCanvasElement} canvas : Painting canvas element
 */
function renderFav(ctx, canvas) {
  ctx.font =  icon.getFont();
  canvas.width = ctx.measureText(icon.text).width + 5;
  canvas.height = 58;
  ctx.font = icon.getFont();
  ctx.fillStyle = icon.color;
  ctx.fillText(icon.text, 0, 48);
}

/**
 * Render Logo in horizontal layout
 * @param {CanvasRenderingContext2D} ctx : Context for drawing logo
 * @param {HTMLCanvasElement} canvas : Painting canvas element
 */
function renderLogoHorizontal(ctx, canvas) {
  document.fonts.ready.then((_) => {
    ctx.font =  icon.getFont();
    var ico_w = ctx.measureText(icon.text).width;
    var ico_h = parseInt(icon.fontSize, 10);

    ctx.font = main.getFont();
    var txt_w = ctx.measureText(main.text).width;
    var txt_h = parseInt(ctx.font.match(/\d+/), 10);

    ctx.font = accent.getFont();
    var txt2_w = ctx.measureText(accent.text).width;
    var txt2_h = parseInt(ctx.font.match(/\d+/), 10);

    var max_h = Math.max(ico_h, txt_h, txt2_h);
    var start_ico = max_h;
    var start_txt = max_h - 2;

    canvas.width = ico_w + txt_w + txt2_w + margin_w;
    canvas.height = max_h + margin_h;

    if (off_1 == 3) {
      ctx.font =  icon.getFont();
      ctx.fillStyle = off_clr;
      ctx.fillText(icon.text, off_1, start_ico + off_1);
      ctx.font = main.getFont();
      ctx.fillStyle = off_clr;
      ctx.fillText(main.text, ico_w + off_1, start_txt + off_1);
    }

    if (off_1 == 3 && !shapes) {
      ctx.font = accent.getFont();
      ctx.fillStyle = off_clr;
      ctx.fillText(accent.text, ico_w + 0 + txt_w + 5 + off_1, start_txt + off_1);
    }

    ctx.font =  icon.getFont();
    ctx.fillStyle = icon.color;
    ctx.fillText(icon.text, 0, start_ico);
    ctx.font = main.getFont();
    ctx.fillStyle = main.color;
    ctx.fillText(main.text, ico_w, start_txt);

    if (accent.text != "" && shapes) {
      ctx.strokeStyle = main.color;
      ctx.moveTo(ico_w + 0 + txt_w + 2, start_txt + margin_h / 2 - 3);
      ctx.lineTo(ico_w + 0 + txt_w + 2, start_txt + margin_h / 2 - 3 - txt2_h);
      ctx.arcTo(
        ico_w + 0 + txt_w + 2,
        start_txt + margin_h / 2 - 3 - txt2_h - 3,
        ico_w + 0 + txt_w + 5,
        start_txt + margin_h / 2 - 3 - txt2_h - 3,
        3
      );
      ctx.lineTo(
        ico_w + 0 + txt_w + 2 + txt2_w + 3,
        start_txt + margin_h / 2 - 3 - txt2_h - 3
      );
      ctx.arcTo(
        ico_w + 0 + txt_w + 2 + txt2_w + 6,
        start_txt + margin_h / 2 - 3 - txt2_h - 3,
        ico_w + 0 + txt_w + 2 + txt2_w + 6,
        start_txt + margin_h / 2 - 3 - txt2_h,
        3
      );
      ctx.lineTo(
        ico_w + 0 + txt_w + 2 + txt2_w + 6,
        start_txt + margin_h / 2 - 3
      );
      ctx.arcTo(
        ico_w + 0 + txt_w + 2 + txt2_w + 6,
        start_txt + margin_h / 2 - 3 + 3,
        ico_w + 0 + txt_w + 2 + txt2_w + 3,
        start_txt + margin_h / 2 - 3 + 3,
        3
      );
      ctx.lineTo(ico_w + 0 + txt_w + 5, start_txt + margin_h / 2 - 3 + 3);
      ctx.arcTo(
        ico_w + 0 + txt_w + 2,
        start_txt + margin_h / 2 - 3 + 3,
        ico_w + 0 + txt_w + 2,
        start_txt + margin_h / 2 - 3,
        3
      );
      ctx.lineWidth = 3;
      ctx.stroke();
      ctx.fillStyle =  main.color;
      ctx.fillRect(
        ico_w + 0 + txt_w + 2,
        start_txt + margin_h / 2 - 3 - txt2_h - 3,
        txt2_w + 6,
        txt2_h + 6
      );
    }

    ctx.font = accent.getFont();
    ctx.fillStyle =  accent.color;
    ctx.fillText(accent.text, ico_w + 0 + txt_w + 5, start_txt);
  });
}

/**
 * Render Logo in vertical layout
 * @param {CanvasRenderingContext2D} ctx : Context for drawing logo
 * @param {HTMLCanvasElement} canvas : Painting canvas element
 */
function renderLogoVertical(ctx, canvas) {
  document.fonts.ready.then((_) => {
    canvas.style.letterSpacing = 0 + "px";
    ctx.font =  icon.getFont();
    var ico_w = ctx.measureText(icon.text).width;
    var ico_h = parseInt(icon.fontSize, 10);

    ctx.font = main.getFont();
    var txt_w = ctx.measureText(main.text).width;
    var txt_h = parseInt(ctx.font.match(/\d+/), 10);

    ctx.font = accent.getFont();
    var txt2_w = ctx.measureText(accent.text).width;
    var txt2_h = parseInt(ctx.font.match(/\d+/), 10);

    var max_w = Math.max(ico_w, txt_w, txt2_w);
    var center = (max_w + margin_w) / 2;

    canvas.width = max_w + margin_w;
    canvas.height = ico_h + txt_h + txt2_h + margin_h;

    ctx.textAlign = "center";

    if (off_1 == 3) {
      ctx.font =  icon.getFont();
      ctx.fillStyle = off_clr;
      ctx.fillText(icon.text, center + off_1, ico_h + off_1);
      ctx.font = main.getFont();
      ctx.fillStyle = off_clr;
      ctx.fillText(main.text, center + off_1, ico_h + 5 + txt_h + off_1);
    }
    ctx.font =  icon.getFont();
    ctx.fillStyle = icon.color;
    ctx.fillText(icon.text, center, ico_h);
    canvas.style.letterSpacing = 0 + "px";
    ctx.font = main.getFont();
    ctx.fillStyle =  main.color;
    ctx.fillText(main.text, center, ico_h + 5 + txt_h);

    if (accent.text != "" && shapes) {
      ctx.strokeStyle =  main.color;
      ctx.moveTo(center - txt_w / 2, ico_h + 10 + txt_h + margin_h / 2);
      ctx.lineTo(center + txt_w / 2, ico_h + 10 + txt_h + margin_h / 2);
      ctx.lineWidth = 2;
      ctx.stroke();
    }
    if (off_1 == 3) {
      canvas.style.letterSpacing =
        document.getElementById("l_sp").value + "px";
      ctx.font = accent.getFont();
      ctx.fillStyle = off_clr;
      ctx.fillText(
        accent.text,
        center + off_1,
        ico_h + 5 + txt_h + 5 + txt2_h + off_1 + margin_h / 2
      );
    }
    canvas.style.letterSpacing =
      document.getElementById("l_sp").value + "px";
    ctx.font = accent.getFont();
    ctx.fillStyle = accent.color;
    ctx.fillText(accent.text, center, ico_h + 5 + txt_h + 5 + txt2_h + margin_h / 2);
    l_sp = 0;
  });
}

var btn_download_fav = document.getElementById("fav-download");
btn_download_fav.addEventListener(
  "click",function (e) {
    exportCanva(btn_download_fav, canvas_fav, "favicon"); 
  }
);
var btn_download_logo = document.getElementById("logo-download");
btn_download_logo.addEventListener(
  "click",
  function (e) {
    exportCanva(btn_download_logo, canvas_logo, "logo")
  }
);
function exportCanva(btn_download,canvas, filename) {
  var selectFormat = document.getElementById("selectFormat");
  var mimetype = selectFormat.options[selectFormat.selectedIndex].value;
  var extension = selectFormat.options[selectFormat.selectedIndex].text;
  switch (mimetype) {
    case "image/png":
      break;
    case "image/webp":
      break;
    case "image/jpeg":
      var canvas_temp = canvas.cloneNode(true);
      var ctx_temp = canvas_temp.getContext('2d');
      ctx_temp.fillStyle = '#FFF';
      ctx_temp.fillRect(0,0,canvas_temp.width,canvas_temp.height);
      ctx_temp.drawImage(canvas, 0, 0);
      canvas = canvas_temp;
      break;
    default:
      break;
  }
  btn_download.setAttribute("download", filename + "." + extension);
  btn_download.href = dataURL;
}

/* hexToComplimentary : Converts hex value to HSL, shifts
 * hue by 180 degrees and then converts hex, giving complimentary color
 * as a hex value
 * @param  [String] hex : hex value
 * @return [String] : complimentary color as hex value
 */
function hexToComplimentary(hex) {
  // Convert hex to rgb
  // Credit to Denis http://stackoverflow.com/a/36253499/4939630
  var rgb =
    "rgb(" +
    (hex = hex.replace("#", ""))
      .match(new RegExp("(.{" + hex.length / 3 + "})", "g"))
      .map(function (l) {
        return parseInt(hex.length % 2 ? l + l : l, 16);
      })
      .join(",") +
    ")";

  // Get array of RGB values
  rgb = rgb.replace(/[^\d,]/g, "").split(",");

  var r = rgb[0],
    g = rgb[1],
    b = rgb[2];

  // Convert RGB to HSL
  // Adapted from answer by 0x000f http://stackoverflow.com/a/34946092/4939630
  r /= 255.0;
  g /= 255.0;
  b /= 255.0;
  var max = Math.max(r, g, b);
  var min = Math.min(r, g, b);
  var h,
    s,
    l = (max + min) / 2.0;

  if (max == min) {
    h = s = 0; //achromatic
  } else {
    var d = max - min;
    s = l > 0.5 ? d / (2.0 - max - min) : d / (max + min);

    if (max == r && g >= b) {
      h = (1.0472 * (g - b)) / d;
    } else if (max == r && g < b) {
      h = (1.0472 * (g - b)) / d + 6.2832;
    } else if (max == g) {
      h = (1.0472 * (b - r)) / d + 2.0944;
    } else if (max == b) {
      h = (1.0472 * (r - g)) / d + 4.1888;
    }
  }

  h = (h / 6.2832) * 360.0 + 0;

  // Shift hue to opposite side of wheel and convert to [0-1] value
  h += 180;
  if (h > 360) {
    h -= 360;
  }
  h /= 360;

  // Convert h s and l values into r g and b values
  // Adapted from answer by Mohsen http://stackoverflow.com/a/9493060/4939630
  if (s === 0) {
    r = g = b = l; // achromatic
  } else {
    var hue2rgb = function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    var p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  r = Math.round(r * 255);
  g = Math.round(g * 255);
  b = Math.round(b * 255);

  // Convert r b and g values to hex
  rgb = b | (g << 8) | (r << 16);
  return "#" + (0x1000000 | rgb).toString(16).substring(1);
}
