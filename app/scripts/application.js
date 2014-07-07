/* global Ember: false */

'use strict';

window.Dalton = Ember.Application.create();

// TODO: Decide where the upper right buttons should send the user
// TODO: Enable a web form type thingy for supporters to add
//        their contact information
// TODO: Enable ActBlue
// TODO: Get hosting

// ******* Router *******

Dalton.Router.map(function () {
  this.resource('application', {path: '/'}, function () {
    this.route('about');
    this.route('issues');
    this.route('bio');
    this.route('community');
    this.route('endorsements');
    this.route('contact');
  });
  this.resource('events', {path: '/'});
});

Dalton.EventsRoute = Ember.Route.extend({
  renderTemplate: function() {
    console.log('in events rendering');
    this.render({ outlet: 'events' });
  }
});
