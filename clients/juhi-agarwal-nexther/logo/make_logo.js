// Rebuilds the Production X mark + wordmark as vector, then rasterises to PNG
// so the same asset can be embedded in both the HTML deck and the PPTX.
const sharp = require("sharp");
const fs = require("fs");

const GOLD_A = "#E3C77B", GOLD_B = "#C9962F";

function svg({ markLight, textColor, ruleColor, subColor }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1600" height="380" viewBox="0 0 1600 380">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0" stop-color="${GOLD_A}"/><stop offset="1" stop-color="${GOLD_B}"/>
    </linearGradient>
  </defs>
  <g transform="translate(40,40)">
    <!-- chevron (left half of the X) -->
    <path d="M2,6 L74,6 L176,152 L74,298 L2,298 L104,152 Z" fill="${markLight}"/>
    <!-- upper gold wedge -->
    <path d="M130,6 L320,6 L206,158 Z" fill="url(#g)"/>
    <!-- lower gold wedge -->
    <path d="M206,158 L286,298 L140,298 Z" fill="url(#g)"/>
  </g>
  <g>
    <text x="470" y="176" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
      font-size="98" letter-spacing="17" fill="${textColor}" font-weight="300">PRODUCTION X</text>
    <rect x="474" y="218" width="1040" height="3" fill="${ruleColor}"/>
    <text x="478" y="318" font-family="Helvetica Neue, Helvetica, Arial, sans-serif"
      font-size="62" letter-spacing="21" fill="${subColor}" font-weight="300">CREATIVE STUDIO</text>
  </g>
</svg>`;
}

const variants = {
  "logo-on-dark.png": svg({ markLight: "#F4F1EC", textColor: "#FFFFFF", ruleColor: "#C9962F", subColor: "#D9A441" }),
  "logo-on-light.png": svg({ markLight: "#141414", textColor: "#2B1620", ruleColor: "#C9962F", subColor: "#B98A2C" }),
};

(async () => {
  for (const [name, s] of Object.entries(variants)) {
    fs.writeFileSync(__dirname + "/" + name.replace(".png", ".svg"), s);
    await sharp(Buffer.from(s)).resize({ width: 1600 }).png().toFile(__dirname + "/" + name);
    console.log("wrote", name);
  }
})();
