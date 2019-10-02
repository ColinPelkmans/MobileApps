const frameModule = require("ui/frame");

let navigate = function (page) {
    console.log(`Going to ${page}`);
    frameModule.topmost().navigate(`pages/${page}/${page}`);
};

exports.onAboutTap = () => navigate('about');
exports.onContactTap = () => navigate('contact-us');
exports.onRepos = () => navigate('repos');
exports.onProfile = () => navigate('my-profile');

// exports.onAboutTap = function () {
//     console.log("Going to about");
//     frameModule.topmost().navigate("pages/about/about");
// };

// exports.onContactTap = function () {
//     console.log("Going to the contact-us page");
//     frameModule.topmost().navigate("pages/contact-us/contact-us")
// };
