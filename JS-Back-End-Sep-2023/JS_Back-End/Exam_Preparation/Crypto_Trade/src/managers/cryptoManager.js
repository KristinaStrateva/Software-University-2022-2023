const Crypto = require('../models/Crypto');

exports.getAllCrypto = () => Crypto.find().populate('owner');

exports.getCryptoById = (cryptoId) => Crypto.findById(cryptoId).populate('owner').populate('buyCrypto.user');

exports.create = (cryptoData) => Crypto.create(cryptoData);

exports.update = (photoId, photoData) => Photo.findByIdAndUpdate(photoId, photoData);

exports.delete = (photoId) => Photo.findByIdAndDelete(photoId);

exports.getAllComments = (photoId) => Photo.findById(photoId).select('comments').populate('comments.user');

exports.addComment = async (photoId, commentData) => {
    const photo = await Photo.findById(photoId);

    photo.comments.push(commentData);

    return photo.save();
}