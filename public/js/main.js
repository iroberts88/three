
$(function() {

    //Configure fonts
    WebFontConfig = {
      google: {
        families: ['Lato','Open Sans', 'Permanent Marker','Orbitron']
      },

      active: function() {
        // do something
      }

    };
    (function() {
        var wf = document.createElement('script');
        wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
            '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
        wf.type = 'text/javascript';
        wf.async = 'true';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(wf, s);
      })();

    // initialize Graphics
    document.body.style.margin = "0px 0px 0px 0px";
    Graphics.init();
    Acorn.Input.init();
    window.onresize = function(event) {
        Graphics.resize();
    };

    // Set up keyboard bindings
    $(document).keypress(function(e) {
        if(e.keyCode === 32) {
            e.preventDefault();
        }
    });
    $(document).keydown(function(e) {
        var key = e.which;

        // Prevent system wide stops
        /*if (
                key === 8 || // Backspace
                key === 16// Delete
            ){
            e.preventDefault();
        }*/
        Acorn.Input.keyDown(key);

        if ((key === 32 || key === 38 || key === 37 || key === 39 || key === 40 || key === 127) ){
            e.preventDefault();
        }
    });

    $(document).keyup(function(e) {
        Acorn.Input.keyUp(e.which)
    });

    window.addEventListener("contextmenu", function(e) {
        e.preventDefault();
        return false;
    });
});

function animate() {
    requestAnimationFrame( animate );
    var scrollSpeed = 5;
    if (Graphics.ready){
        if (Acorn.Input.isPressed(Acorn.Input.Key.UP)){
            moveCamera(-1);
        }
        if (Acorn.Input.isPressed(Acorn.Input.Key.DOWN)){
            moveCamera(1);
        }
        if (Acorn.Input.isPressed(Acorn.Input.Key.LEFT)){
            Graphics.camera.rotation.z -= 0.05;
        }
        if (Acorn.Input.isPressed(Acorn.Input.Key.RIGHT)){
            Graphics.camera.rotation.z += 0.05;
        }

        Graphics.renderer.render( Graphics.scene, Graphics.camera );
    }
}
animate();

AcornSetup.input();

function moveCamera(dir){
    var scrollSpeed = 10;
    var hyp = Math.sqrt(Math.pow(Graphics.camera.rotation.x,2) + Math.pow(Graphics.camera.rotation.y,2) + Math.pow(Graphics.camera.rotation.z,2));
    var vec = new THREE.Vector3(0,0,scrollSpeed)
    console.log(vec.applyEuler(Graphics.camera.rotation));
    Graphics.camera.position.x += vec.x*dir;
    Graphics.camera.position.y += vec.y*dir;
    Graphics.camera.position.z += vec.z*dir;
}
