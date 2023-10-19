const { extractErrorMessages } = require('../utils/errorHelpers');

exports.globalErrorHandler = (err, req, res) => {
    res.render('404', {error: extractErrorMessages(err)});
};