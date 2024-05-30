

//typewriter effect


const text = "Explore AI's possibilities at AI INLINK! Stay updated on the latest AI tools here. Connect and innovate with us!";
let index = 0;
const speed = 50;

function typeWriter() {
    if (index < text.length) {
        document.getElementById("animatedText").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }
}


//the line effect
function initCanvas() {
    var canvas, ctx, tim, mox, moy, isma;
    canvas = document.getElementsByTagName('canvas')[0];
    ctx = canvas.getContext('2d');
    resizeCanvas();

    mox = moy = 0;

    if (navigator.userAgent.indexOf('iPhone') > 0 ||
        navigator.userAgent.indexOf('iPad') > 0 ||
        navigator.userAgent.indexOf('iPod') > 0 ||
        navigator.userAgent.indexOf('Android') > 0) {
        canvas.addEventListener('touchstart', loc);
        canvas.addEventListener('touchmove', loc);
        isma = 1;
    } else {
        window.addEventListener('resize', function () {
            resizeCanvas();
        });
        document.addEventListener('mousedown', loc);
        document.addEventListener('mousemove', loc);
    }

    main();

    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    function loc(e) {
        var x, y, sx, sy;
        sx = document.body.scrollLeft || document.documentElement.scrollLeft;
        sy = document.body.scrollTop || document.documentElement.scrollTop;
        if (isma) {
            x = e.changedTouches[0].pageX - canvas.offsetLeft;
            y = e.changedTouches[0].pageY - canvas.offsetTop;
        } else {
            x = e.clientX - canvas.offsetLeft + sx;
            y = e.clientY - canvas.offsetTop + sy;
        }
        mox = x;
        moy = y;
    }

    function main() {
        tim = new Date().getTime() / 400;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        motion();
        requestAnimationFrame(main);
    }

    function motion() {
        var a, b, c, d, e, r, p, x, y, x1, y1, len, tx, ty, han, han2, ste, s;
        ctx.globalCompositeOperation = "lighter";


        var gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
        gradient.addColorStop(0, 'rgba(128, 0, 128, 0.1)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 0, 0.1)');

        gradient.addColorStop(1, 'rgba(0, 0, 255, 0.1)');
        ctx.fillStyle = gradient;

        a = tim / 71;
        b = Math.cos(a * 2);
        c = Math.sin(a * 3);
        s = (canvas.width > canvas.height) ? canvas.width : canvas.height;
        s = s / 700;
        han = (100 + Math.sin(tim / 53) * 20) * s;
        tx = canvas.width * (0.6 + 0.1 * b);
        ty = canvas.height * (0.4 + 0.1 * c);
        ste = 0.2 + Math.sin(tim / 17) * 0.25;
        len = 60;
        han2 = 200 * s;

        for (d = 0; d < 18; d++) {
            r = ((tim / 31 + d * ste) % 3) - 1;
            p = [];
            for (a = 0; a < len; a++) {
                x = r * canvas.width;
                y = canvas.height * 0.8 + Math.sin(r * 22 + d) * 130;
                b = 1 + Math.sin(r * 37 + d) * 0.3;
                x1 = Math.cos(-r * 7 + tim / 13 + d) * han + tx;
                y1 = Math.sin(-r * 7 + tim / 13 + d) * han + ty;
                b = 0.5 - Math.cos(r * Math.PI * 2) / 2;
                c = 1 - b;
                x = x * c + x1 * b;
                y = y * c + y1 * b;
                x1 = mox - x;
                y1 = moy - y;
                if (Math.abs(x1) < han2 && Math.abs(y1) < han2) {
                    b = Math.pow(x1 * x1 + y1 * y1, 0.5) / han2;
                    if (b < 1) {
                        b = 1 - b;
                        b = 0.5 - Math.cos(b * Math.PI) / 2;
                        x -= x1 * b;
                        y -= y1 * b;
                    }
                }
                p.push([x, y]);
                r += 0.004;
            }

            p1 = [];
            for (a = 0; a < len - 1; a++) {
                b = p[a];
                c = p[a + 1];
                x = b[0] - c[0];
                y = b[1] - c[1];
                b = Math.atan2(-y, x) + Math.PI / 2;
                x = Math.cos(b);
                y = Math.sin(b);
                e = 0.5 - Math.cos(a / len * Math.PI * 2) / 2;
                p1.push([x * e * s, y * e * s]);
            }
            for (e = 0; e < 5; e++) {
                ctx.beginPath();
                for (a = 0; a < len - 1; a++) {
                    b = p[a];
                    c = p1[a];
                    ctx.lineTo(b[0] + c[0] * (e + 0.5), b[1] - c[1] * (e + 0.5));
                }
                for (a = len - 2; a >= 0; a--) {
                    b = p[a];
                    c = p1[a];
                    ctx.lineTo(b[0] - c[0] * (e + 0.5), b[1] + c[1] * (e + 0.5));
                }
                ctx.fill();
            }
        }
    }
}

window.onload = function () {
    typeWriter(); // Start the text animation
    initCanvas(); // Initialize the canvas after starting the text animation
};