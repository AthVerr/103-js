// SET UP
const canvas = document.getElementById('doberman');
const ctx = canvas.getContext('2d');

const COLORS = {
    BLACK: '#1c1f22',
    BROWN: '#54331c',
    DARKBROWN: '#3e2611',
    YELLOW: '#ad8229',
    BLUE: '#60aca8'
};

// BODY
ctx.beginPath();
ctx.moveTo(186, 500);
ctx.lineTo(363, 500);
ctx.lineTo(396, 236);
ctx.lineTo(386, 132);
ctx.lineTo(397, 35);
ctx.lineTo(330, 178);
ctx.lineTo(216, 178);
ctx.lineTo(150, 35);
ctx.lineTo(162, 132);
ctx.lineTo(150, 236);
ctx.lineTo(186, 500);
ctx.lineTo(225, 500);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

// FACE
ctx.beginPath();
ctx.moveTo(274, 164);
ctx.lineTo(358, 180);
ctx.lineTo(393, 241);
ctx.lineTo(381, 351);
ctx.lineTo(348, 372);
ctx.lineTo(320, 498);
ctx.lineTo(223, 498);
ctx.lineTo(201, 372);
ctx.lineTo(164, 351);
ctx.lineTo(151, 241);
ctx.lineTo(183, 180);
ctx.lineTo(274, 164);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();

ctx.beginPath();
ctx.moveTo(223, 291);
ctx.lineTo(325, 289);
ctx.lineTo(361, 314);
ctx.lineTo(348, 382);
ctx.lineTo(277, 411);
ctx.lineTo(201, 385);
ctx.lineTo(187, 316);
ctx.lineTo(223, 291);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOW;
ctx.fill();

// MOUTH
ctx.beginPath();
ctx.moveTo(273, 368);
ctx.arc(273, 368, 50, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.DARKBROWN;
ctx.fill();

// EYES
ctx.beginPath();
ctx.moveTo(221, 250);
ctx.arc(221, 250, 19, 1.1 * Math.PI, 2.1 * Math.PI, 1);
ctx.closePath();
ctx.fillStyle = COLORS.BLUE;
ctx.fill();

ctx.beginPath();
ctx.moveTo(329, 250);
ctx.arc(329, 250, 19, 1.9 * Math.PI, 0.9 * Math.PI);
ctx.closePath();
ctx.fillStyle = COLORS.BLUE;
ctx.fill();

// EARS
ctx.beginPath();
ctx.moveTo(298, 222);
ctx.lineTo(298, 233);
ctx.lineTo(345, 226);
ctx.lineTo(298, 222);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOW;
ctx.fill();

ctx.beginPath();
ctx.moveTo(250, 222);
ctx.lineTo(250, 233);
ctx.lineTo(205, 226);
ctx.lineTo(250, 222);
ctx.closePath();
ctx.fillStyle = COLORS.YELLOW;
ctx.fill();

// NOSE
ctx.beginPath();
ctx.moveTo(223, 395);
ctx.lineTo(275, 389);
ctx.lineTo(321, 395);
ctx.lineTo(325, 327);
ctx.lineTo(299, 290);
ctx.lineTo(299, 222);
ctx.lineTo(251, 222);
ctx.lineTo(251, 290);
ctx.lineTo(224, 327);
ctx.lineTo(223, 395);
ctx.closePath();
ctx.fillStyle = COLORS.BROWN;
ctx.fill();

ctx.beginPath();
ctx.moveTo(275, 313);
ctx.lineTo(240, 330);
ctx.lineTo(240, 365);
ctx.lineTo(275, 378);
ctx.lineTo(309, 365);
ctx.lineTo(309, 330);
ctx.lineTo(275, 313);
ctx.closePath();
ctx.fillStyle = COLORS.BLACK;
ctx.fill();
