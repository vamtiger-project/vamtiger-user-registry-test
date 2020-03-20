export default `<div slot="overlay" data-confirm-dialog data-confirm-add-new-user> <div data-confirm-header> Add new user </div> <div data-header-underline></div> <div data-confirm-body data-display-grid> <form data-add-new-user-form data-confirm-input-form data-display-grid> <div data-form-group> <label> <span>Name</span> <input name="name"> </label> <span data-error></span> </div> <div data-form-group> <label> <span>Surname</span> <input name="surname"> </label> <span data-error></span> </div> <div data-form-group> <label> <span>Email</span> <input type="email" name="email"> </label> <span data-error></span> </div> <div data-form-group> <label> <span>Position</span> <input name="position"> </label> <span data-error data-default-error-message="Please enter your current position"></span> </div> </form> </div> <div data-confirm-footer> <button data-confirm-button data-confirm-button-ok> <span>Confirm</span> </button> <button data-confirm-button data-confirm-button-cancel> <span>Cancel</span> </button> </div> </div> <div slot="overlay" data-confirm-dialog data-confirm-delete-user> <div data-confirm-header> Confirm delete </div> <div data-header-underline></div> <div data-confirm-body> <span> Please confirm that you would like to delete this user. </span> </div> <div data-confirm-footer> <button data-confirm-button data-confirm-button-ok> <span>Confirm</span> </button> <button data-confirm-button data-confirm-button-cancel> <span>Cancel</span> </button> </div> </div> <button slot="action" data-action-add-user>Add new user</button> <div data-user data-button></div> <div data-vamtiger-user-listing> <div data-test-mode> <span data-title> test mode </span> <div data-separator></div> <div data-layout-markers-controls> <span data-label> layout markers </span> <div data-layout-markers-toggle></div> </div> </div> <div data-header> <div data-header-overlay></div> <figure data-header-image> <slot name="header-image"></slot> </figure> <div data-header-caption> <slot name="header-caption"></slot> </div> </div> <div data-body> <div data-left-side-bar></div> <div data-user-listing> <div data-action> <slot name="action"></slot> </div> <div data-users> <slot name="user"></slot> </div> </div> <div data-right-side-bar></div> </div> <div data-footer> <a data-backend>Laravel</a> <span data-separator></span> <a data-frontend>Web Components</a> </div> <div data-overlay> <slot name="overlay"></slot> </div> </div>`;