"use  strict";

// Modal-start //

$(document).ready(function() {
  var materialButton = $('.new-order__material-button');
  var packagingButton = $('.new-order__packaging-button');
  var materialModal = $('.modal--material');
  var packagingModal = $('.modal--packaging');
  var ordersModal = $('.modal--orders');
  var modalOverlay = $('.modal__overlay');
  var modalMaterialButton= $('.modal__button--material');
  var modalPackagingButton= $('.modal__button--packaging');

  var ordersButtonTemporary = $('.orders__button--temporary');

  materialButton.click(function(evt) {
    materialModal.addClass('modal--active');
    modalOverlay.addClass('modal__overlay--active');
  });

  packagingButton.click(function(evt) {
    packagingModal.addClass('modal--active');
    modalOverlay.addClass('modal__overlay--active');
  });

  ordersButtonTemporary.click(function() {
    ordersModal.addClass('modal--active');
    modalOverlay.addClass('modal__overlay--active');
  });

  modalOverlay.click(function(evt) {
    $('.modal').removeClass('modal--active');
    modalOverlay.removeClass('modal__overlay--active');
  });

  // Modal-end //

  // Tags-start //
  function addTags(parentModifier, checkboxClass, nodeBefore) {

    //тут нужно сделать удаление всех уже выбранных блоков(чтобы предотвратить дублирование если чел ещё раз выберет)
    $('.new-order__input-item--' + parentModifier).find('.new-order__tag').remove();  // Есть проблема

    $('.' + checkboxClass + ':checked').each(function() {
      var text = $( this ).siblings('label').text();

      var block =
        '<div class="new-order__tag">' +
        '  <p class="new-order__tag-text">' + text + '</p>' +
        '  <button class="new-order__tag-close" type="button"></button>' +
        '</div>';


      nodeBefore.before(block);
    });

    $('.new-order__tag-close').on('click', function() {
      $(this).parent().remove();
    });

    closeAllModals();
  }

  modalMaterialButton.click(function () {
    addTags('material', 'modal__checkbox--material', materialButton);
  });

  modalPackagingButton.click(function () {
    addTags('packaging', 'modal__checkbox--packging', packagingButton);
  });

});

function closeAllModals() {
  $('.modal').removeClass('modal--active');
  $('.modal__overlay').removeClass('modal__overlay--active');
}
