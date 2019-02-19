let completed_control = false;
let not_completed_control = false;
browser.storage.local.get('completed', function (result) {
    if (result.completed) {
        completed_control = true;
    }
});
browser.storage.local.get('not_completed', function (result) {
    if (result.not_completed) {
        not_completed_control = true;
    }
});


fireReview = () => {
    var reviewers = document.querySelectorAll('td.reviewers');
    Array.prototype.forEach.call(reviewers, function (review) {
        if ((completed_control && review.getElementsByClassName('badge-hidden').length == 0) || (not_completed_control && review.getElementsByClassName('badge-hidden').length > 0)) {
            review.closest('tr').remove();
        }
    });
};

setInterval(function () {
    fireReview()
}, 500);


