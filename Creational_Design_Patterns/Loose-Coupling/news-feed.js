"use strict";
exports.__esModule = true;
var NewsFeed = /** @class */ (function () {
    function NewsFeed(_service) {
        this._service = _service;
    }
    NewsFeed.prototype.show = function () {
        this._service.getAll().then(function (posts) {
            posts.forEach(function (post) {
                console.log(post.title + " - " + post.body);
                console.log();
            });
        });
    };
    return NewsFeed;
}());
exports.NewsFeed = NewsFeed;
