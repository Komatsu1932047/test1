var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
    var popoverList = popoverTriggerList.map(function (popoverTriggerElem) {
      return new bootstrap.Popover(popoverTriggerElem);
    });