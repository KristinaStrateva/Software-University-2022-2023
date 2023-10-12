exports.ownerCheck = function (cube, req, res) {
    if (cube.owner?.toString() !== req.user?._id) {
        return res.redirect('/404');
    }
}