const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
const renderer = new THREE.WebGLRenderer({ antialias: true})

renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )

var geometry = new THREE.BoxGeometry( 1, 1, 1)
var geometry2 =new THREE.BoxGeometry(1,1,1)
var geometry3=new  THREE.BoxGeometry(1,1,1)
var geometry4=new  THREE.BoxGeometry(1,1,1)
var geometry5=new THREE.BoxGeometry(1,1,1)

var material = new THREE.MeshStandardMaterial( { color: 0xff0051 })
var material2= new THREE.MeshStandardMaterial( { color: "#0000ff" })
var material3 =new THREE.MeshStandardMaterial({color :"#0000ff"})
var material4 =new THREE.MeshStandardMaterial({color :"#0000ff"})
var material5 =new THREE.MeshStandardMaterial({color :"#0000ff"})

var cube = new THREE.Mesh ( geometry, material )
var cube2 =new THREE.Mesh (geometry2, material2)
var cube3= new THREE.Mesh (geometry3, material3)
var cube4= new THREE.Mesh (geometry4, material4)
var cube5= new THREE.Mesh (geometry5, material5)

scene.add( cube )
scene.add(cube2)
scene.add(cube3)
scene.add(cube4)
scene.add(cube5)

renderer.render( scene, camera )
camera.position.z=5

cube2.position.y=3
cube3.position.y=-3
cube4.position.x=3
cube5.position.x=-3

var ambientLight = new THREE.AmbientLight ( 0xffffff, 0.5)
scene.add( ambientLight )

var pointLight = new THREE.PointLight( 0xffffff, 1 );
pointLight.position.set( 25, 50, 25 );
scene.add( pointLight );


var geometry = new THREE.BoxGeometry( 1.45, 1.45, 1.45)
var geometry2 = new THREE.BoxGeometry( 1.45, 1.45, 1.45)
var geometry3 = new THREE.BoxGeometry( 1.45, 1.45, 1.45)
var geometry4 = new THREE.BoxGeometry( 1.45, 1.45, 1.45)
var geometry5 = new THREE.BoxGeometry( 1.45, 1.45, 1.45)

var material = new THREE.MeshBasicMaterial( {
 color: "#dadada", wireframe: true, transparent: true
})
var wireframeCube = new THREE.Mesh ( geometry, material )
scene.add( wireframeCube )


var material2 = new THREE.MeshBasicMaterial( {
 color: "#dadada", wireframe: true, transparent: true
})
var wireframeCube2 = new THREE.Mesh ( geometry2, material2 )
scene.add( wireframeCube2 )


var material3 = new THREE.MeshBasicMaterial( {
 color: "#dadada", wireframe: true, transparent: true
})
var wireframeCube3 = new THREE.Mesh ( geometry3, material3 )
scene.add( wireframeCube3 )



var material4 = new THREE.MeshBasicMaterial( {
 color: "#dadada", wireframe: true, transparent: true
})
var wireframeCube4 = new THREE.Mesh ( geometry4, material4 )
scene.add( wireframeCube4 )


var material5 = new THREE.MeshBasicMaterial( {
 color: "#dadada", wireframe: true, transparent: true
})
var wireframeCube5 = new THREE.Mesh ( geometry5, material5 )
scene.add( wireframeCube5 )



wireframeCube2.position.y=3
wireframeCube3.position.y=-3
wireframeCube4.position.x=3
wireframeCube5.position.x=-3

function animate() {
 requestAnimationFrame( animate )
 cube.rotation.x += 0.04;
 cube.rotation.y += 0.04;
    
 cube2.rotation.x += 0.04;
 cube2.rotation.y += 0.04;    
    
 cube3.rotation.x += 0.04;
 cube3.rotation.y += 0.04;  
    
 cube4.rotation.x += 0.04;
 cube4.rotation.y += 0.04;    

 cube5.rotation.x += 0.04;
 cube5.rotation.y += 0.04;
    
 wireframeCube.rotation.x -= 0.01;
 wireframeCube.rotation.y -= 0.01; 

 wireframeCube2.rotation.x -= 0.01;
 wireframeCube2.rotation.y -= 0.01;     
     
 wireframeCube3.rotation.x -= 0.01;
 wireframeCube3.rotation.y -= 0.01;
    
 wireframeCube4.rotation.x -= 0.01;
 wireframeCube4.rotation.y -= 0.01;
    
wireframeCube5.rotation.x -= 0.01;
 wireframeCube5.rotation.y -= 0.01;     
         
         
         
 renderer.render( scene, camera )
}
animate()


