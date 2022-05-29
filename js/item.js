const Item = function(name, shop){
    this.name = name;
    this.shop = shop;
};

const TextFormat = {};

TextFormat.capitalise = function (text) {
  if (!text) return text;
  const initialLetter = text[0];
  const restOfWord = text.slice(1);
  return initialLetter.toUpperCase() + restOfWord.toLowerCase();
};

Item.prototype.formatName = function(){
    const capitaliseName = TextFormat.capitalise(this.name);
    this.name = capitaliseName;
};

