import { apiInitializer } from 'discourse/lib/api';

export default apiInitializer('0.11.1', (api) => {
  console.log('hello world from api initializer!'); 
  const { iconNode } = require("discourse-common/lib/icon-library");
  
  api.onPageChange(() => {
    // document.getElementById('note-button1').onclick = function() {
    //   var x = document.getElementById("bottomUserNote");
    //   if (x.style.display == "none") {
    //     x.style.display = "block";
    //   } else {
    //     x.style.display = "none";
    //   }
    // }
    document.getElementById('menuUserNoteControl').onclick = function() {
      var x = document.getElementById("usernoteWrapperHeader");
      if (x.style.display == "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    document.getElementById('bottomUserNoteControl').onclick = function() {
      var x = document.getElementById("bottomUserNote");
      if (x.style.display == "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
  });
  
    api.decorateWidget('header-icons:before', helper => {
      // note-dropdown 
      return helper.h('li.header-dropdown-toggle.note-dropdown', [
        helper.h('a.icon.btn-flat', {
          title: 'take notes',
          id: 'menuUserNoteControl'
        }, iconNode('sticky-note')),
      ]);
    });

    // I guess we don't use this now but I'll keep them in comments
    // api.decorateWidget('timeline-controls:after', helper => {
    //   // note-button 
    //   return helper.h('button.widget-button.btn.btn-default.no-text.btn-icon.note-button', {
    //       title: 'take notes',
    //       id: 'note-button1'
    //     }, iconNode('sticky-note'),
    //   );
    // });
    
    // api.decorateWidget('timeline-footer-controls:after', helper => {
    //   // note-button 
    //   return helper.h('button.widget-button.btn.btn-default.no-text.btn-icon.note-button', {
    //       title: 'take notes',
    //       id: 'note-button2'
    //     }, iconNode('sticky-note'),
    //   );
    // });
});