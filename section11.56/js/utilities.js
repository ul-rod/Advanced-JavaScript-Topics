// Pass in a name "Last, First", and use
// regex to reverse order, "First Last"
// and remove the comma:
const formatName = function(name) {
  return name.replace(/(\w+), (\w+)/, '$2 $1');
};

// Convert "Name" to uppercase "NAME":
const upperCaseName = function(name) {
  return name.toUpperCase();
};

// Convert to uppercase and add punctuation:
const yellName = function(name) {
  const punct = '!';
  return upperCaseName(name) + punct;
};

export { formatName, yellName };
