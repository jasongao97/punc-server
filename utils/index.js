function formatNumber(n) {
  const number = n.toString();
  return number[1] ? number : `0${number}`;
}

function formatDate(date) {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return [year, month, day].map(formatNumber).join('-');
}

function formatTime(time) {
  const hour = time.getHours();
  const minute = time.getMinutes();
  const second = time.getSeconds();

  return [hour, minute, second].map(formatNumber).join(':');
}

module.exports = {
  formatDate,
  formatTime,
};
