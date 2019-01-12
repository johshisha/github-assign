module.exports = function(input) {
  input = input || {};
  var users = input.users;

  if (!users) {
    throw Error('Missing users');
  }

  users = users.map(function(user) {
    return '@' + user;
  });

  return (
    'assigned: ' +
    users.join(', ') +
    '\n\n> by [pull-review-johshisha](https://github.com/johshisha/pull-review)'
  );
};
