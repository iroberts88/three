(function(window) {

    Graphics = {

        //THREE.JS Stuff
        scene: null,
        camera: null,
        renderer: null,

        //Texture Loading stuff
        ready: false,
        tLoaded: 0,
        textureList: ['desert_cracks_d','desert_cracks_n'],
        tLoader: null,

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
            this.scene.background = new THREE.Color(0x00ffff);
            this.camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight,);
            this.renderer = new THREE.WebGLRenderer();
            this.renderer.setSize( window.innerWidth, window.innerHeight );
            document.body.appendChild( this.renderer.domElement );

            //add some test geometry
            var geometry = new THREE.PlaneGeometry(512,512,32,32);
            var spriteMap  = new THREE.TextureLoader().load('img/textures/desert_cracks_d.jpg');
            var material = new THREE.MeshBasicMaterial( { map: spriteMap, color: 0xffffff } );
            var light = new THREE.AmbientLight(0x404040,5); // soft white light
            this.cube = new THREE.Mesh( geometry, material );
            this.scene.add( this.cube );
            this.camera.position.z = 1000;
            for (var i = 0; i < Graphics.cube.geometry.vertices.length;i++){Graphics.cube.geometry.vertices[i].z = Math.round(Math.random()*30);}
            Graphics.cube.geometry.verticesNeedUpdate=true;
            Graphics.cube.geometry.normalsNeedUpdate=true;
            Graphics.cube.geometry.computeBoundingSphere();
            Graphics.cube.geometry.computeFaceNormals();
            Graphics.cube.geometry.computeVertexNormals();
            this.ready = true;
            //this.loadTextures();
        },

        resize: function(){
            this.renderer.setSize( window.innerWidth, window.innerHeight );
        },

        loadTextures: function(){
            /*this.tLoader = new THREE.TextureLoader();
            for (var i = 0; i < this.textureList.length;i++){
                this.tLoader.load(
                    // resource URL
                    'img/textures/' + this.textureList[i] + '.jpg',

                    // onLoad callback
                    function ( image ) {
                        //parse image src
                        var imgName = image.src.slice(35,image.src.length-4);
                        Graphics.textures[imgName] = image;
                        Graphics.tLoaded += 1;
                        if (Graphics.tLoaded == Graphics.textureList.length){
                            Graphics.ready = true;
                        }
                    },

                    // onProgress callback currently not supported
                    undefined,

                    // onError callback
                    function (e) {
                        console.log(e);
                        console.error( 'An error happened.' );
                    }
                );
            }*/
        }
    }

    window.Graphics = Graphics;
})(window);
