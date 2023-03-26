function addSoundsToPage(sounds) {
    const soundsElement = document.getElementById('sounds');
  
    sounds.forEach(sound => {
      const soundDiv = document.createElement('div');
      soundDiv.className = 'sound';
  
      const player = document.createElement('audio');
      soundDiv.appendChild(player);
      player.setAttribute('src', `https://hasangha04.github.io/Soundboards/${sound.audioSrc}`);
  
      const image = document.createElement('img');
      soundDiv.appendChild(image);
      image.setAttribute('src', `https://hasangha04.github.io/Soundboards/${sound.imageSrc}`);
  
      // Listen for image click event to play sound
      image.addEventListener('click', () => {
        player.currentTime = 0;
        player.play();
      });
  
      soundsElement.appendChild(soundDiv);
    });
  
    // Create a button to add a new sound
    const newSoundButton = document.createElement('button');
    newSoundButton.textContent = 'New Sound';
    newSoundButton.style.position = 'fixed';
    newSoundButton.style.bottom = '0';
    newSoundButton.style.right = '0';
    newSoundButton.style.backgroundColor = 'white';
    newSoundButton.style.padding = '10px';
    newSoundButton.style.borderRadius = '10px';
    document.body.appendChild(newSoundButton);
  
    // Listen for click event on new sound button
    newSoundButton.addEventListener('click', () => {
      const newSoundDiv = document.createElement('div');
      newSoundDiv.className = 'sound';
  
      const newPlayer = document.createElement('audio');
      newSoundDiv.appendChild(newPlayer);
  
      const newImage = document.createElement('img');
      newSoundDiv.appendChild(newImage);
  
      // Listen for image click event to play sound
      newImage.addEventListener('click', () => {
        newPlayer.currentTime = 0;
        newPlayer.play();
      });
  
      soundsElement.appendChild(newSoundDiv);
    });
  }
  