import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

let cubes = [];
let n = 20;
let m = 20;

for (let j = 0; j < m; j++) {
    for (let i = 1; i < n; i++) {

        const geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00} );
        const cube = new THREE.Mesh( geometry, material );
        

        let r = 3;
        let theta = (Math.PI/m)*j*2;
        let phi = Math.PI*i/n;

        cube.position.x = r*Math.sin(phi)*Math.sin(theta);
        cube.position.z = r*Math.sin(phi)*Math.cos(theta);
        cube.position.y = r*Math.cos(phi);
        scene.add( cube );
        cubes.push(cube);
    }
}


camera.position.z = 13;

function animate() {
	renderer.render( scene, camera );
    
}
renderer.setAnimationLoop( animate );
