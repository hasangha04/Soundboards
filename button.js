const soundsElement = document.querySelector('#sounds');

(async () => {
    const sounds = await getSounds();
    addSoundsToPage(sounds);
})();

async function getSounds() {
  const response = await fetch('https://hasangha04.github.io/Soundboards/sounds.json');
  const json = await response.json();
  return json;
}

function addSoundsToPage(sounds) {
    const soundsElement = document.getElementById('sounds');
  
    sounds.forEach(sound => {
      const soundDiv = document.createElement('div');
      soundDiv.className = 'sound';
  
      const player = document.createElement('audio');
      soundDiv.appendChild(player);
      player.setAttribute('src', `https://hasangha04.github.io/Soundboards/${sound.src}`);
  
      const image = document.createElement('img');
      soundDiv.appendChild(image);
      image.setAttribute('src', `https://hasangha04.github.io/Soundboards/${sound.image}`);
  
      // Listen for image click event to play sound
      image.addEventListener('click', () => {
        player.currentTime = 0;
        player.play();
      });

      soundDiv.addEventListener('contextmenu', event => {
        event.preventDefault();
        editSound(soundDiv, player, image);
      });
  
      soundsElement.appendChild(soundDiv);
    });
  
    // Create a button to add a new sound
    const newSoundButton = document.createElement('button');
    newSoundButton.textContent = '➕';
    newSoundButton.classList.add('new-sound-button');
    document.body.appendChild(newSoundButton);
  
    // Listen for click event on new sound button
    newSoundButton.addEventListener('click', () => {
    const newSoundDiv = document.createElement('div');
    newSoundDiv.className = 'sound';
  
    const newPlayer = document.createElement('audio');
    newSoundDiv.appendChild(newPlayer);
  
    const newImage = document.createElement('img');
    newSoundDiv.appendChild(newImage);
  
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'audio/*';
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (file) {
        newPlayer.src = URL.createObjectURL(file);
      }
    });
    newSoundDiv.appendChild(fileInput);
  
    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.accept = 'image/*';
    imageInput.addEventListener('change', () => {
      const file = imageInput.files[0];
      if (file) {
        newImage.src = URL.createObjectURL(file);
      }
    });
    newSoundDiv.appendChild(imageInput);
  
    // Listen for image click event to play sound
    newImage.addEventListener('click', () => {
      newPlayer.currentTime = 0;
      newPlayer.play();
    });
  
    soundsElement.appendChild(newSoundDiv);
  });
  
}

function editSound(soundDiv) {
    const player = soundDiv.querySelector('audio');
    const image = soundDiv.querySelector('img');
    soundDiv.removeChild(player);
    soundDiv.removeChild(image);
  
    const newPlayer = document.createElement('audio');
    soundDiv.appendChild(newPlayer);
  
    const newImage = document.createElement('img');
    soundDiv.appendChild(newImage);
  
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'audio/*';
    fileInput.addEventListener('change', () => {
      const file = fileInput.files[0];
      if (file) {
        newPlayer.src = URL.createObjectURL(file);
      }
    });
    soundDiv.appendChild(fileInput);
  
    const imageInput = document.createElement('input');
    imageInput.type = 'file';
    imageInput.accept = 'image/*';
    imageInput.addEventListener('change', () => {
      const file = imageInput.files[0];
      if (file) {
        newImage.src = URL.createObjectURL(file);
      }
    });
    soundDiv.appendChild(imageInput);
  
    // Listen for image click event to play sound
    newImage.addEventListener('click', () => {
      newPlayer.currentTime = 0;
      newPlayer.play();
    });
  }
  