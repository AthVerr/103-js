// SET UP
var a_canvas = document.getElementById("slow-loris");
var ctx = a_canvas.getContext("2d");

const COLORS = {
    NECK: "rgb(145, 99, 47)",
    OUTEREYE: "rgb(145, 99, 47)",
    FACE:"rgb(195, 146, 85)",
    INNERNOSE:"rgb(145, 99, 47)",
    OUTERNOSE: "rgb(214, 196, 152)",
    EYE: "rgb(84, 51, 28)",
    EARS: "rgb(207, 6, 92)",
    EARCURVE: "rgb(239, 71, 124)",
  };

// NECK
ctx.beginPath();
ctx.moveTo(450, 367);
ctx.lineTo(450, 551);
ctx.lineTo(100, 551);
ctx.lineTo(100, 367);
ctx.lineTo(450, 367);
ctx.closePath();
ctx.fillStyle = COLORS.NECK;
ctx.fill();

// FACE
ctx.beginPath();
ctx.arc(276, 327, 180, 0, 2 * Math.PI);
ctx.moveTo(238, 151);
ctx.lineTo(275, 126);
ctx.lineTo(317, 151);
ctx.lineTo(238, 151);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// OUTER NOSE
ctx.beginPath();
ctx.arc(276, 480, 56, 0, 2 * Math.PI);
ctx.fillStyle = COLORS.OUTERNOSE;
ctx.fill();

// INNER NOSE
ctx.beginPath();
ctx.arc(276, 490, 28, 0, 2 * Math.PI);
ctx.fillStyle = COLORS.INNERNOSE;
ctx.fill();

// OUTER RIGHT EYE
ctx.beginPath();
ctx.ellipse(192, 364, 60, 75, 10 * Math.PI/180, 0, 2 * Math.PI);
ctx.fillStyle = COLORS.OUTEREYE;
ctx.fill();

// OUTER LEFT EYE
ctx.beginPath();
ctx.ellipse(364, 364, 60, 75, 50, 0, Math.PI*2);
ctx.fillStyle = COLORS.OUTEREYE;
ctx.fill();

// LEFT INNER EYE
ctx.beginPath();
ctx.arc(188, 371, 35, 0, 2 * Math.PI);
ctx.fillStyle = COLORS.EYE;
ctx.fill();

// RIGHT INNER EYE
ctx.beginPath();
ctx.arc(363, 371, 35, 0, 2 * Math.PI);
ctx.fillStyle = COLORS.EYE;
ctx.fill();

// RIGHT EAR
ctx.beginPath();
ctx.moveTo(117, 243);
ctx.lineTo(124, 174);
ctx.lineTo(135, 219);
ctx.lineTo(117, 243);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

// RIGHT EAR CURVE
ctx.beginPath();
ctx.moveTo(124, 176);
ctx.bezierCurveTo(124, 176, 10, 170, 110, 270);
ctx.moveTo(139, 217);
ctx.lineTo(124, 176);
ctx.lineTo(102, 277);
ctx.fillStyle= COLORS.EARCURVE;
ctx.fill();

// RIGHT EAR
ctx.beginPath();
ctx.moveTo(118, 243);
ctx.lineTo(124, 176);
ctx.lineTo(135, 219);
ctx.lineTo(118, 243);
ctx.fillStyle= COLORS.EARS;
ctx.fill();

// LEFT EAR CURVE
ctx.beginPath();
ctx.moveTo(427, 176);
ctx.bezierCurveTo(427, 176, 530, 170, 452, 278);
ctx.moveTo(427, 176);
ctx.lineTo(452, 278);
ctx.lineTo(433, 243);
ctx.fillStyle= COLORS.EARCURVE;
ctx.fill();

// LEFT EAR
ctx.beginPath();
ctx.moveTo(433, 243);
ctx.lineTo(413, 218);
ctx.lineTo(427, 176);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();
