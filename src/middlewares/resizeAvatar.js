const Jimp = require('jimp');
const { HttpError } = require('../helpers');

const resizeAvatar = async (image, filename) => {
    try {
        const img = await Jimp.read(image);
        const resizedImage = `${filename}-small-bw.jpg`;
        await img.resize(250, 250).writeAsync(resizedImage);
        return resizedImage;
    } catch (err) {
        HttpError(400, 'An error occurred while resizing the avatar.');
    }
};

module.exports = resizeAvatar;
