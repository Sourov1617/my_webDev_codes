const themes = {
    "bright": {
        "backgroundColor": "lightyellow",
        "color": "darkgreen"
    },
    "cool": {
        "backgroundColor": "lightgray",
        "color": "indigo"
    },
    "fiery": {
        "backgroundColor": "chocolate",
        "color": "lightgoldenrodyellow"
    }
};

function changeTheme(event) {
    const selectedTheme = event.target.id;  // Get the selected theme's ID
    if (themes[selectedTheme]) {
        document.body.style.backgroundColor = themes[selectedTheme].backgroundColor;
        document.body.style.color = themes[selectedTheme].color;
    }
}

// Attach event listeners to all radio buttons
document.addEventListener("DOMContentLoaded", () => {
    const themeRadios = document.querySelectorAll('input[name="theme"]');
    themeRadios.forEach(radio => {
        radio.addEventListener("change", changeTheme);
    });
});

module.exports = changeTheme;