var BCLS_site = (function(window, document) {
  var all_sidenav_links = document.querySelectorAll(".sidenav a"),
    href = window.location.pathname,
    i,
    iMax,
    currentLink,
    parentNodeName,
    p1,
    p1class,
    p2,
    p3,
    pSib,
    pChild;

  iMax = all_sidenav_links.length;
  for (i = 0; i < iMax; i++) {
    currentLink = all_sidenav_links[i];
    if (currentLink.getAttribute("href") === href) {
      // currentLink.setAttribute("class", "bcls-active");
      currentLink.parentElement.setAttribute("class", "bcls-active");
      if (currentLink.getAttribute("href") !== "/") {
        p1 = currentLink.parentElement;
        p2 = p1.parentElement;
        p3 = p2.parentElement;
        parentNodeName = p1.nodeName;
        pSib = p1.firstChild;
        p1class = p1.nextElementSibling;
        if (parentNodeName === 'H5') {
          pNextSib = p1.nextElementSibling;
          pNextSib.removeAttribute('style');
        } else if (parentNodeName === 'LI' && p2.nodeName === 'LI') {
          pChild.removeAttribute('style');
        } else if (parentNodeName === 'LI') {
          p2.removeAttribute('style');
        }
      }
    }
  }
})(window, document);
