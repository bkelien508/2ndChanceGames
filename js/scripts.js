// An array I built but didn't have time to map it properly.  To be continued after class ends...

const games = [
    {name: "Super Mario World", system: "superNintendo"},
    {name: "Super Metroid", system: "superNintendo"},
    {name: "Super Mario RPG", system: "superNintendo"},
    {name: "Castlevania: Circle of the Moon", system: "gameBoy"},
    {name: "Fire Emblem", system: "gameBoy"},
    {name: "Golden Sun", system: "gameBoy"},
    {name: "Halo: Combat Evolved", system: "xbox"},
    {name: "Fable", system: "xbox"},
    {name: "Clash of Clans", system: "mobile"},
    {name: "Betrayal At House On The Haunted Hill", system: "boardGames"}];


// Filters the systems but doesn't filter the cards correctly
(function () {
  var optionsCache = [];

  function optionsArray(select) {
    var reduce = Array.prototype.reduce;
    return reduce.call(select.options, function addToCache(options, option) {
      options.push(option);
      return options;
    }, []);
  }
  function filterOptions(filterValue, optionsCache) {
    return optionsCache.reduce(function filterCache(options, option) {
      var optionText = option.textContent;
      if (option.text.toLowerCase().match(filterValue.toLowerCase())) {
        options.push(option);
      }
      return options;
    }, []);
  }
  function replaceOptions(select, options) {
    while (select.options.length > 0) {
      select.remove(0);
    }
    options.forEach(function addOption(option) {
      select.add(option);
    });
  }
  function filterOptionsHandler(evt) {
    var filterField = evt.target;
    var targetSelect = document.getElementById("system");
    if (optionsCache.length < 1) {
      optionsCache = optionsArray(targetSelect);
    }
    var options = filterOptions(filterField.value, optionsCache);
    replaceOptions(targetSelect, options);
  }
  // attach filter event to trigger on keyup
  var filter = document.getElementById("filter");
  filter.addEventListener("keyup", filterOptionsHandler, false);
}());

// hightlights the class card-title so it is easier to read the title of the game
$(document).ready(function () {
  $(".card-title").mouseover(function () {
    $(".card-title").css("background-color", "lightblue");
  });
  $(".card-title").mouseleave(function () {
    $(".card-title").css("background-color", "red");
  });
});