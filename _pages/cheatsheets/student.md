---
layout: "page"
permalink: "/cheatsheet/"
---

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

| Description                                    | Code                                                                                                                  | Example                                  |
| :--------------------------------------------- | :-------------------------------------------------------------------------------------------------------------------- | :--------------------------------------- |
| Start drawing a shape                          | [`beginPath();`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)                 | `ctx.beginPath();`                       |
| Move to a specific point                       | [`moveTo(x, y);`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo)                   | `ctx.moveTo(463, 551);`                  |
| Draw a path for a line from a point to another | [`lineTo(x, y);`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo)                   | `ctx.lineTo(50, 50);`                    |
| Draw the actual line                           | [`stroke();`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke)                       | `ctx.stroke();`                          |
| Specify the line color                         | [`strokestyle = "color";`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokestyle)     | `ctx.strokestyle = "red";`               |
| Close a path                                   | [`closePath();`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/closePath)                 | `ctx.closePath();`                       |
| Draw a circle                                  | [`arc(x, y, radius, sAngle, eAngle);`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/arc) | `ctx.arc(325, 175, 25, 0, 2 * Math.PI);` |
| Fill the circle                                | [`fill();`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fill)                           | `ctx.fill();`                            |
| Specify the fill color                         | [`fillstyle = "color";`](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillstyle)         | `ctx.fillstyle = "red";`                 |

## Example Page

```html
<canvas id="drawing" width="500" height="500"></canvas>
<script src="drawing.js"></script>
```

```js
var canvas = document.getElementById('drawing');
var ctx = canvas.getContext('2d');

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
```

 ## Online Resources
- [Codecademy](codecademy.com)
- [W3Schools](w3schools.com)
- [Coursera](coursera.org)
- [Edx](edx.org)
- [Khanacademy](khanacademy.org)
- [Lynda](lynda.com)
- [Code](code.org)
- [Udacity](udacity.com)
- [Thimble Webmaker](thimble.webmaker.org)
- [Developer Mozilla](developer.mozilla.org)
- [Neocities](neocities.org)

##  FAQs
### Can I use my CoderDojoChi USB on my computer at home?
Yes! All USBs we’ve provided should work on any desktop or laptop computer you have at home. Just plug it in, and look for the folder the same way you did in class.

### What program do I use to open my HTML, CSS and Javascript files on my computer?
We highly suggest installing a free cross-platform editor called [VS Code](https://code.visualstudio.com). However, you can edit your files without VS Code.

