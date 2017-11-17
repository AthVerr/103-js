// SET UP
const canvas = document.getElementById('hare');
const ctx = canvas.getContext('2d');

const COLORS = {
  NECK: '#6c4d36',
  FACE: '#91632f',
  FACEPARTS: '#c39255',
  EYES: '#231f20',
  EARS: '#be7732',
  MOUTH: '#54331c',
  LINES: '#c08f50',
  NOSE: '#f7eecd'
};

// NECK
ctx.beginPath();
ctx.moveTo(175, 498);
ctx.lineTo(373, 498);
ctx.lineTo(353, 398);
ctx.lineTo(306, 423);
ctx.lineTo(242, 423);
ctx.lineTo(193, 398);
ctx.lineTo(175, 498);
ctx.closePath();
ctx.fillStyle = COLORS.NECK;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(213, 259);
ctx.arc(213, 259, 16, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(335, 261);
ctx.arc(335, 261, 16, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(192, 398);
ctx.lineTo(184, 357);
ctx.lineTo(217, 274);
ctx.lineTo(333, 274);
ctx.lineTo(365, 357);
ctx.lineTo(355, 398);
ctx.lineTo(306, 423);
ctx.lineTo(242, 423);
ctx.lineTo(192, 398);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// FACE PARTS
ctx.beginPath();
ctx.moveTo(208, 244);
ctx.lineTo(274, 306);
ctx.lineTo(342, 244);
ctx.lineTo(302, 407);
ctx.lineTo(314, 430);
ctx.lineTo(275, 427);
ctx.lineTo(235, 430);
ctx.lineTo(247, 408);
ctx.lineTo(208, 244);
ctx.closePath();
ctx.fillStyle = COLORS.FACEPARTS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(208, 244);
ctx.lineTo(274, 306);
ctx.lineTo(342, 244);
ctx.lineTo(275, 219);
ctx.lineTo(208, 244);
ctx.closePath();
ctx.fillStyle = COLORS.FACE;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(247, 359);
ctx.lineTo(275, 306);
ctx.lineTo(302, 360);
ctx.lineTo(275, 372);
ctx.lineTo(247, 359);
ctx.closePath();
ctx.fillStyle = COLORS.NECK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(247, 359);
ctx.lineTo(275, 372);
ctx.lineTo(302, 360);
ctx.lineTo(274, 390);
ctx.lineTo(247, 359);
ctx.closePath();
ctx.fillStyle = COLORS.EYES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(248, 360);
ctx.lineTo(221, 367);
ctx.lineTo(221, 389);
ctx.lineTo(246, 407);
ctx.lineTo(274, 389);
ctx.lineTo(248, 360);
ctx.closePath();
ctx.fillStyle = COLORS.NOSE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(302, 360);
ctx.lineTo(328, 367);
ctx.lineTo(327, 389);
ctx.lineTo(301, 407);
ctx.lineTo(274, 389);
ctx.lineTo(302, 360);
ctx.closePath();
ctx.fillStyle = COLORS.NOSE;
ctx.fill();

// MOUTH
ctx.beginPath();
ctx.moveTo(274, 389);
ctx.lineTo(301, 407);
ctx.lineTo(248, 407);
ctx.lineTo(274, 389);
ctx.closePath();
ctx.fillStyle = COLORS.MOUTH;
ctx.fill();

// EARS
ctx.beginPath();
ctx.moveTo(275, 220);
ctx.lineTo(340, 246);
ctx.lineTo(444, 60);
ctx.lineTo(275, 220);
ctx.closePath();
ctx.fillStyle = COLORS.MOUTH;
ctx.fill();

ctx.beginPath();
ctx.moveTo(273, 220);
ctx.lineTo(208, 246);
ctx.lineTo(104, 60);
ctx.lineTo(273, 220);
ctx.closePath();
ctx.fillStyle = COLORS.MOUTH;
ctx.fill();

ctx.beginPath();
ctx.moveTo(104, 60);
ctx.bezierCurveTo(104, 60, 95, 175, 208, 246);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(444, 60);
ctx.bezierCurveTo(444, 60, 450, 172, 340, 246);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

// LEFT LINES
ctx.beginPath();
ctx.moveTo(303, 378);
ctx.bezierCurveTo(303, 378, 387, 372, 460, 377);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(303, 378);
ctx.bezierCurveTo(303, 378, 390, 392, 457, 416);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(303, 378);
ctx.bezierCurveTo(303, 378, 375, 409, 445, 445);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(303, 378);
ctx.bezierCurveTo(303, 378, 368, 427, 418, 474);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

// RIGHT LINES
ctx.beginPath();
ctx.moveTo(246, 377);
ctx.bezierCurveTo(246, 377, 155, 371, 90, 377);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(246, 377);
ctx.bezierCurveTo(246, 377, 155, 394, 91, 416);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(246, 377);
ctx.bezierCurveTo(246, 377, 170, 411, 104, 445);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();

ctx.beginPath();
ctx.moveTo(246, 377);
ctx.bezierCurveTo(246, 377, 186, 423, 131, 474);
ctx.lineWidth = 1.5;
ctx.strokeStyle = COLORS.LINES;
ctx.stroke();
