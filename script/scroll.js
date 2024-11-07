let currentContent = 0;
const contents = [
    document.getElementById('scrollContent'),
    document.getElementById('scrollContent2'),
    document.getElementById('scrollContent3')
];

function scrollContent() {
    contents[currentContent].style.display = 'none';
    currentContent = (currentContent + 1) % contents.length;
    contents[currentContent].style.display = 'block';
}
setInterval(scrollContent, 8000);
