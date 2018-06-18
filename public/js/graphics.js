(function(window) {

    Graphics = {

        //THREE.JS Stuff
        scene: null,
        camera: null,
        renderer: null,

        ready: false,

        pallette: {
            color1:'#D2D2D2', // Font color
            color2:'#484848', // BG color 
            color3: 0x79A1F2, //outline color
            color4: '#BDBDBD', //button glow color
            color5: '#D2D2D2', //button clicked color
            color6: "#505050",
            color7: 0x232C2D
        },

        init: function() {
            this.scene = new THREE.Scene();
            this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( this.renderer.domElement );

            //add some test geometry
            var geometry = new THREE.PlaneGeometry(5,5);
            var material = new THREE.MeshBasicMaterial( { color: 0xffff00, side: THREE.DoubleSide} );
            var light = new THREE.AmbientLight(0x404040,5); // soft white light
            this.cube = new THREE.Mesh( geometry, material );
            this.scene.add( this.cube );

            this.camera.position.z = 5;
            this.ready = true;
        },

        resize: function(){
            this.renderer.setSize( window.innerWidth, window.innerHeight );
        }
    }

    window.Graphics = Graphics;
})(window);
