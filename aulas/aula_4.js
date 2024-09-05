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

var geometry = new THREE.BufferGeometry();
var vertices = new Float32Array([
    0.0,  0.0, 1.0,  // Vertex 1
   -1.0, 0, 0.0,  // Vertex 2
    1.0, 0, 0.0   // Vertex 3
]);
geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

var geometry_1 = new THREE.BufferGeometry();
var vertices_1 = new Float32Array([
    0.0,  1, 1.0,  // Vertex 1
   -1.0, 1, 0.0,  // Vertex 2
    1.0, 1, 0.0   // Vertex 3
]);
geometry_1.setAttribute('position', new THREE.BufferAttribute(vertices_1, 3));

var material_1 = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
var triangle_1 = new THREE.Mesh(geometry_1, material_1);
scene.add(triangle_1);

var material = new THREE.MeshBasicMaterial({ color: 0x00ff00, side: THREE.DoubleSide });
var triangle = new THREE.Mesh(geometry, material);
scene.add(triangle);


let cubes = [];
let thetas = [];
let raios = [];
let posicao_z = [];
let n = 55;

for (let j = 0; j < 4; j++) {
    for(let w = 1; w < 5; w++){
    for (let i = 0; i < n; i++) {

        const geometry = new THREE.BoxGeometry( 0.1, 0.1, 0.1, 1, 1, 1 );
        const material = new THREE.MeshBasicMaterial( { color: 0x00ff00} );
        const cube = new THREE.Mesh( geometry, material );
        

        let r = w;
        let z = j;
        let theta = (Math.PI/n)*i*2;

        cube.position.x = r*Math.cos(theta);
        cube.position.y = r*Math.sin(theta);
        cube.position.z = z;
        scene.add( cube );
        thetas.push(theta);
        raios.push( r );
        posicao_z.push( z );
        cubes.push(cube);
    }
}
}

camera.position.z = 6;
let theta_0 = 0;
function animate() {
	renderer.render( scene, camera );
    for(let i in cubes){
        theta_0 += 0.001;
        cubes[i].position.x = raios[i]*Math.cos(thetas[i] + theta_0);
        cubes[i].position.y = raios[i]*Math.sin(thetas[i] + theta_0);
        //cubes[i].position.z = posicao_z[i];
    }
}
renderer.setAnimationLoop( animate );
