import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

renderer.setClearColor(0xDBDCDF);

let theta = 0;
let r = 4

let cubes = [];
let thetas = []; 

for (let i = 0; i < 10; i++){

	theta += 0.65;
	const geometry = new THREE.BoxGeometry( 1, 1, 1 );
	const material = new THREE.MeshBasicMaterial( { color: 0x006B5C, wireframe: false } );
	const cube = new THREE.Mesh( geometry, material );
	cube.position.y = r*Math.sin(-theta);
	cube.position.x = r*Math.cos(-theta);
	cube.position.z = r*Math.sin(-theta);
	scene.add( cube );
	cubes.push(cube);
	thetas.push(theta);
}
/*
for (let i = 0; i < 10; i++){

	theta += 0.65;
	const geometry = new THREE.BoxGeometry( 1, 1, 1 );
	const material = new THREE.MeshBasicMaterial( { color: 0x006B5C, wireframe: false } );
	const cube = new THREE.Mesh( geometry, material );
	//cube.position.y = r*Math.cos(-theta);
	cube.position.x = r*Math.sin(-theta);
	//cube.position.x = r*Math.sin(-theta);
	cubes.push(cube);
	thetas.push(theta);
    scene.add( cube );
}*/


const geometry_circulo = new THREE.SphereGeometry( 5);
const material_circulo = new THREE.MeshBasicMaterial( { color: 0x006B5C, wireframe: true } );
const circulo = new THREE.Mesh( geometry_circulo, material_circulo );
scene.add( circulo );


const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();


camera.position.z = 15;
theta = 0;
function animate() {

	theta += 0.01;
	console.log("oi");
	for (var i in cubes){
		let cube_var = cubes[i];
		cube_var.position.y = r*Math.sin(thetas[i] + theta);
		cube_var.position.x = r*Math.cos(thetas[i] + theta);
		cube_var.position.z = r*Math.sin(thetas[i] + theta);

		cube_var.rotation.x += 0.01;
		cube_var.rotation.y += 0.01;
	}

	renderer.render( scene, camera );

}