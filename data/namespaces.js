// Bring in the room class
const Namespace =  require('../classes/Namespace');
const Room =  require('../classes/Room');



// Set up the namespaces
let namespaces = [];

let chitChat = new Namespace(0,'ChitChat', 'https://uniim1.shutterfly.com/ng/services/mediarender/THISLIFE/023033625151/media/84466341382/large/1552602472/enhance' ,'/chit');
let wikiNs = new Namespace(1,'Wiki', 'http://www.aikcu.org/wp-content/uploads/2012/03/ATT-Logo.jpg' ,'/wiki');
let mozNs = new Namespace(2,'Mozilla','https://www.ajc.com/rf/image_inline/Pub/p9/AJC/2018/04/20/Images/gt-new-color-2.jpg','/mozilla');
let linuxNs = new Namespace(3,'Personal','http://pngimg.com/uploads/gmail_logo/gmail_logo_PNG9.png','/linux');
let fcc = new Namespace(4,'fcc', 'https://i0.wp.com/www.keepcalmcoding.com/wp-content/uploads/2018/04/Free-code-camp-banner.jpg?w=960' ,'/fcc');

namespaces.push(chitChat, wikiNs,mozNs,linuxNs,fcc);

// Make the main room and add it to rooms. it will ALWAYS be 0
wikiNs.addRoom(new Room(0,'Att Employee Chatspace','Wiki'));
wikiNs.addRoom(new Room(1,'Supervisor Chat','Wiki'));
wikiNs.addRoom(new Room(2,'Workgroup Chat','Wiki'));


mozNs.addRoom(new Room(0,'Class Activities','Mozilla'));
mozNs.addRoom(new Room(1,'Class Announcements',''));
mozNs.addRoom(new Room(2,'Project 2','Mozilla'));
mozNs.addRoom(new Room(3,'Project 3','Mozilla'));
mozNs.addRoom(new Room(4,'Homework Questions'));
mozNs.addRoom(new Room(5,'Pre-work Questions'));
mozNs.addRoom(new Room(6,'Class Slides'));
mozNs.addRoom(new Room(7,'Virtual Group'));

linuxNs.addRoom(new Room(0,'Personal','Linux'));
linuxNs.addRoom(new Room(1,'Test Server','Linux'));
linuxNs.addRoom(new Room(2,'Mail Server','Linux'));
linuxNs.addRoom(new Room(3,'Kernal Development','Linux'));

module.exports = namespaces;

