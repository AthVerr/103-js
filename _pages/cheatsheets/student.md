---
layout: "page"
permalink: "/cheatsheet/"
---

<!-- 
https://docs.google.com/document/d/1ZmwtSPm8ry8vS1NFm2Sc6yVwkHnfGYRQ1Ej5zLOqHgM/edit
https://table.collaborizm.com/ 
-->

# Javascript Cheat Sheet

1. Create a new file `index.html` file and `drawing.js` file.
2. In the `index.html` file, add the following:

    ```html
    <canvas id="drawing" width="500" height="500"></canvas>
    <script src="drawing.js"></script>
    ```

3. Inside `drawing.js`: 

    ```js
    var canvas = document.getElementById('drawing');
    var ctx = canvas.getContext('2d');
    ```

| Description              | Code           | Example                 |
| :----------------------- | :------------- | :---------------------- |
| Start drawing a shape    | `beginPath();` | `ctx.beginPath();`      |
| Move to a specific point | `moveTo(X,Y);` | `ctx.moveTo(463, 551);` |

Draw a path for a line from a point to another
lineTo(X,Y);
ctx.lineTo(50, 50);
Draw the actual line
stroke();
ctx.stroke();
Specify the line color
strokeStyle="color";
ctx.strokeStyle="red";
Close a path
closePath();
ctx.closePath();
Draw a circle
arc(X,Y,radius,sAngle,eAngle,counterclockwise); 
ctx.arc(325, 175, 25, 0, 2 * Math.PI); 
Fill the circle
fill();
ctx.fill();
Specify the fill color
fillStyle = "color";
ctx.fillStyle = "red";

Example Page
// FACE
ctx.beginPath();
ctx.arc(250, 250, 200, 0, 2 * Math.PI);
ctx.strokeStyle = 'black';
ctx.stroke();
ctx.fillStyle = 'yellow';
ctx.fill();


// SMILE
ctx.beginPath();
ctx.arc(250, 250, 150, 0, Math.PI);
ctx.lineTo(400, 250);
ctx.fillStyle = "white";
ctx.fill();
ctx.stroke();

Online Resources
codecademy.com
w3schools.com
coursera.org
edx.org
khanacademy.org
lynda.com

code.org
udacity.com
thimble.webmaker.org
developer.mozilla.org
neocities.org
FAQs
Can I use my CoderDojoChi USB on my computer at home?
Yes! All USBs we’ve provided should work on any desktop or laptop computer you have at home. Just plug it in, and look for the folder the same way you did in class

What program do I use to open my HTML, CSS and Javascript files on my computer?
We highly suggest installing a free cross-platform editor called VS Code from https://code.visualstudio.com  However, you can edit your files without VS Code.
For Windows, you may edit your files with Notepad. 
For Mac, you can use TextEdit. Please be sure that the text editor is set to plain text. Go to: Preferences > New Document > select plain text. Also make sure both "Display html file as html code" and "Display RTF file as RTF code" options are checked under "Open and Save".

