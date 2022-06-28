/**
 * Class representing a text component
 */
class SimplegenTextComponent {
  /**
   * Create a SimplegenTextComponent
   * @param {Sting} text Component text
   * @param {String} color Text color in hex
   * @param {String} fontFamily Text font family
   * @param {String} fontWeight Text font weight
   * @param {Number} fontSize Text font size
   * @param {Number} letterSpacing Letter Spacing
   */
  constructor(text, color, fontFamily, fontWeight, fontSize, letterSpacing = 0) {
    this.text = text;
    this.color = color;
    this.fontFamily = fontFamily;
    this.fontWeight = fontWeight;
    this.fontSize = fontSize;
    this.letterSpacing = letterSpacing;
  }

  /**
   * Get text with the letter spacing
   * @returns {String} Text with letter spacing
   */
  getText() {
    return this.text.split("").join((String.fromCharCode(8202)).repeat(this.letterSpacing));
  }

  /**
   * Get CSS font property
   * @returns {String} CSS font property
   */
  getFont() {
    return this.fontWeight + " " + this.fontSize + "px " + this.fontFamily;
  }
}

/* DEFAULT PARAMETERS */
var canvas_logo = document.getElementById("logo-canvas");
canvas_logo.width = 5;
canvas_logo.height = 5;
var ctx_logo = canvas_logo.getContext("2d");

var canvas_fav = document.getElementById("fav-canvas");
canvas_fav.width = 5;
canvas_fav.height = 5;
var ctx_fav = canvas_fav.getContext("2d");

let icon = new SimplegenTextComponent(
  window
    .getComputedStyle(document.querySelector("#icp-component i"), ":before")
    .content.replace(/['"]/g, ""),
  "#000000",
  window.getComputedStyle(
    document.querySelector("#icp-component i")
  ).fontFamily,
  window.getComputedStyle(
    document.querySelector("#icp-component i")
  ).fontWeight,
  48
);
let main = new SimplegenTextComponent("", "#000000", "Arial", "bold", 48);
let accent = new SimplegenTextComponent("", "#cccccc", "Arial", "bold", 48);

var components ={
  icon: icon,
  main: main,
  accent: accent
};

const padding = new Object();
padding.width = 7;
padding.height = 7;
padding.internal = new Object();
padding.internal.x = 3;
padding.internal.y = 5;
Object.freeze(padding);

var off_1 = 0;
var layout = "HORIZONTAL";
var shapes = true;
var offset_clr = "#f2f2f2";

/* SETTINGS */
$('.widget[role="md2html"]').each(function (_index, widget) {
  var request = new XMLHttpRequest();
  request.open("GET", $(widget).attr("data-widget"), true);
  request.send(null);
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      var converter = new showdown.Converter();
      $(widget).html(converter.makeHtml(request.responseText));
    }
  };
});

$("#icp").iconpicker({});

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
for (const font of fonts) {
  var opt = document.createElement("option");
  opt.value = opt.innerHTML = font;
  opt.style.fontFamily = font;
  document.getElementById("main_font-select").add(opt.cloneNode(true));
  document.getElementById("accent_font-select").add(opt.cloneNode(true));
}

/* LISTENERS */
$("#icp").on("iconpickerSelected", function (_e) {
  icon.text = window
    .getComputedStyle(document.querySelector("#icp-component i"), ":before")
    .content.replace(/['"]/g, "");
  icon.fontFamily = window.getComputedStyle(
    document.querySelector("#icp-component i")
  ).fontFamily;
  icon.fontWeight = window.getComputedStyle(
    document.querySelector("#icp-component i")
  ).fontWeight;
  render();
});

document.getElementById("main-input").oninput = function () {
  main.text = document.getElementById("main-input").value;
  render();
};

document.getElementById("accent-input").oninput = function () {
  accent.text = document.getElementById("accent-input").value;
  render();
};

document.getElementById("offset-btn").onclick = function () {
  if (off_1 !== 3) {
    off_1 = 3;
  } else {
    off_1 = 0;
  }
  render();
};

document.getElementById("compliment_color-btn").onclick = function () {
  main.color = document.getElementById("main-clr").value;
  accent.color = hexToComplimentary(main.color);
  document.getElementById("accent-clr").value = accent.color;
  render();
};

document.getElementById("layout-btn").onclick = function () {
  if (layout.toUpperCase() == "HORIZONTAL") {
    layout = "VERTICAL";
    accent.fontSize = 12;
  } else {
    layout = "HORIZONTAL";
    accent.fontSize = 48;
  }
  render();
};

document.getElementById("main_weight-btn").onclick = function () {
  if (main.fontWeight == "normal") {
    main.fontWeight = "bold";
  } else {
    main.fontWeight = "normal";
  }
  render();
};

document.getElementById("accent_weight-btn").onclick = function () {
  if (accent.fontWeight == "normal") {
    accent.fontWeight = "bold";
  } else {
    accent.fontWeight = "normal";
  }
  render();
};

document.getElementById("shapes-btn").onclick = function () {
  if (shapes) {
    shapes = false;
  } else {
    shapes = true;
  }
  render();
};

document.getElementById("main-clr").oninput = function () {
  main.color = document.getElementById("main-clr").value;
  render();
};

document.getElementById("accent-clr").oninput = function () {
  accent.color = document.getElementById("accent-clr").value;
  render();
};

document.getElementById("offset-clr").oninput = function () {
  offset_clr = document.getElementById("offset-clr").value;
  render();
};

document.getElementById("icon-clr").oninput = function () {
  icon.color = document.getElementById("icon-clr").value;
  render();
};

document.getElementById("icon-sz").oninput = function () {
  icon.fontSize = parseInt(document.getElementById("icon-sz").value);
  render();
};

$('input[type="range"][data-param="letter_space"]').on('input',function(_e){
  components[$(this).attr('data-component')].letterSpacing = $(this).val();
  $(this).siblings('.input-group-append[data-display="value"]').children('span').html($(this).val());
  render();
});

document.getElementById("main_font-select").oninput = function () {
  main.fontFamily = document.getElementById("main_font-select").value;
  setSelectFont(document.getElementById("main_font-select"));
  render();
};

document.getElementById("accent_font-select").oninput = function () {
  accent.fontFamily = document.getElementById("accent_font-select").value;
  setSelectFont(document.getElementById("accent_font-select"));
  render();
};

document
  .getElementById("fav_download-btn")
  .addEventListener("click", function (_e) {
    exportCanva(
      document.getElementById("fav_download-btn"),
      canvas_fav,
      "favicon",
      renderFav
    );
  });

document
  .getElementById("logo_download-btn")
  .addEventListener("click", function (_e) {
    exportCanva(
      document.getElementById("logo_download-btn"),
      canvas_logo,
      "logo",
      renderLogo
    );
  });

/* FUNCTIONS */
/**
 * Set the selected font family to the selector
 * @param {HTMLSelectElement} select : HTML select element to change font family
 */
function setSelectFont(select) {
  select.style.fontFamily = select.value;
}

/**
 * Render favicon and logo canvas
 */
function render() {
  document.fonts.ready.then((_) => {
    renderFav(ctx_fav, canvas_fav);
    renderLogo(ctx_logo, canvas_logo);
  });
}

/**
 * Render favicon
 * @param {CanvasRenderingContext2D} ctx : Context for drawing favicon
 * @param {HTMLCanvasElement} canvas : Painting canvas element
 */
function renderFav(ctx, canvas) {
  ctx.font = icon.getFont();
  canvas.width = ctx.measureText(icon.text).width + 2 * padding.width;
  canvas.height = icon.fontSize + 2 * padding.height;
  ctx.textBaseline = "middle";
  ctx.font = icon.getFont();
  ctx.fillStyle = icon.color;
  ctx.fillText(icon.text, padding.width, canvas.height / 2);
}

/**
 * Render logo
 * @param {CanvasRenderingContext2D} ctx : Context for drawing logo
 * @param {HTMLCanvasElement} canvas : Painting canvas element
 */
function renderLogo(ctx, canvas) {
  if (layout.toUpperCase() == "HORIZONTAL") {
    renderLogoHorizontal(ctx, canvas);
  } else {
    renderLogoVertical(ctx, canvas);
  }
}

/**
 * Render Logo in horizontal layout
 * @param {CanvasRenderingContext2D} ctx : Context for drawing logo
 * @param {HTMLCanvasElement} canvas : Painting canvas element
 */
function renderLogoHorizontal(ctx, canvas) {
  ctx.font = icon.getFont();
  var icon_w = ctx.measureText(icon.text).width;

  ctx.font = main.getFont();
  var main_w = ctx.measureText(main.getText()).width;

  ctx.font = accent.getFont();
  var accent_w = ctx.measureText(accent.getText()).width;

  var max_h = Math.max(icon.fontSize, main.fontSize, accent.fontSize);
  var icon_start = padding.width;
  var main_start =
    icon_start + icon_w + (main.text != "" ? padding.internal.x : 0);
  var accent_start =
    main_start +
    main_w +
    (accent.text != "" ? padding.internal.x : 0) +
    (accent.text != "" && shapes ? 2 * padding.internal.x : 0);

  canvas.width =
    icon_w +
    (main.text != "" ? padding.internal.x : 0) +
    main_w +
    (accent.text != "" ? padding.internal.x : 0) +
    (accent.text != "" && shapes ? 4 * padding.internal.x : 0) +
    accent_w +
    2 * padding.width;
  canvas.height =
    max_h +
    (accent.text != "" && shapes ? 2 * padding.internal.y : 0) +
    2 * padding.height;

  var baseline = canvas.height / 2;
  ctx.textBaseline = "middle";

  // Offset drawing
  if (off_1 == 3) {
    ctx.font = icon.getFont();
    ctx.fillStyle = offset_clr;
    ctx.fillText(icon.text, icon_start + off_1, baseline + off_1);

    ctx.font = main.getFont();
    ctx.fillStyle = offset_clr;
    ctx.fillText(main.getText(), main_start + off_1, baseline + off_1);

    if (!shapes) {
      ctx.font = accent.getFont();
      ctx.fillStyle = offset_clr;
      ctx.fillText(accent.getText(), accent_start + off_1, baseline + off_1);
    }
  }

  // Shape Drawing
  if (accent.text != "" && shapes) {
    ctx.strokeStyle = main.color;
    ctx.fillStyle = main.color;
    var pos = new Object();
    pos.x = accent_start - 2 * padding.internal.x;
    pos.y = padding.height;
    var dim = new Object();
    dim.width = accent_w + 4 * padding.internal.x;
    dim.height = canvas.height - 2 * padding.height;
    roundRect(ctx, pos, dim, 5, true, true);
  }

  // Text drawing
  ctx.font = icon.getFont();
  ctx.fillStyle = icon.color;
  ctx.fillText(icon.text, icon_start, baseline);

  ctx.font = main.getFont();
  ctx.fillStyle = main.color;
  ctx.fillText(main.getText(), main_start, baseline);

  ctx.font = accent.getFont();
  ctx.fillStyle = accent.color;
  ctx.fillText(accent.getText(), accent_start, baseline);
}

/**
 * Render Logo in vertical layout
 * @param {CanvasRenderingContext2D} ctx : Context for drawing logo
 * @param {HTMLCanvasElement} canvas : Painting canvas element
 */
function renderLogoVertical(ctx, canvas) {
  ctx.font = icon.getFont();
  var icon_w = ctx.measureText(icon.text).width;

  ctx.font = main.getFont();
  var main_w = ctx.measureText(main.getText()).width;

  ctx.font = accent.getFont();
  var accent_w = ctx.measureText(accent.getText()).width;

  var max_w = Math.max(icon_w, main_w, accent_w);
  var center = (max_w + 2 * padding.width) / 2;

  var icon_start = padding.height + icon.fontSize / 2;
  var main_start =
    icon_start + icon.fontSize / 2 + padding.internal.y + main.fontSize / 2;
  var accent_start =
    main_start + main.fontSize / 2 + padding.internal.y + accent.fontSize / 2;

  canvas.width = max_w + 2 * padding.width;
  canvas.height =
    icon.fontSize +
    padding.internal.y +
    main.fontSize +
    padding.internal.y +
    accent.fontSize +
    2 * padding.height;

  ctx.textAlign = "center";
  ctx.textBaseline = "middle";

  // Shape drawing
  if (accent.text != "" && shapes) {
    ctx.strokeStyle = main.color;
    ctx.moveTo(
      center - main_w / 2,
      main_start + main.fontSize / 2 + padding.internal.y / 2
    );
    ctx.lineTo(
      center + main_w / 2,
      main_start + main.fontSize / 2 + padding.internal.y / 2
    );
    ctx.lineWidth = 2;
    ctx.stroke();
  }

  // Offset Drawing
  if (off_1 == 3) {
    ctx.font = icon.getFont();
    ctx.fillStyle = offset_clr;
    ctx.fillText(icon.text, center + off_1, icon_start + off_1);

    ctx.font = main.getFont();
    ctx.fillStyle = offset_clr;
    ctx.fillText(main.getText(), center + off_1, main_start + off_1);

    ctx.font = accent.getFont();
    ctx.fillStyle = offset_clr;
    ctx.fillText(accent.getText(), center + off_1, accent_start + off_1);
  }

  // Text Drawing
  ctx.font = icon.getFont();
  ctx.fillStyle = icon.color;
  ctx.fillText(icon.text, center, icon_start);

  ctx.font = main.getFont();
  ctx.fillStyle = main.color;
  ctx.fillText(main.getText(), center, main_start);

  ctx.font = accent.getFont();
  ctx.fillStyle = accent.color;
  ctx.fillText(accent.getText(), center, accent_start);
}

/**
 * Draws a rounded rectangle using the current state of the canvas.
 * If you omit the last three params, it will draw a rectangle
 * outline with a 5 pixel border radius
 * @author Juan Mendes (https://stackoverflow.com/a/3368118)
 * @param {CanvasRenderingContext2D} ctx
 * @param {Object} position coordinates for the top left corner
 * @param {Number} [position.x] The top left x coordinate
 * @param {Number} [position.y] The top left y coordinate
 * @param {Object} dimention rectangle dimentions
 * @param {Number} [dimention.width] The width of the rectangle
 * @param {Number} [dimention.height] The height of the rectangle
 * @param {Number} [radius = 5] The corner radius; It can also be an object
 *                 to specify different radius for corners
 * @param {Number} [radius.tl = 0] Top left
 * @param {Number} [radius.tr = 0] Top right
 * @param {Number} [radius.br = 0] Bottom right
 * @param {Number} [radius.bl = 0] Bottom left
 * @param {Boolean} [fill = false] Whether to fill the rectangle.
 * @param {Boolean} [stroke = true] Whether to stroke the rectangle.
 */
function roundRect(
  ctx,
  position,
  dimention,
  radius = 5,
  fill = false,
  stroke = true
) {
  if (typeof radius === "number") {
    radius = { tl: radius, tr: radius, br: radius, bl: radius };
  } else {
    radius = { ...{ tl: 0, tr: 0, br: 0, bl: 0 }, ...radius };
  }
  ctx.beginPath();
  ctx.moveTo(position.x + radius.tl, position.y);
  ctx.lineTo(position.x + dimention.width - radius.tr, position.y);
  ctx.quadraticCurveTo(
    position.x + dimention.width,
    position.y,
    position.x + dimention.width,
    position.y + radius.tr
  );
  ctx.lineTo(
    position.x + dimention.width,
    position.y + dimention.height - radius.br
  );
  ctx.quadraticCurveTo(
    position.x + dimention.width,
    position.y + dimention.height,
    position.x + dimention.width - radius.br,
    position.y + dimention.height
  );
  ctx.lineTo(position.x + radius.bl, position.y + dimention.height);
  ctx.quadraticCurveTo(
    position.x,
    position.y + dimention.height,
    position.x,
    position.y + dimention.height - radius.bl
  );
  ctx.lineTo(position.x, position.y + radius.tl);
  ctx.quadraticCurveTo(
    position.x,
    position.y,
    position.x + radius.tl,
    position.y
  );
  ctx.closePath();
  if (fill) {
    ctx.fill();
  }
  if (stroke) {
    ctx.stroke();
  }
}

/**
 *
 * @param {HTMLAnchorElement} btn_download : Anchor element for downloading
 * @param {HTMLCanvasElement} canvas : Canvas element to export
 * @param {String} filename : Downloading filename without extension
 * @param {Function} renderFunction : Canvas render function
 */
function exportCanva(btn_download, canvas, filename, renderFunction) {
  var selectFormat = document.getElementById("export_format-select");
  var mimetype = selectFormat.options[selectFormat.selectedIndex].value;
  var extension = selectFormat.options[selectFormat.selectedIndex].text;

  var canvas_temp = canvas.cloneNode(true);
  var ctx_temp;
  var dataURL;
  switch (mimetype) {
    case "image/png":
      dataURL = canvas.toDataURL(mimetype);
      break;
    case "image/webp":
      dataURL = canvas.toDataURL(mimetype);
      break;
    case "image/jpeg":
      ctx_temp = canvas_temp.getContext("2d");
      ctx_temp.fillStyle = "#FFF";
      ctx_temp.fillRect(0, 0, canvas_temp.width, canvas_temp.height);
      ctx_temp.drawImage(canvas, 0, 0);
      dataURL = canvas.toDataURL(mimetype);
      break;
    case "image/svg+xml":
      ctx_temp = new C2S(canvas_temp.width, canvas_temp.height);
      renderFunction(ctx_temp, canvas_temp);
      var svgfonts = "<style>\r\n";
      svgfonts +=
        '@import url("https://fonts.googleapis.com/css?family=Montez|Lobster|Josefin+Sans|Shadows+Into+Light|Pacifico|Amatic+SC:700|Orbitron:400,900|Rokkitt|Righteous|Dancing+Script:700|Bangers|Chewy|Sigmar+One|Architects+Daughter|Abril+Fatface|Covered+By+Your+Grace|Kaushan+Script|Gloria+Hallelujah|Satisfy|Lobster+Two:700|Comfortaa:700|Cinzel|Courgette|Annie+Use+Your+Telescope|Baloo|Bowlby+One+SC|Bungee+Inline|Cabin+Sketch|Caveat|Contrail+One|Damion|Economica|Fascinate+Inline|Faster+One|Fredericka+the+Great|Gabriela|Just+Another+Hand|Kodchasan|Love+Ya+Like+A+Sister|Megrim|Monoton|Mouse+Memoirs|Podkova|Pompiere|Quicksand|Reenie+Beanie|Rokkitt|Six+Caps|Source+Sans+Pro|Special+Elite|Spicy+Rice|VT323|Wire+One");\r\n';
      svgfonts +=
        '@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css");\r\n';
      var svg = ctx_temp
        .getSerializedSvg()
        .replace("<defs/>", svgfonts + "</style>\r\n<defs/>");
      dataURL =
        "data:image/svg+xml;charset=utf-8," +
        encodeURIComponent('<?xml version="1.0" standalone="no"?>\r\n' + svg);
      break;
    default:
      break;
  }
  btn_download.setAttribute("download", filename + "." + extension);
  btn_download.href = dataURL;
}

/**
 * hexToComplimentary : Converts hex value to HSL, shifts
 * hue by 180 degrees and then converts hex, giving complimentary color
 * as a hex value
 * @param  {String} hex : hex value
 * @return {String} : complimentary color as hex value
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
