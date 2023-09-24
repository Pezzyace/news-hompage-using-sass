const openNav = document.getElementById('hamburger');
const closeNav = document.getElementById('close');
const navigation = document.getElementById('mobile-nav');

openNav.addEventListener('click', () => {
  navigation.style.display = 'flex';
})

closeNav.addEventListener('click', () => {
  navigation.style.display = 'none';
})