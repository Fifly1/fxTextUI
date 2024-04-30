let isDrawn = false;
$(`.textui-container`).remove()

function drawText(dataText) {
    if (!isDrawn) {
        var audio = document.getElementById("sfx");
        audio.play();
        $('body').append(`
    <div class="textui-container">
        <div class="info-icon"></div>
        <div id="text"></div>
    </div>
    `);
    $(`.textui-container`).css({
        "animation": "slide-in 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.0) forwards"
    })
        const elmnt = document.getElementById("text");
        elmnt.innerHTML = dataText;
        isDrawn = true;
    }
};

function hideText() {
    $(`.textui-container`).css({
        "animation": "slide-out 0.7s cubic-bezier(0.68, -0.6, 0.32, 1.0) forwards"
    })
    setTimeout(function () {
        $(`.textui-container`).remove()
    }, 800)
    isDrawn = false;
}

$(function () {
    window.addEventListener("message", function(event) {
        const item = event.data;
        switch (item.action) {
            case "drawText":
                return drawText(item.text);
        case "hideText":
                return hideText();
        default:
            return;
  }
    });
});