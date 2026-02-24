const BaseError = require('../error/base.error')

module.exports = (err, req, res, next) => {
    if (err instanceof BaseError) {
        return res.status(err.status).json({ success: false, message: err.message, errors: err.errors });
    }
    console.log(err)
    return res.status(500).json({ success: false, message: "Internal Server Error" })
}