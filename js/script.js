// Model
var model = {
  currentModal: null,
  modalFill: [
    {
      title:  'Impressum',
      body:   '<h5>Angaben gemäß § 5 TMG:</h5>' +
              '<br><p>Franziskus Nakajima<br>' +
              'Web Developer, Bildender Künstler<br>' +
              'Kögelstraße 3<br>' +
              '13403 Berlin' +
              '</p><br>' +
              '<h5>Kontakt:</h5>' +
              '<p>E-Mail: ' +
              'info@franziskusnakajima.net' +
              '<br>' +
              '<h5>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV:' +
              '</h5><br>' +
              '<p>Franziskus Nakajima</p>' +
              '<br><br>' +
              '<p>Quelle: <em>' +
              '<a href="https://www.e-recht24.de/impressum-generator.html">' +
              'https://www.e-recht24.de</a></em></p>'
    }
  ]
};

// Controller
var controller = {
  init: function(){
    model.currentModal = model.modalFill[0];
    this.currentModal = model.currentModal;
    view.init();
  },
  openImprint: function(){
    view.toggleModal();
  }
};

// View
var view = {
  init: function(){
    this.modal = $('#modal');
    this.render();
  },
  toggleModal: function(){
    $('#modal').toggle();
  },
  closeModalByEsc: function(){
    if (view.modal.css('display') == 'block'){
      view.toggleModal();
    }
  },
  renderModal: function(){
    $('#modal-title-h3').text(controller.currentModal.title);
    $('#modal-body').html(controller.currentModal.body);
  },
  render: function(){
    $('#impr').on('click', function(){
      view.renderModal();
      controller.openImprint();
    });
    $('.close').on('click', function(){
      view.toggleModal();
    });
    $(document).on('keydown', function(e){
      if (e.keyCode == 27){
        view.closeModalByEsc();
      }
    });
  }
};
controller.init()
