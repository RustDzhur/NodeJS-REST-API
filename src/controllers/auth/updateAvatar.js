const { User } = require('../../models/authSchema');
const { ctrlWrapper } = require('../../decorators/ctrlWrapper');
const fs = require('fs').promises;
const path = require('path');
const { resizeAvatar } = require('../../middlewares');

const avatarDir = path.join(__dirname, '../../../', 'public', 'avatars');

const updateAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempName, originalname } = req.file;
    const filename = `${_id}_${originalname}`;
    const resizedFilename = await resizeAvatar(tempName, filename);
    const resultUpload = path.join(avatarDir, resizedFilename);
    await fs.rename(tempName, resultUpload);
    const avatarUrl = path.join('avatars', resizedFilename);
    await User.findByIdAndUpdate(_id, { avatarUrl });
    res.json({ avatarUrl });
};

module.exports = ctrlWrapper(updateAvatar);
