/* Use my callback every X seconds, 1 by default */

function Notificator(callback, time = 1) {
  setInterval(() => callback && callback(), time * 1000);
}

export default Notificator;
