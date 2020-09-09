const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let bob = []
let roof;
let rope=[];

function preload() {

}

function setup() {
    createCanvas(800, 700);


    engine = Engine.create();
    world = engine.world;
    var x = 300
    for (var i = 0; i <= 4; i++) {
        bob.push(new Bob(x, 360, 50, 50))
        x += 50
    }
    roof = new Roof(400, 120, 260, 10)
    Engine.run(engine);
    dist=50;
    for (var a = 0; a <= 4; a++) {
        rope.push(new Rope(bob[a].body, roof.body,a===0?-100:a===1?-50:a===2?0:a===3?50:a===4?100:0,0))
        dist +=50;
    }

}


function draw() {
    background("white");
    Engine.update(engine);
    rectMode(CENTER);
    stroke("black")
    fill("pink")
    bob.forEach((bobs) => {
        bobs.display()
    })
    fill("grey")
    roof.display()
    rope.forEach((rop)=>{
        rop.display()
    })
    drawSprites();

}
// function keyPressed(){
//     if (keyCode === DOWN_ARROW){
//         Body.applyForce(rope.body,rope.body.position,{x:200,y:200})
//         print("hello")
//     }
// }
function keyPressed() {
    if (keyCode === UP_ARROW){
        Body.applyForce(bob[0].body,bob[0].body.position,{x:-2000,y:-2000})
        print("hello")
    }
}