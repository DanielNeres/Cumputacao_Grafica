import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 1, 1, 1, 10, 10, 10 );
const material = new THREE.MeshBasicMaterial( { color: 0xc500a2, wireframe: true } );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.x = 1;

const geometry_2 = new THREE.BoxGeometry( 1, 1, 1, 10, 10, 10 );
const material_2 = new THREE.MeshBasicMaterial( { color: 0xc500a2, wireframe: true } );
const cube_2 = new THREE.Mesh( geometry_2, material_2);
scene.add( cube_2 );
cube_2.position.x = -1;

const geometry_3 = new THREE.BoxGeometry( 1, 1, 1, 10, 10, 10 );
const material_3 = new THREE.MeshBasicMaterial( { color: 0xc500a2, wireframe: true } );
const cube_3 = new THREE.Mesh( geometry_3, material_3);
scene.add( cube_3 );
cube_3.position.y = -1;

const geometry_4 = new THREE.BoxGeometry( 1, 1, 1, 10, 10, 10 );
const material_4 = new THREE.MeshBasicMaterial( { color: 0xc500a2, wireframe: true } );
const cube_4 = new THREE.Mesh( geometry_4, material_4);
scene.add( cube_4 );
cube_4.position.y = 1;

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

camera.position.z = 5;

let arrowup = false;
let arrowdown = false;
let arrowleft = false;
let arrowright = false;
let espace = false;

let posisao_z = cube.position.z;
let posisao_z_2 = cube_2.position.z;
let posisao_z_3 = cube_2.position.z;
let posisao_z_4 = cube_2.position.z;

function animate() {
	renderer.render( scene, camera );
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	cube_2.rotation.x += 0.01;
	cube_2.rotation.y += 0.01;

	cube_3.rotation.x += 0.01;
	cube_3.rotation.y += 0.01;

	cube_4.rotation.x += 0.01;
	cube_4.rotation.y += 0.01;

	if(arrowup){
		cube.position.y += 0.05
		cube_2.position.y += 0.05
		cube_3.position.y += 0.05
		cube_4.position.y -= 0.05
	}
	if(arrowdown){
		cube.position.y -= 0.05
		cube_2.position.y -= 0.05
		cube_3.position.y -= 0.05
		cube_4.position.y += 0.05
	}
	if(arrowleft){
		cube.position.x -= 0.05
		cube_2.position.x += 0.05
		cube_3.position.y -= 0.05
		cube_4.position.y -= 0.05
	}
	if(arrowright){
		cube.position.x += 0.05
		cube_2.position.x -= 0.05
		cube_3.position.y += 0.05
		cube_4.position.y += 0.05
	}
	if(espace){
		cube.position.z = posisao_z;
		cube_2.position.z = posisao_z_2;
		cube_3.position.z = posisao_z_3;
		cube_4.position.z = posisao_z_4;
		espace = false;
	}
	cube.position.z -= 0.1
	cube_2.position.z -= 0.1
	cube_3.position.z -= 0.1
	cube_4.position.z -= 0.1
}
renderer.setAnimationLoop( animate );

document.addEventListener("keydown", onDocumentKeyDown, false);

function onDocumentKeyDown(event){
	switch (event.key) {
		case "ArrowUp":
			arrowup = true;
			break;
		
		case "ArrowDown":
			arrowdown = true;
			break;
		case "ArrowLeft":
			arrowleft = true;
			break;
		case "ArrowRight":
			arrowright = true;
			break;	
		case " ":
			espace = true;
			break;		
		default:
			break;
	}
	console.log(event.key);
	console.log(event.keyCode);
}

document.addEventListener("keyup", onDocumentKeyUp, false);


function onDocumentKeyUp(event){
	switch (event.key) {
		case "ArrowUp":
			arrowup = false;
			break;

		case "ArrowDown":
			arrowdown = false;
			break;
		case "ArrowLeft":
			arrowleft = false;
			break;
		case "ArrowRight":
			arrowright = false;
			break;
	
		default:
			break;
	}
	console.log(event.key);
	console.log(event.keyCode);
}