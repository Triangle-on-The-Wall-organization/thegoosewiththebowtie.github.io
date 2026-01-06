function updateZoom() {
    const designWidth = 950;
    const scale = window.innerWidth / designWidth / 1.5;

    document.getElementById("zoom-root").style.zoom = scale;
}

window.addEventListener("resize", updateZoom);
updateZoom();
