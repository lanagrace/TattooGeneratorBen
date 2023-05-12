 var images = []
 let r =0;
function preload(){
 
  for(let i=1;i<33;i++){
   

    append(images, "https://raw.githubusercontent.com/lanagrace/TattooGeneratorBen/main/Images/img"+i+".jpg");
/*     console.log(images.length);*/
  }
}
function setup() {
  noCanvas();
}


function draw() {
  background(100);
  
  image(images[r], 0, 0)
  
  }

  function mouseClicked() {
    r = floor(random(1, images.length));

    var img =  document.getElementById("tattooImage");
    console.log(img);
    img.src =images[r];

    }
  
  
