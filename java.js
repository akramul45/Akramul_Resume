const profilePictureContainer = document.getElementById('profilePictureContainer');
const profilePicture = document.getElementById('profilePicture');
let isRotated = false;

            profilePictureContainer.addEventListener('click', () => {
            isRotated = !isRotated;
            profilePictureContainer.classList.toggle('rotated', isRotated);
            profilePicture.src = isRotated ? 'RPP.png' : 'PP.png';
        });

