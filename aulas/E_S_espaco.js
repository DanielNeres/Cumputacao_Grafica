import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

renderer.setClearColor(0xDBDCDF);


const geometry_circulo = new THREE.SphereGeometry( 5);
const material_circulo = new THREE.MeshBasicMaterial( { color: 0x006B5C, wireframe: true } );
const circulo = new THREE.Mesh( geometry_circulo, material_circulo );
scene.add( circulo );


const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();


camera.position.z = 15;

function animate() {


	renderer.render( scene, camera );

}