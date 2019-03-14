// Bring in the room class
const Namespace = require('../classes/Namespace');
const Room = require('../classes/Room');

// Set up the namespaces
let namespaces = [];
let wikiNs = new Namespace(0, 'Wiki', 'https://upload.wikimedia.org/wikipedia/en/thumb/8/80/Wikipedia-logo-v2.svg/103px-Wikipedia-logo-v2.svg.png', '/wiki');
let mozNs = new Namespace(1, 'Mozilla', 'https://www.mozilla.org/media/img/logos/firefox/logo-quantum.9c5e96634f92.png', '/mozilla');
let linuxNs = new Namespace(2, 'Linux', 'https://upload.wikimedia.org/wikipedia/commons/a/af/Tux.png', '/linux');

namespaces.push(wikiNs, mozNs, linuxNs);

// Make the main room and add it to rooms. it will ALWAYS be 0
wikiNs.addRoom(new Room(0, 'New Articles', 'Wiki'));
wikiNs.addRoom(new Room(1, 'New Technology', 'Wiki'));
wikiNs.addRoom(new Room(2, 'Jobs', 'Wiki'));

mozNs.addRoom(new Room(0, 'Vue', 'Mozilla'));
mozNs.addRoom(new Room(1, 'Angular', 'Mozilla'));
mozNs.addRoom(new Room(2, 'React', 'Mozilla'));


linuxNs.addRoom(new Room(0, 'Nodejs', 'Linux'));
linuxNs.addRoom(new Room(1, 'Testing', 'Linux'));
linuxNs.addRoom(new Room(2, 'Deployment', 'Linux'));


module.exports = namespaces;