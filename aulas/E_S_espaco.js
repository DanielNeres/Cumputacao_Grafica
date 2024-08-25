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


class Circulo {
    constructor(scene, raio, cor, massa) {
        const geometry = new THREE.SphereGeometry(raio);
        const material = new THREE.MeshBasicMaterial({ color: cor, wireframe: true });
        this.mesh = new THREE.Mesh(geometry, material);
        this.massa = massa;
        scene.add(this.mesh);
    }

    setPositionAndDirection(x, y, z, angulo_z, angulo_xy, escalar) {
        this.mesh.position.set(x, y, z);

        let theta = angulo_z * Math.PI / 180;
        let phi = angulo_xy * Math.PI / 180;

        this.direcao = new THREE.Vector3(Math.sin(theta) * Math.cos(phi), Math.sin(theta) * Math.sin(phi), Math.cos(theta)).multiplyScalar(escalar);
    }

    mover() {
        this.mesh.position.add(this.direcao);

        for(const outro_corpo of circulos){
            if (outro_corpo != this){
                let direcao_outro_corpo = new THREE.Vector3(outro_corpo.position - this.position).normalize();
            }
        }
    }
}

let circulos = [];
for (let i = 0; i < 3; i++) {
    let circulo = new Circulo(scene, 5 - 2 * i, 0x006B5C, 5);
    circulo.setPositionAndDirection(0, 0, 0, 60, 140, 0.3);
    circulos.push(circulo);
}

function animate() {
    for (const circulo of circulos) {
        circulo.mover();
    }
    renderer.render(scene, camera);
}
