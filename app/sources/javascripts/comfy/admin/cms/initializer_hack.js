import jQuery from 'jquery'
import * as bootstrap from 'bootstrap/dist/js/bootstrap.bundle'
import Rails from '@rails/ujs'

window.$ = window.jQuery = jQuery
window.bootstrap = bootstrap
window.Rails = Rails
Rails.start()
