// var camera, scene, renderer;

// // grab the body
// var body = document.querySelector('body');

// // create camera
// camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.6, 1000)

// camera.position.set(0, 0, 40);

// // create the scene
// scene = new THREE.Scene();

// // create the renderer
// renderer = new THREE.WebGLRenderer({preserveDrawBuffer: true});
// renderer.setSize(window.innerWidth, window.innerHeight);

// // append the rendere to the body which creates a canvas element
// body.appendChild(renderer.domElement);

// // three things to make a <3
// // 1. geometry 2. material, mesh(combination of geometry and material)

// var geometry = new THREE.BoxGeometry(12, 12, 12);
// var material = new THREE.MeshBasicMaterial({
//   color: 0xff69b4,
//   wireframe: true
// });

// var cube = new THREE.Mesh( geometry, material);

// var material = new THREE.MeshBasicMaterial({
//   color: 0xff69b4,
//   wireframe: true
// });

// // add it to the scene

// scene.add(cube)

// //show the scene

// var particleSystem;
// var geo;

// function initParticle(){
// 	geo = new THREE.Geometry();

// 	for (var i = 0; i < 2048; i++){
// 		var vertex = new THREE.Vector3(Math.sin(i/20) * 10, Math.cos(i/30) *10, Math.sin(i/10) * 10);

// 		geo.vertices.push(vertex);
// 		var color = new THREE.Color(Math.random(), Math.random(), Math.random());
// 		geo.colors.push(color)
// 	}

// 	var material = new THREE.PointsMaterial({
// 		vertexColors: THREE.VertextColors,
// 		depthTest: true,
// 		opacity: 0.9,
// 		sizeAttenuation: true,
// 		size: 0.20

// 	})

// 	particleSystem = new THREE.Points( geo, material)

// 	scene.add ( particleSystem)
// }

// initParticle();

// function render(){
// 	cube.rotation.x += 0.006
// 	cube.rotation.y -= 0.03

// 	geo.verticesNeedUpdate = true;

// 	for (var i = 0; i < 2048; i++){
// 		//brownian motion
// 		geo.vertices[i].x = Math.sin(i/30) * 10 + Math.random()
// 		geo.vertices[i].y = Math.cos(i/30) * 10 + Math.random()
// 		geo.vertices[i].z = Math.sin(i/40) * 10 + Math.random()

// 	}

// 	renderer.render(scene, camera);

// 	requestAnimationFrame(render)
// }

// render();
