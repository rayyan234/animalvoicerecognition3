var cat = 0;
var dog = 0;
var lion = 0;
var snake = 0;
var background_noise = 0;


function startclassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/Q9hyAKTma/model.json',modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
    

}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    
        img = document.getElementById("voice_img");
        if(results[0].label == "barking"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog+1;
            document.getElementById("voices").innerHTML = "Detected Dog - "+ dog;
        }
        else if(results[0].label == "meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat+1;
            document.getElementById("voices").innerHTML = "Detected Cat - "+ cat;
        }
        else if(results[0].label == "roaring"){
            img.src = "https://giphy.com/stickers/imoji-lion-xUA7b9RVkKvb02swco";
            lion = lion+1;
            document.getElementById("voices").innerHTML = "Detected Lion - "+ lion;
        }
        else if(results[0].label == "hissing"){
            img.src = "https://media0.giphy.com/media/5fwoTYsw2D6yFI5X9x/giphy.gif?cid=ecf05e47gkf2gypvjjun9jlt9kiq0f234965d65914kk4pdq&rid=giphy.gif&ct=s";
            cow = cow+1;
            document.getElementById("voices").innerHTML = "Detected Cow - "+ cow;
        }
        else{
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
            background_noise = background_noise+1;
            document.getElementById("voices").innerHTML = "Detected Background Noise - "+ background_noise;
        }
    }
    }
