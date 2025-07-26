const mongoose = require('mongoose');



const blacklistTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
        unique: true
    },
    careateAt: {
        type: Date,
        default: Date.now,
        expries: '1d'
    }
});

module.exports = mongoose.model('BlacklistToken', blacklistTokenSchema);