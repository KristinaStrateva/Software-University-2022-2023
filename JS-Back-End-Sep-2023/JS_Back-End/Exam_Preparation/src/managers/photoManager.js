const Photo = require('../models/Photo');

exports.getAllPhotos = () => Photo.find().populate('owner');

exports.getPhotoById = (photoId) => Photo.findById(photoId).populate('owner');

exports.create = (photoData) => Photo.create(photoData);