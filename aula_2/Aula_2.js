import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


function normalizar(geometry, radius) {
    const position = geometry.attributes.position;
    for (let i = 0; i < position.count; i++) {
        const x = position.getX(i);
        const y = position.getY(i);
        const z = position.getZ(i);
        const vector = new THREE.Vector3(x, y, z).normalize().multiplyScalar(radius);
        position.setXYZ(i, vector.x, vector.y, vector.z);
    }
    position.needsUpdate = true;
}

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

/*for (let i = 0; i < 10; i++){

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
}*/

const m = 15;
const deltax = 0.3
const aresta = 1
const pulo = (m - 1) *(deltax + aresta)/2;

const n = 15;
const deltay = 0.3
const pulo_y = (n - 1) *(deltay + aresta)/2;

const ziga = 15;
const deltaz = 0.3
const pulo_z = (n - 1) *(deltaz + aresta)/2;

for(let w = 0; w < ziga; w++){

for (let j = 0; j < n; j++){

	for (let i = 0; i < m; i++){

		const geometry = new THREE.BoxGeometry( aresta, aresta, aresta );
		const material = new THREE.MeshBasicMaterial( { color: 0x006B5C, wireframe: true } );
		const cube = new THREE.Mesh( geometry, material );
		cube.position.x = i * (aresta + deltax) - pulo;
		cube.position.y = j * (aresta + deltay) - pulo_y;
		cube.position.z = -w * (aresta + deltay) - pulo_z;
		scene.add( cube );
		cubes.push(cube);
	}
	
}
}

const geometry_circulo = new THREE.SphereGeometry( 5);
const material_circulo = new THREE.MeshBasicMaterial( { color: 0x006B5C, wireframe: true } );
const circulo = new THREE.Mesh( geometry_circulo, material_circulo );

//scene.add( circulo );


const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();


camera.position.z = 5;



function animate() {

	/*theta += 0.01;
	console.log("oi");
	for (var i in cubes){
		cube = cubes[i];
		let theta0 = 0;
		cube.position.y += r*Math.sin(-theta + theta0);
		cube.position.x += r*Math.cos(-theta + theta0);
		cube.position.z += r*Math.sin(-theta + theta0);

		cube.rotation.x += 0.01;
		cube.rotation.y += 0.01;
	}*/

	for(var cube of cubes){
		cube.position.z += 0.2;
		if(cube.position.z > 5){
			cube.position.z = - 5;
		}
	}

	renderer.render( scene, camera );

}