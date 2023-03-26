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
  
      // Create an input element for selecting image file
      const imageInput = document.createElement('input');
      imageInput.type = 'file';
      imageInput.accept = 'image/*';
      soundDiv.appendChild(imageInput);
  
      const player = document.createElement('audio');
      soundDiv.appendChild(player);
      player.setAttribute('src', `https://hasangha04.github.io/Soundboards/${sound.src}`);
  
      // Create an image element for displaying selected image
      const image = document.createElement('img');
      soundDiv.appendChild(image);
  
      // Listen for file input change event
      imageInput.addEventListener('change', () => {
        const file = imageInput.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          image.src = reader.result;
          // Hide the input element after an image is selected
          imageInput.style.display = 'none';
        };
      });
  
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
  
      // Create an input element for selecting image file
      const newImageInput = document.createElement('input');
      newImageInput.type = 'file';
      newImageInput.accept = 'image/*';
      newSoundDiv.appendChild(newImageInput);
  
      const newPlayer = document.createElement('audio');
      newSoundDiv.appendChild(newPlayer);
  
      // Create an image element for displaying selected image
      const newImage = document.createElement('img');
      newSoundDiv.appendChild(newImage);
  
      // Listen for file input change event
      newImageInput.addEventListener('change', () => {
        const file = newImageInput.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          newImage.src = reader.result;
          // Hide the input element after an image is selected
          newImageInput.style.display = 'none';
        };
      });
  
      // Listen for image click event to play sound
      newImage.addEventListener('click', () => {
        newPlayer.currentTime = 0;
        newPlayer.play();
      });
  
      soundsElement.appendChild(newSoundDiv);
    });
  }
  
  // Call the function to add sounds to page
  addSoundsToPage(sounds);
  