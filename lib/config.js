import {
  configure as configureRequest,
  request
} from 'bower/jquery-ajax-wrap/jquery-ajax-wrap';

var RSVP;

var configure = function(options) {
  RSVP = options.RSVP;

  configureRequest({
    jQuery: options.jQuery,
    Promise: RSVP.Promise
  });
};

export {
  configure,
  request,
  RSVP
};
