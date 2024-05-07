export function getColorPalette() {
    var url = "http://colormind.io/api/";
    var data = {
        model: "default",
    };

    var http = new XMLHttpRequest();

    return new Promise((resolve) => {
        http.onreadystatechange = function () {
            if (http.readyState === 4 && http.status === 200) {
                var palette = JSON.parse(http.responseText).result;
                resolve(palette);
            }
        };

        http.open("POST", url, true);
        http.send(JSON.stringify(data));
    });
}
