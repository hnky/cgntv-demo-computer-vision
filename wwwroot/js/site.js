// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.







// Write your JavaScript code.
function InitCanvas(imageForCanvas, canvasHolder) {
    var itemWidth = document.getElementById(imageForCanvas).naturalWidth;
    var canvas = document.getElementById(canvasHolder);
    canvas.width = document.getElementById(imageForCanvas).width;
    canvas.height = document.getElementById(imageForCanvas).height;
    var context = canvas.getContext('2d');
    var factor = document.getElementById(imageForCanvas).width / itemWidth;
    return factor;
}

function DrawRectangle(canvasId, top, left, width, height, factor, lineWidth, strokeStyle) {
    var context = document.getElementById(canvasId).getContext('2d');
    var topP = top * factor;
    var leftP = left * factor;
    var widthP = width * factor;
    var heightP = height * factor;

    context.beginPath();
    context.rect(leftP, topP, widthP, heightP);
    context.lineWidth = lineWidth;
    context.strokeStyle = strokeStyle;
    context.stroke();
}

function DrawDot(canvasId, left, top, factor) {
    var context = document.getElementById(canvasId).getContext('2d');
    var topP = top * factor;
    var leftP = left * factor;

    context.beginPath();
    context.rect(leftP, topP, 4, 4);
    context.lineWidth = 4;
    context.strokeStyle = 'red';
    context.stroke();
}





window.addEventListener('load', () => {
    console.log("DOMContentLoaded")
    var factor = InitCanvas('imageHolder', 'canvasHolder');
    console.log("factor: " + factor)
    
    var objects = document.querySelectorAll(".object")
    objects.forEach(obj => {
        DrawRectangle('canvasHolder',
            obj.getAttribute('data-tag-y'), obj.getAttribute('data-tag-x'), obj.getAttribute('data-tag-w'), obj.getAttribute('data-tag-h'),
            factor,4,"#ff0000")
    });

    var objects = document.querySelectorAll(".face")
    objects.forEach(obj => {
        DrawRectangle('canvasHolder',
            obj.getAttribute('data-tag-x'), obj.getAttribute('data-tag-y'), obj.getAttribute('data-tag-w'), obj.getAttribute('data-tag-h'),
            factor, 3, "#00ff00")
    });


    var objects = document.querySelectorAll(".cel")
    objects.forEach(obj => {
        DrawRectangle('canvasHolder',
            obj.getAttribute('data-tag-x'), obj.getAttribute('data-tag-y'), obj.getAttribute('data-tag-w'), obj.getAttribute('data-tag-h'),
            factor, 2, "#0ffff0")
    });
});