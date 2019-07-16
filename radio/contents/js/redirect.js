class countdownTimer {
  constructor(elementId, seconds, redirectUrl) {
    this._newUrl = redirectUrl;
    this._intvl = null;
    this._selector = elementId;
    this._seconds = seconds;

    document.getElementById("link").href = this._newUrl;
    this.start();
  }
  start() {
    var _this = this;
    _this.updateSecs();
    this._intvl = setInterval(function() {
      _this.updateSecs();
    }, 1000);
  }
  updateSecs() {
    document.getElementById(this._selector).innerHTML = this._seconds;
    this._seconds--;
    if (this._seconds == -1) {
      clearInterval(this._intvl);
      this.redirect();
    }
  }
  redirect() {
    document.location.href = this._newUrl;
  }
}

//And now invoke
var co = new countdownTimer("seconds-holder", 5, 'radio/');