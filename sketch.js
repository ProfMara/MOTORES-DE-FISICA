const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//variaveis
var engine;
var world;
var solo, bola;
var parado;
var mexendo;


function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;

}


function draw() {
    background("cyan");
    //atualiza o motor
    Engine.update(engine);

}
