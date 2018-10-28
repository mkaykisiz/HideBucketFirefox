function setHiddenStatus(){
    var hideReviewers = browser.storage.local.get('hideReviewers');
    hideReviewers.then((result) => {
        document.getElementById('hide_completed_prs_checkbox').checked = result.hideReviewers;    
    });  
}

function saveChanges() {
    // Get a value.
    if ($('#hide_completed_prs_checkbox').is(':checked')) {
        xhideReviewers = true;
    } else {
        xhideReviewers = false;
    }
    // Save it using the browser extension storage API.
    browser.storage.local.set({
        hideReviewers: xhideReviewers
    });


    setHiddenStatus();
    browser.tabs.query({active: true, currentWindow: true}, function(tabs) {
        browser.tabs.reload(tabs[0].id);
    });
}

var hide_completed_prs_checkbox = document.getElementById('hide_completed_prs_checkbox');
// onClick's logic below:
if(hide_completed_prs_checkbox){
    setHiddenStatus()
    hide_completed_prs_checkbox.addEventListener('change', function() {
        saveChanges();
    });
}