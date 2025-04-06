// Set up the scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000); // Black background
document.getElementById('container').appendChild(renderer.domElement);

// Add stars to the scene
function addStars() {
    starData.forEach(star => {
        const [x, y, z, magnitude, color] = star;
        
        // Size based on magnitude (smaller magnitude = brighter star)
        const size = 0.1 + (3 - magnitude) * 0.1;
        
        const geometry = new THREE.SphereGeometry(size, 8, 8);
        const material = new THREE.MeshBasicMaterial({ color: color });
        const starMesh = new THREE.Mesh(geometry, material);
        
        starMesh.position.set(x, y, z);
        scene.add(starMesh);
    });
}

// Add constellation lines
function addConstellationLines() {
    // Big Dipper
    const bigDipperVertices = [
        new THREE.Vector3(50, 60, 40),  // Dubhe
        new THREE.Vector3(55, 65, 43),  // Merak
        new THREE.Vector3(60, 62, 38),  // Phecda
        new THREE.Vector3(65, 59, 36),  // Megrez
        new THREE.Vector3(70, 56, 39),  // Alioth
        new THREE.Vector3(75, 53, 42),  // Mizar
        new THREE.Vector3(80, 50, 45),  // Alkaid
    ];
    
    const bigDipperGeometry = new THREE.BufferGeometry().setFromPoints(bigDipperVertices);
    const material = new THREE.LineBasicMaterial({ color: 0x4169E1, transparent: true, opacity: 0.3 });
    const bigDipper = new THREE.Line(bigDipperGeometry, material);
    scene.add(bigDipper);
    
    // Orion
    const orionVertices = [
        new THREE.Vector3(-30, -10, 60),  // Rigel
        new THREE.Vector3(-19, -12, 51),  // Alnitak
        new THREE.Vector3(-21, -10, 53),  // Alnilam
        new THREE.Vector3(-22, -8, 52),   // Mintaka
        new THREE.Vector3(-25, 0, 58),    // Betelgeuse
    ];
    
    const orionGeometry = new THREE.BufferGeometry().setFromPoints(orionVertices);
    const orion = new THREE.Line(orionGeometry, material);
    scene.add(orion);

    // Orion's belt
    const beltVertices = [
        new THREE.Vector3(-22, -8, 52),   // Mintaka
        new THREE.Vector3(-21, -10, 53),  // Alnilam
        new THREE.Vector3(-19, -12, 51),  // Alnitak
    ];
    
    const beltGeometry = new THREE.BufferGeometry().setFromPoints(beltVertices);
    const belt = new THREE.Line(beltGeometry, material);
    scene.add(belt);
}

// Add a subtle celestial sphere
function addCelestialSphere() {
    const geometry = new THREE.SphereGeometry(300, 32, 32);
    const material = new THREE.MeshBasicMaterial({
        color: 0x000033,
        side: THREE.BackSide,
        transparent: true,
        opacity: 0.3
    });
    const sphere = new THREE.Mesh(geometry, material);
    scene.add(sphere);
}

// Setup controls
const controls = new THREE.OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.rotateSpeed = 0.5;
controls.zoomSpeed = 0.7;

// Initialize scene
function init() {
    camera.position.z = 100;
    
    addCelestialSphere();
    addStars();
    addConstellationLines();
    
    // Add subtle ambient light
    const ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);
    
    animate();
}

// Animation loop
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}

// Handle window resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// Initialize the app
init();