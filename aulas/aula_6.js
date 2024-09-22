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

const geometry = new THREE.SphereGeometry( 4, 40, 40 );
const material = new THREE.MeshStandardMaterial( { color: 0xaaaaaa} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z = 15;

/*
luz ambiente
const luz = new THREE.AmbientLight(0xffff00, 10);
scene.add(luz);
*/

//const light = new THREE.PointLight( 0x0000ff, 10000 );
//scene.add( light );

//const light = new THREE.HemisphereLight( 0x0000ff, 0xff0000, 10 );
//scene.add( light );

const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );


let phi = 0;
let theta = 0;

let r = 10;
let T = 0;
function animate() {
	renderer.render( scene, camera );
    /*
    phi = angulo_z * Math.PI / 180;
    theta = angulo_xy * Math.PI / 180;
    light.position.x = r * Math.sin(theta) * Math.cos(phi);
    light.position.y = r * Math.sin(theta) * Math.sin(phi);
    light.position.z = r * Math.cos(theta);*/
    //phi += 0.1;
    //theta += 0.05;

    //light.position.set(r * Math.sin(T), 0, r * Math.cos(T))
    //T += 0.005;


}
renderer.setAnimationLoop( animate );