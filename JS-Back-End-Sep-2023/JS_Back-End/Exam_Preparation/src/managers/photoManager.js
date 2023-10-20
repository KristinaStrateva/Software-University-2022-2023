const Photo = require('../models/Photo');

exports.getAllPhotos = () => Photo.find().populate('owner');

exports.getPhotoById = (photoId) => Photo.findById(photoId).populate('owner');

exports.create = (photoData) => Photo.create(photoData);

exports.update = (photoId, photoData) => Photo.findByIdAndUpdate(photoId, photoData);

exports.delete = (photoId) => Photo.findByIdAndDelete(photoId);