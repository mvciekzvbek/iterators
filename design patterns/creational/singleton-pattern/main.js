var th = require('./taskHandler');

// first instance of repo
// var repo = require('./repo');
// var myrepo = repo();

var myrepo = require('./repo');

myrepo.save('fromMain');
myrepo.save('fromMain');
myrepo.save('fromMain');

th.save();
th.save();
th.save();
th.save();