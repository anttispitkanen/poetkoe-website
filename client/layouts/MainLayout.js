Template.body.events({
  'click #menu-icon': function() {
    document.getElementById('main-navigation').classList.toggle("main-navigation-showing");
  },

  'click #main-navigation': function() {
    this.classList.toggle("main-navigation-showing");
  },

  'click #instavideo': function() {
    this.play();
  }

});
