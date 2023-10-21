const Photo = require('../models/Photo');

exports.getAllPhotos = () => Photo.find().populate('owner');

exports.getPhotoById = (photoId) => Photo.findById(photoId).populate('owner').populate('comments.user');

exports.create = (photoData) => Photo.create(photoData);

exports.update = (photoId, photoData) => Photo.findByIdAndUpdate(photoId, photoData);

exports.delete = (photoId) => Photo.findByIdAndDelete(photoId);

exports.getAllComments = (photoId) => Photo.findById(photoId).select('comments').populate('comments.user');

exports.addComment = async (photoId, commentData) => {
    const photo = await Photo.findById(photoId);

    photo.comments.push(commentData);

    return photo.save();
}