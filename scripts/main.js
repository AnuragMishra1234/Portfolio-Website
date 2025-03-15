// scripts/main.js
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, 400 / 400, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(400, 400);
document.getElementById('3d-car').appendChild(renderer.domElement);

// Add lighting
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5).normalize();
scene.add(light);

// Load 3D car model
const loader = new THREE.GLTFLoader();
loader.load('assets/models/car.glb', (gltf) => {
  const car = gltf.scene;
  scene.add(car);
});

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();
gsap.from(".hero h1", {
    opacity: 0,
    y: -50,
    duration: 1,
    ease: "power2.out",
  });
  
  gsap.from(".project-card", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    scrollTrigger: {
      trigger: ".projects",
      start: "top 80%",
    },
  });