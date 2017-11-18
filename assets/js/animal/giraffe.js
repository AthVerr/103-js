// SET UP
const canvas = document.getElementById('giraffe');
const ctx = canvas.getContext('2d');

const COLORS = {
  BODY: '#f8efce',
  LINES: '#c39255',
  EARSNOSE: '#c39155',
  NOSEEYES: '#54331c',
  NOSEBROWN: '#91632f',
  EARS: '#90612e'
};

// BODY
ctx.beginPath();
ctx.moveTo(240, 500);
ctx.lineTo(310, 500);
ctx.lineTo(310, 260);
ctx.lineTo(238, 260);
ctx.lineTo(238, 500);
ctx.closePath();
ctx.fillStyle = COLORS.BODY;
ctx.fill();

ctx.beginPath();
ctx.moveTo(253, 282);
ctx.lineTo(274, 287);
ctx.lineTo(296, 282);
ctx.lineTo(326, 243);
ctx.lineTo(326, 222);
ctx.lineTo(343, 180);
ctx.lineTo(302, 145);
ctx.lineTo(245, 145);
ctx.lineTo(205, 180);
ctx.lineTo(224, 222);
ctx.lineTo(221, 243);
ctx.lineTo(253, 282);
ctx.closePath();
ctx.fillStyle = COLORS.BODY;
ctx.fill();

// LINES
ctx.beginPath();
ctx.moveTo(266, 310);
ctx.lineTo(266, 334);
ctx.bezierCurveTo(266, 334, 251, 330, 238, 325);
ctx.lineTo(238, 302);
ctx.bezierCurveTo(238, 302, 250, 308, 266, 310);
ctx.closePath();
ctx.fillStyle = COLORS.LINES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(280, 310);
ctx.lineTo(280, 334);
ctx.bezierCurveTo(280, 334, 297, 330, 310, 325);
ctx.lineTo(310, 302);
ctx.bezierCurveTo(310, 302, 295, 310, 280, 310);
ctx.closePath();
ctx.fillStyle = COLORS.LINES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(238, 350);
ctx.lineTo(238, 371);
ctx.bezierCurveTo(238, 371, 255, 377, 278, 378);

ctx.lineTo(278, 356);
ctx.bezierCurveTo(278, 356, 256, 357, 238, 350);
ctx.lineTo(238, 350);
ctx.closePath();
ctx.fillStyle = COLORS.LINES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(292, 355);
ctx.lineTo(292, 379);
ctx.bezierCurveTo(292, 379, 302, 375, 311, 371);
ctx.lineTo(311, 348);
ctx.bezierCurveTo(311, 348, 302, 352, 292, 355);
ctx.closePath();
ctx.fillStyle = COLORS.LINES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(238, 395);
ctx.lineTo(238, 441);
ctx.bezierCurveTo(238, 441, 249, 446, 266, 448);
ctx.lineTo(266, 403);
ctx.bezierCurveTo(266, 403, 251, 400, 238, 395);
ctx.closePath();
ctx.fillStyle = COLORS.LINES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(310, 395);
ctx.lineTo(311, 441);
ctx.bezierCurveTo(311, 441, 298, 445, 279, 448);
ctx.lineTo(279, 403);
ctx.bezierCurveTo(279, 403, 296, 401, 310, 395);
ctx.closePath();
ctx.fillStyle = COLORS.LINES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(238, 464);
ctx.lineTo(237, 486);
ctx.bezierCurveTo(237, 486, 256, 493, 278, 495);
ctx.lineTo(278, 472);
ctx.bezierCurveTo(278, 472, 256, 472, 238, 464);
ctx.closePath();
ctx.fillStyle = COLORS.LINES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(291, 472);
ctx.lineTo(291, 495);
ctx.bezierCurveTo(291, 495, 302, 491, 311, 488);
ctx.lineTo(311, 465);
ctx.bezierCurveTo(311, 465, 302, 468, 291, 472);
ctx.closePath();
ctx.fillStyle = COLORS.LINES;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(253, 282);
ctx.lineTo(274, 287);
ctx.lineTo(296, 282);
ctx.lineTo(311, 262);
ctx.lineTo(301, 234);
ctx.lineTo(293, 222);
ctx.lineTo(278, 190);
ctx.lineTo(270, 190);
ctx.lineTo(255, 222);
ctx.lineTo(246, 234);
ctx.lineTo(239, 262);
ctx.lineTo(253, 282);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNOSE;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(256, 222);
ctx.lineTo(246, 234);
ctx.lineTo(263, 247);
ctx.lineTo(286, 247);
ctx.lineTo(301, 234);
ctx.lineTo(294, 222);
ctx.lineTo(256, 222);
ctx.closePath();
ctx.fillStyle = COLORS.NOSEBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(291, 224);
ctx.lineTo(280, 234);
ctx.lineTo(279, 243);
ctx.lineTo(292, 234);
ctx.lineTo(291, 224);
ctx.closePath();
ctx.fillStyle = COLORS.NOSEEYES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(257, 224);
ctx.lineTo(270, 234);
ctx.lineTo(269, 243);
ctx.lineTo(257, 234);
ctx.lineTo(257, 224);
ctx.closePath();
ctx.fillStyle = COLORS.NOSEEYES;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(209, 189);
ctx.lineTo(217, 208);
ctx.lineTo(242, 189);
ctx.lineTo(209, 189);
ctx.closePath();
ctx.fillStyle = COLORS.NOSEEYES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(340, 189);
ctx.lineTo(332, 208);
ctx.lineTo(307, 189);
ctx.lineTo(2340, 189);
ctx.closePath();
ctx.fillStyle = COLORS.NOSEEYES;
ctx.fill();

// HORNS
ctx.beginPath();
ctx.moveTo(256, 102);
ctx.lineTo(237, 111);
ctx.lineTo(221, 81);
ctx.lineTo(256, 101);
ctx.closePath();
ctx.fillStyle = COLORS.NOSEEYES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(293, 102);
ctx.lineTo(311, 111);
ctx.lineTo(327, 81);
ctx.lineTo(293, 101);
ctx.closePath();
ctx.fillStyle = COLORS.NOSEEYES;
ctx.fill();

ctx.beginPath();
ctx.moveTo(247, 145);
ctx.lineTo(274, 146);
ctx.lineTo(256, 101);
ctx.lineTo(237, 110);
ctx.lineTo(247, 145);
ctx.closePath();
ctx.fillStyle = COLORS.NOSEBROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(301, 145);
ctx.lineTo(275, 146);
ctx.lineTo(293, 101);
ctx.lineTo(311, 110);
ctx.lineTo(301, 145);
ctx.closePath();
ctx.fillStyle = COLORS.NOSEBROWN;
ctx.fill();

// EARS
ctx.beginPath();
ctx.moveTo(343, 178);
ctx.lineTo(340, 188);
ctx.lineTo(422, 145);
ctx.lineTo(343, 178);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(206, 178);
ctx.lineTo(209, 188);
ctx.lineTo(125, 145);
ctx.lineTo(206, 178);
ctx.closePath();
ctx.fillStyle = COLORS.EARS;
ctx.fill();

ctx.beginPath();
ctx.moveTo(343, 179);
ctx.lineTo(422, 145);
ctx.lineTo(355, 145);
ctx.bezierCurveTo(355, 145, 353, 157, 322, 162);
ctx.lineTo(343, 179);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNOSE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(206, 179);
ctx.lineTo(125, 145);
ctx.lineTo(193, 145);
ctx.bezierCurveTo(193, 145, 200, 157, 227, 162);
ctx.lineTo(206, 179);
ctx.closePath();
ctx.fillStyle = COLORS.EARSNOSE;
ctx.fill();
