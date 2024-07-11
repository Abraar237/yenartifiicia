document.addEventListener('DOMContentLoaded', () => {
    const profileCard = document.getElementById('profile-card');
    const profileDialog = document.getElementById('profile-dialog');
    const profileImage = document.getElementById('profile-image');
    const profileName = document.getElementById('profile-name');
    const profileDesignation = document.getElementById('profile-designation');
    const profileDesignation2 = document.getElementById('profile-designation2');
    const dialogTitle = document.getElementById('dialog-title');
    const dialogDescription = document.getElementById('dialog-description');
    const dialogImage = document.getElementById('dialog-image');
    const dialogAbout = document.getElementById('dialog-about');

    const image = 'path_to_image';
    const image2 = 'path_to_image2';
    const imageAlt = 'profile';
    const name = 'John Doe';
    const designation = 'Professor';
    const designation2 = 'Head of Department';
    const about = [
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        'Vivamus lacinia odio vitae vestibulum vestibulum.',
        'Cras venenatis euismod malesuada.'
    ];

    profileImage.src = image;
    profileImage.alt = imageAlt;
    profileName.textContent = name;
    profileDesignation.textContent = designation;
    if (designation2) {
        profileDesignation2.textContent = designation2;
        profileDesignation2.style.display = 'block';
    }

    dialogTitle.textContent = name;
    dialogDescription.textContent = designation;
    dialogImage.src = image2;
    dialogImage.alt = imageAlt;

    about.forEach(para => {
        const p = document.createElement('p');
        p.textContent = para;
        dialogAbout.appendChild(p);
    });

    profileCard.addEventListener('click', () => {
        profileDialog.style.display = 'block';
    });

    profileDialog.addEventListener('click', () => {
        profileDialog.style.display = 'none';
    });
});
