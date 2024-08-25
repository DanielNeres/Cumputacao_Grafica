import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


class Cube{
	constructor(cube){
		let max = 0.3;
		let min = -0.3;
		let rmax = 0.2;
		let rmin = -0.2;

		this.velx = min + (max - min)* Math.random();
		this.vely = min + (max - min)* Math.random();
		this.velz = min + (max - min)* Math.random();
		this.rvelx = rmin + (rmax - rmin)* Math.random();
		this.rvely = rmin + (rmax - rmin)* Math.random();
		this.rvelz = rmin + (rmax - rmin)* Math.random();
		this.cube = cube;
	}

	update(){
		if (this.cube.position.x >= 50 || this.cube.position.x <= -50){
			this.velx *= -1;
		}
		this.cube.position.x += this.velx
	
		if (this.cube.position.y >= 50 || this.cube.position.y <= -50){
			this.vely *= -1;
		}
		this.cube.position.y += this.vely
	
		if (this.cube.position.z >= 50 || this.cube.position.z <= -50){
			this.velz *= -1;
		}
		this.cube.position.z += this.velz

		this.cube.rotation.x += this.rvelx;
		this.cube.rotation.y += this.rvely;
		this.cube.rotation.z += this.rvelz;
	}
}

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 3, 1, 1, 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00008f } );
let cubes = [];

for(let i = 0; i < 5000; i++){
	const cube = new Cube( new THREE.Mesh( geometry, material ));
	scene.add( cube.cube );
	cubes.push(cube);
}


const geometry_base = new THREE.BoxGeometry( 100, 100, 100, 1, 1, 1 );
const material_base = new THREE.MeshBasicMaterial( { color: 0x00008f, wireframe: true } );
const base = new THREE.Mesh( geometry_base, material_base );
scene.add( base );

scene.background = new THREE.Color(0x404040);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

camera.position.z = 5;

function animate() {
	renderer.render( scene, camera );
	for (var cube of cubes){
		cube.update();
	}
}
renderer.setAnimationLoop( animate );

