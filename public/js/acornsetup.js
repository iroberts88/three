(function(window) {

    AcornSetup = {
        
        net: function() {
            Acorn.Net.on('connInfo', function (data) {
                console.log('Connected to server: Info Received');
                console.log(data);
            });
        },

        states: function(){
            //Set up all states
            //-----------------------------------------------------------------------------------------------|
            //                              Game States (Acorn.states)                                       |
            //-----------------------------------------------------------------------------------------------|
        },

        input: function(){
            Acorn.Input.onMouseClick(function(e) {
                Acorn.Input.mouseDown = true;
            });
            Acorn.Input.onMouseUp(function(e) {
                Acorn.Input.mouseDown = false;
            });

            Acorn.Input.onScroll(function(e) {
            });

            Acorn.Input.onMouseMove(function(e) {
                if (Acorn.Input.buttons[2]){
                    var diff = Acorn.Input.mouse.X - Acorn.Input.mouse.prevX;
                    Graphics.camera.rotation.y += diff/100;
                    var diff = Acorn.Input.mouse.Y - Acorn.Input.mouse.prevY;
                    Graphics.camera.rotation.x += diff/100;
                }
            });

            Acorn.Input.onTouchEvent(function(e) {

            });
        }
        
    }
    window.AcornSetup = AcornSetup;
})(window);