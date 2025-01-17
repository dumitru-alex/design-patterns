"use strict";
exports.__esModule = true;
var MockPostsService = /** @class */ (function () {
    function MockPostsService() {
        this.posts = [];
        this.posts = [
            { id: 1, title: 'Test Post 1', body: 'Test Body 1', postedBy: 'Me' },
            { id: 2, title: 'Test Post 2', body: 'Test Body 2', postedBy: 'Me' },
            { id: 3, title: 'Test Post 3', body: 'Test Body 3', postedBy: 'Me' },
            { id: 4, title: 'Test Post 4', body: 'Test Body 4', postedBy: 'Me' },
        ];
    }
    MockPostsService.prototype.getAll = function () {
        return Promise.resolve(this.posts);
    };
    MockPostsService.prototype.save = function (post) {
        this.posts.push(post);
        return Promise.resolve();
    };
    MockPostsService.prototype["export"] = function (service) {
        return this.getAll().then(function (posts) { return service["export"](posts); });
    };
    return MockPostsService;
}());
exports.MockPostsService = MockPostsService;
