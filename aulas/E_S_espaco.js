import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setAnimationLoop(animate);
document.body.appendChild(renderer.domElement);

renderer.setClearColor(0xDBDCDF);

let pontos_x = [];
pontos_x.push(new THREE.Vector3(-100, 0, 0));
pontos_x.push(new THREE.Vector3(100, 0, 0));

const geometry_linha_x = new THREE.BufferGeometry().setFromPoints(pontos_x);
const material_linha_x = new THREE.LineBasicMaterial({ color: 0xff0000 });
const linha_x = new THREE.Line(geometry_linha_x, material_linha_x);
scene.add(linha_x);

const geometry_ponto_x = new THREE.SphereGeometry(1);
const material_ponto_x = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const ponto_x = new THREE.Mesh(geometry_ponto_x, material_ponto_x);
ponto_x.position.x = 100;
scene.add(ponto_x);

let pontos_y = [];
pontos_y.push(new THREE.Vector3(0, -100, 0));
pontos_y.push(new THREE.Vector3(0, 100, 0));

const geometry_linha_y = new THREE.BufferGeometry().setFromPoints(pontos_y);
const material_linha_y = new THREE.LineBasicMaterial({ color: 0x00ff00 });
const linha_y = new THREE.Line(geometry_linha_y, material_linha_y);
scene.add(linha_y);

const geometry_ponto_y = new THREE.SphereGeometry(1);
const material_ponto_y = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const ponto_y = new THREE.Mesh(geometry_ponto_y, material_ponto_y);
ponto_y.position.y = 100;
scene.add(ponto_y);

let pontos_z = [];
pontos_z.push(new THREE.Vector3(0, 0, -100));
pontos_z.push(new THREE.Vector3(0, 0, 100));

const geometry_linha_z = new THREE.BufferGeometry().setFromPoints(pontos_z);
const material_linha_z = new THREE.LineBasicMaterial({ color: 0x0000ff });
const linha_z = new THREE.Line(geometry_linha_z, material_linha_z);
scene.add(linha_z);

const geometry_ponto_z = new THREE.SphereGeometry(1);
const material_ponto_z = new THREE.MeshBasicMaterial({ color: 0x0000ff });
const ponto_z = new THREE.Mesh(geometry_ponto_z, material_ponto_z);
ponto_z.position.z = 100;
scene.add(ponto_z);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target.set(0, 0, 0);
controls.update();

camera.position.z = 40;

let esferas = [];
let massas = [];
let massa = 5;
for (let i = 0; i < 2; i++) {
    const geometry_circulo = new THREE.SphereGeometry(5 - 2 * i);
    const material_circulo = new THREE.MeshBasicMaterial({ color: 0x006B5C, wireframe: true });
    const circulo = new THREE.Mesh(geometry_circulo, material_circulo);
    scene.add(circulo);
    esferas.push(circulo);
    massas.push(massa);
}

let escalar = 0.3;
let angulo_z = 60;
let angulo_xy = 140;

angulo_z *= Math.PI / 180;
angulo_xy *= Math.PI / 180;

let direcao = new THREE.Vector3(Math.sin(angulo_z) * Math.cos(angulo_xy), Math.sin(angulo_z) * Math.sin(angulo_xy), Math.cos(angulo_z)).multiplyScalar(escalar);

function animate() {
    for (const circulo of esferas) {
        circulo.position.add(direcao);
    }
    renderer.render(scene, camera);
}
