document.querySelector(".btn").addEventListener("click", changeLayout);
var isWebiste = false;

function changeLayout() {
    if (isWebiste) {
        console.log("make it website");
        makeLayout();
        isWebiste = false;
    } else {
        console.log("make it layout");
        makeWebsite();
        isWebiste = true;
    }
}

function makeWebsite() {
    var currentNode = document.querySelector('#website-outer');
    var newNode = document.createElement("div");

    newNode.id = "website-layout"

    newNode.innerHTML = `
    <div class="grid-container-5 background-head" id="#web-outer">
    <div class="grid-item-website grid-col-header">
        <div>
            <img src="/CSS-GRIDS/images/ghostgamer logo.png" alt="" class="logo">
            <img src="/CSS-GRIDS/images/list.png" alt="" class="list">
        </div>
    </div>
    <div class="grid-item-website grid-row-menu">
        <img src="/CSS-GRIDS/images/menu.png" alt="" class="menu">
    </div>
    <div class="grid-item-website grid-area-main">
        <p class="main-text">Video games are great fun, and for most people games stay fun. There are some gamers,
            though, who want to
            push themselves a little, and rack up the many achievements that games offer.</p>
    </div>
    <div class="grid-item-website">
        <img src="/CSS-GRIDS/images/gamepad.png" alt="" class="gamepad">
    </div>
    <div class="grid-item-website">
        <img src="/CSS-GRIDS/images/gamepad2.png" alt="" class="gamepad">
    </div>
    <div class="grid-item-website grid-col-footer">
        <img src="/CSS-GRIDS/images/footer1.png" alt="" class="footer">
    </div>
</div>  `;

    currentNode.parentNode.replaceChild(newNode, currentNode);
}



function makeLayout() {
    //alert("WELL WELL WELL");
    var currentNode = document.querySelector('#website-layout');
    var newNode = document.createElement("div");

    newNode.id = "website-outer"

    newNode.innerHTML = `
    <div class="grid-container-5" id="website-layout">
    <div class="grid-item-website grid-col-header" id="head">HEADER</div>
    <div class="grid-item-website grid-row-menu">MENU</div>
    <div class="grid-item-website grid-area-main">MAIN</div>
    <div class="grid-item-website">DIV</div>
    <div class="grid-item-website">DIV</div>
    <div class="grid-item-website grid-col-footer">FOOTER</div>
    </div>`;

    currentNode.parentNode.replaceChild(newNode, currentNode);
}