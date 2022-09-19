var traverseDomAndCollectElements = function(matchFunc, startEl) {
  var resultSet = [];

  if (typeof startEl === "undefined") {
    startEl = document.body;
  }

  // recorre el árbol del DOM y recolecta elementos que matchien en resultSet
  // usa matchFunc para identificar elementos que matchien

  // console.log(startEl.children);
  // TU CÓDIGO AQUÍ
  if (matchFunc(startEl)){
    resultSet.push(startEl);
  } else {
    for (let i = 0; i < startEl.children.length; i++){
      let recorrido = traverseDomAndCollectElements(matchFunc, startEl.children[i]);
      resultSet.push(...recorrido);
    } 
  }
  
  return resultSet;
};

// Detecta y devuelve el tipo de selector
// devuelve uno de estos tipos: id, class, tag.class, tag


var selectorTypeMatcher = function(selector) {
  // tu código aquí
  // #
  // .
  // tag
  // tag.
  // console.log('selector: ', selector);

  if (selector[0] === '#') {
    return 'id';
  } else if (selector[0] === '.') {
    return 'class';
  } else if (selector.includes('.') && typeof selector.split('.')[0] == 'string') {
    return 'tag.class';
  } else if (!selector.includes('.') || !selector.includes('#')) {
    return 'tag';
  } else if (selector.includes('>')) {
    return 'child combinator';
  } else if (selector.split(' ')[0] == typeof 'string' && selector.split(' ')[1] == typeof 'string' && !selector.includes('>')) {
    return 'descendant combinator';
  } 

};

// NOTA SOBRE LA FUNCIÓN MATCH
// recuerda, la función matchFunction devuelta toma un elemento como un
// parametro y devuelve true/false dependiendo si el elemento
// matchea el selector.

var matchFunctionMaker = function(selector) {
  var selectorType = selectorTypeMatcher(selector);

  // console.log('selectorType', selectorType);

  var matchFunction;
  if (selectorType === "id") { 
    matchFunction = (tipoDeSelector) => {
      if (selector == '#' + tipoDeSelector.id){
        return true;
      }
      return false;
    }
  } else if (selectorType === "class") {
    matchFunction = (tipoDeSelector) => {
      for (let i = 0; i< tipoDeSelector.classList.length; i++){
        if (selector == '.' + tipoDeSelector.classList[i]){
          return true;
        }
      }
      return false;
    }
  } else if (selectorType === "tag.class") {
    matchFunction = (tipoDeSelector) => {
      for (let i = 0; i < tipoDeSelector.classList.length; i++){
        if (selector === tipoDeSelector.localName+"."+tipoDeSelector.classList[i]){
          return true;
        }
      }
      return false;
    }
  } else if (selectorType === "tag") {
    matchFunction = (tipoDeSelector) => {
      if (selector == tipoDeSelector.tagName.toLowerCase()){
        return true;
      }
      return false;
    }
  } else if (selectorType === "child combinator") {

    matchFunction = (tipoDeSelector) => {
      console.log('child', tipoDeSelector)

      if (selector == tipoDeSelector.tagName.toLowerCase()){
        return true;
      }
      return false;
    }

  } else if (selectorType === "descendant combinator") {
    console.log('descendant', tipoDeSelector)

    matchFunction = (tipoDeSelector) => {
      if (selector == tipoDeSelector.tagName.toLowerCase()){
        return true;
      }
      return false;
    }

  }
  return matchFunction;
};

var $ = function(selector) {
  var elements;
  var selectorMatchFunc = matchFunctionMaker(selector);
  elements = traverseDomAndCollectElements(selectorMatchFunc);
  return elements;
};
