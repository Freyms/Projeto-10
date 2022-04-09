var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["90f3c546-c35e-40e9-a477-bba172699b43","7447ac38-6fd4-404f-a7a8-5ce6686f2cd3","e8494ed8-56a3-42d1-8776-b81587c03de0","4db29d90-306a-4421-b6b0-b0d076912637"],"propsByKey":{"90f3c546-c35e-40e9-a477-bba172699b43":{"name":"car2","sourceUrl":null,"frameSize":{"x":70,"y":121},"frameCount":1,"looping":true,"frameDelay":12,"version":"PYyDnlEuWcQLuSdLjBNQYuDJE6cIE5d7","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":121},"rootRelativePath":"assets/90f3c546-c35e-40e9-a477-bba172699b43.png"},"7447ac38-6fd4-404f-a7a8-5ce6686f2cd3":{"name":"car3","sourceUrl":null,"frameSize":{"x":70,"y":131},"frameCount":1,"looping":true,"frameDelay":12,"version":"E9RF.sF63NsUkDdoavRqL5Q36xWPmnXH","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":131},"rootRelativePath":"assets/7447ac38-6fd4-404f-a7a8-5ce6686f2cd3.png"},"e8494ed8-56a3-42d1-8776-b81587c03de0":{"name":"car4","sourceUrl":null,"frameSize":{"x":70,"y":130},"frameCount":1,"looping":true,"frameDelay":12,"version":"6xBFA0XQ3roCSU3Zsq7zrzV6R2fZoVpg","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":130},"rootRelativePath":"assets/e8494ed8-56a3-42d1-8776-b81587c03de0.png"},"4db29d90-306a-4421-b6b0-b0d076912637":{"name":"car1","sourceUrl":null,"frameSize":{"x":71,"y":116},"frameCount":1,"looping":true,"frameDelay":60,"version":"WHsksiDjtHee0wd8O2UHSy_Xxjnm77yh","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":71,"y":116},"rootRelativePath":"assets/4db29d90-306a-4421-b6b0-b0d076912637.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var carro1, carro2, carro3,carro4;
var borda1,borda2;
var bob;

  borda1 = createSprite(190,120,420,3);
  borda1.shapeColor="purple";
  borda2 = createSprite(190,260,420,3);
  borda2.shapeColor="purple";
  
  bob = createSprite(20,190,13,13);
  bob.shapeColor = "yellow";
  
  carro1 = createSprite(100,130,15,15);
  carro1.shapeColor = "limegreen";
  carro2 = createSprite(215,130,15,15);
  carro2.shapeColor = "limegreen";
  carro3 = createSprite(165,250,15,15);
  carro3.shapeColor = "limegreen";
  carro4= createSprite(270,250,15,15);
  carro4.shapeColor = "limegreen";
  
  carro1.velocityY=8;
  carro2.velocityY=6;
  carro3.velocityY=9;
  carro4.velocityY=7;
function draw() {
   background("white");
  text("Vidas: " + life,190,100);
  strokeWeight(0);
  fill("red");
  rect(0,120,52,140);
  fill("darkblue");
  rect(348,120,52,140);
  fill("black");
  rect(50,120,300,140);
  fill("white");
  rect(180,120,10,30);
  fill("white");
  rect(180,180,10,30);
  fill("white");
  rect(180,240,10,30);
   fill("white");
  rect(120,120,10,30);
  fill("white");
  rect(120,180,10,30);
  fill("white");
  rect(120,240,10,30);
   fill("white");
  rect(240,120,10,30);
  fill("white");
  rect(240,180,10,30);
  fill("white");
  rect(240,240,10,30);
carro1.bounceOff(borda1);
carro1.bounceOff(borda2);
carro2.bounceOff(borda1);
carro2.bounceOff(borda2);
carro3.bounceOff(borda1);
carro3.bounceOff(borda2);
carro4.bounceOff(borda1);
carro4.bounceOff(borda2);


if (keyDown("RIGHT_ARROW")) {
  bob.x=bob.x+3;
}
if (keyDown("LEFT_ARROW")) {
  bob.x=bob.x+-3;
}

if (bob.isTouching(carro1)||bob.isTouching(carro2)||bob.isTouching(carro3)||bob.isTouching(carro4)){
   bob.x=20;
   bob.y=190;
   life=life+1;
 }
  

drawSprites();
}
 

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
