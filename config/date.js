const date = require('date-and-time');

const dateActually = () => {
  const now = new Date();
  const pattern = date.compile('MMM D YYYY HH:mm')
  const formatDate = date.format(now, pattern);

  return formatDate;
};

module.exports = dateActually;