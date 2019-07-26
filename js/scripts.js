// An array I built but didn't have time to map it properly.  To be continued after class ends...

// const games = [
//     {name: "Super Mario World", system: "superNintendo"},
//     {name: "Super Metroid", system: "superNintendo"},
//     {name: "Super Mario RPG", system: "superNintendo"},
//     {name: "Castlevania: Circle of the Moon", system: "gameBoy"},
//     {name: "Fire Emblem", system: "gameBoy"},
//     {name: "Golden Sun", system: "gameBoy"},
//     {name: "Halo: Combat Evolved", system: "xbox"},
//     {name: "Fable", system: "xbox"},
//     {name: "Clash of Clans", system: "mobile"},
//     {name: "Betrayal At House On The Haunted Hill", system: "boardGames"}];

    //hightlights the class card-title so it is easier to read the title of the game
    $(document).ready(function(){
        $(".card-title").mouseover(function(){
          $(".card-title").css("background-color", "lightblue");
        });
        $(".card-title").mouseleave(function(){
          $(".card-title").css("background-color", "red");
        });
      });