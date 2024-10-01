document.addEventListener("DOMContentLoaded", () => {
  const color1Input = document.getElementById('color1');
  const color2Input = document.getElementById('color2');
  const color = document.getElementById('color');
  
  function updateColor() {
    const color1 = color1Input.value;
    const color2 = color2Input.value;
    color.style.background = `linear-gradient(to right, ${color1}, ${color2})`;
}

  color1Input.addEventListener('input', updateColor);
  color2Input.addEventListener('input', updateColor);

  updateColor();
  
})