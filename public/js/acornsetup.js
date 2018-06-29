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
                var delta = {
                    X: Acorn.Input.mouse.X - Acorn.Input.mouse.prevX,
                    Y: Acorn.Input.mouse.Y - Acorn.Input.mouse.prevY
                }
                var speed = 0.005;
                if (Acorn.Input.buttons[2]){
                    document.body.style.cursor = 'none';
                    Acorn.Input.phi = delta.Y * speed;
                    Acorn.Input.theta = delta.X * speed;
                    var targetPosition = new THREE.Vector3(Graphics.camera.rotation.x,Graphics.camera.rotation.y,Graphics.camera.rotation.z).normalize(),
                        position = Graphics.camera.position;
                    //Graphics.camera.lookAt( targetPosition );
                    Graphics.camera.rotateOnWorldAxis(new THREE.Vector3(0,0,1),(-delta.X*speed));
                    Graphics.camera.rotateOnAxis(new THREE.Vector3(1,0,0),(-delta.Y*speed));
                }else{
                    document.body.style.cursor = 'default';
                }

            });

            Acorn.Input.onTouchEvent(function(e) {

            });
        }
        
    }
    window.AcornSetup = AcornSetup;
})(window);