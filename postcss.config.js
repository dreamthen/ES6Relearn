const autoprefixer = require("autoprefixer");
const AUTO_PREFIXER_BROWSERS = [
    "Android >= 4",
    "IOS >= 7",
    "Chrome >= 35",
    "Firefox >= 31",
    "Explorer >= 9",
    "Opera >= 12",
    "Safari >= 7.1"
];

module.exports = {
    plugins: [
        autoprefixer({browsers: AUTO_PREFIXER_BROWSERS})
    ]
};