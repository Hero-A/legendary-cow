function start(){
    navigator.mediaDevices.getUserMedia({ audio: true});
    lassifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/dV1OwpEDY/', modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}

function gotResults(error, results){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1; 
        
        document.getElementById("result_label").innerHTML = 'I can hear - ' + results[0].label;
        document.getElementById("result_label").style.color = "rgb (" + random_number_r + "," + random_number_g + "," + random_number_r + ")";

        img_1 = document.getElementById('cat');
        img_2 = document.getElementById('cow');
        img_3 = document.getElementById('tiger');
        img_4 = document.getElementById('dog');

        if(results[0].label == "tiger"){
            img_1.src = 'tiger.gif';
            img_2.src = 'bull.png';
            img_3.src = 'german shepard.png';
            img_4.src = 'cat.png';
      }

      else if(results[0].label == "cat"){
        img_1.src = 'unnamed.png';
        img_2.src = 'Cat.gif';
        img_3.src = 'bull.png';
        img_4.src = 'german shepard.png';
  }
      else if(results[0].label == "cow"){
        img_1.src = 'unnamed.png';
        img_2.src = 'cat.png';
        img_3.src = 'cow.gif';
        img_4.src = 'german shepard.png';
  }
      else if(results[0].label == "dog"){
        img_1.src = 'unnamed.png';
        img_2.src = 'cat.png';
        img_3.src = '.bullpng';
        img_4.src = 'dog.gif';
}

    }
}