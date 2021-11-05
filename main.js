status = "";
alarm = "";

function preload()
{
   alarm = loadSound("alarm_r.mp3")
}

function setup()
{
    canvas = createCanvas(700,600)
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    objectDetector = ml5.objectDetector('cocossd' , modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
}

function modelLoaded()
{
    console.log("Model Loaded!");
   status = true;
}

function gotResult(error, results)
{
 if (error)
{
   console.log(error);
}
   console.log(results);
   objects = results;
}

function draw()
{
    image(video, 0, 0, 480, 380);
    if (status = true)
    {
        objectDetector.detect(video, gotResult);
        for(i=0; i < objects.length; i++)
         document.getElementById("status").innerHTML = "Status : Detecting Objects";
         document.getElementById("baby").innerHTML = "Baby Found";

         fill("#0000FF");
         percent = floor(objects[i].confidence* 100);
         text(objects[i].label + "" + percent + "%", objects[i].x + 15, objects[i].y + 15);
         noFill();
         stroke("#FF0000");
         rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
         else
         {
            document.getElementById("baby"),innerHTML = "Baby Not Found"; 
             play.alarm();
             alarm.loop();
             alarm.speed(1);
             alarm.volume(1);
               
         
         }
    }
   
}
