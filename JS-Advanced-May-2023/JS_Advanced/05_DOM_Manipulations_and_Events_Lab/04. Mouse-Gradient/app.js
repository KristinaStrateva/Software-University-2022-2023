function attachGradientEvents() {
    const gradientElement = document.getElementById('gradient');

    gradientElement.addEventListener('mousemove', percentage);
    gradientElement.addEventListener('mouseout', reset);

    function percentage(event) {
        const gradientElementWidth = event.target.clientWidth - 1;
        let pointerPercentage = Math.floor(event.offsetX / gradientElementWidth * 100);

        document.getElementById('result').textContent = `${pointerPercentage}%`;
    }

    function reset(event) {
        document.getElementById('result').textContent = '';
    }
}