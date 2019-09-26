const glob = require("glob");
const imagemin = require("imagemin");
const imageminMozjpeg = require("imagemin-mozjpeg");
const imageminJpegtran = require("imagemin-jpegtran");
const imageminPngquant = require("imagemin-pngquant");

let dirs = [
    "assets/images/works/",
    ...glob.sync("assets/images/gallery/**/"),
    ...glob.sync("assets/images/critics/**/"),
    ...glob.sync("assets/images/video-thumbs/**/")
];

dirs.forEach(dir => {
    (async () => {
        const files = await imagemin([dir + "*.{jpg,png}"], dir, {
            plugins: [
                imageminMozjpeg(),
                imageminJpegtran(),
                imageminPngquant({
                    quality: "65-80"
                })
            ]
        });

        console.log("Image minification complete: " + dir);
    })();
});