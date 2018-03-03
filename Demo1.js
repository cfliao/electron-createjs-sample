$(document).ready(() => { // jQuery main
    let stage = new createjs.Stage(canvas);

    function setup() {
        // automatically update
        createjs.Ticker.on("tick", e => stage.update());
        createjs.Ticker.framerate = 60;
    }

    function draw() {
        let rect = new createjs.Shape(); //新增一個圖形
        rect.graphics.beginStroke("purple").drawRect(0, 0, 800, 600);
        stage.addChild(rect);

        let circle = new createjs.Shape();
        circle.graphics.beginFill("red").drawCircle(0, 0, 100);
        circle.on('tick', e => {
            circle.x = stage.mouseX;
            circle.y = stage.mouseY;
        });

        stage.addChild(circle);
    }

    setup();
    draw();
});
