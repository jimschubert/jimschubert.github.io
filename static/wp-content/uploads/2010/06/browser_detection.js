/**
 * Modifed from the source at http://www.javascripter.net/faq/browsern.htm
 */

function BrowserDetector()
{
  this.init();
}

BrowserDetector.prototype =
{
  nVer: navigator.appVersion,
  nAgt: navigator.userAgent,
  browserName: navigator.appName,
  fullVersion: '' + parseFloat(navigator.appVersion),
  majorVersion: parseInt(navigator.appVersion, 10),
  nameOffset: null,
  verOffset: null,
  ix: null,
  init: function ()
  { /* In MSIE, the true version is after "MSIE" in userAgent */
    if ((this.verOffset = this.nAgt.indexOf("MSIE")) != -1)
    {
      this.browserName = "Microsoft Internet Explorer";
      this.fullVersion = this.nAgt.substring(this.verOffset + 5);
    } /* In Opera, the true version is after "Opera" */
    else if ((this.verOffset = this.nAgt.indexOf("Opera")) != -1)
    {
      this.browserName = "Opera";
      this.fullVersion = this.nAgt.substring(this.verOffset + 6);
    } /* In Chrome, the true version is after "Chrome" */
    else if ((this.verOffset = this.nAgt.indexOf("Chrome")) != -1)
    {
      this.browserName = "Chrome";
      this.fullVersion = this.nAgt.substring(this.verOffset + 7);
    } /* In Safari, the true version is after "Safari" */
    else if ((this.verOffset = this.nAgt.indexOf("Safari")) != -1)
    {
      this.browserName = "Safari";
      this.fullVersion = this.nAgt.substring(this.verOffset + 7);
    } /* In Firefox, the true version is after "Firefox" */
    else if ((this.verOffset = this.nAgt.indexOf("Firefox")) != -1)
    {
      this.browserName = "Firefox";
      this.fullVersion = this.nAgt.substring(this.verOffset + 8);
    } /* In most other browsers, "name/version" is at the end of userAgent */
    else if ((this.nameOffset = this.nAgt.lastIndexOf(' ') + 1) < (this.verOffset = this.nAgt.lastIndexOf('/')))
    {
      this.browserName = this.nAgt.substring(this.nameOffset, this.verOffset);
      this.fullVersion = this.nAgt.substring(this.verOffset + 1);
      if (this.browserName.toLowerCase() == this.browserName.toUpperCase())
      {
        this.browserName = navigator.appName;
      }
    } /* trim the fullVersion string at semicolon/space if present */
    if ((this.ix = this.fullVersion.indexOf(";")) != -1)
    {
      this.fullVersion = this.fullVersion.substring(0, this.ix);
    }
    if ((this.ix = this.fullVersion.indexOf(" ")) != -1)
    {
      this.fullVersion = this.fullVersion.substring(0, this.ix);
    }

    this.majorVersion = parseInt('' + this.fullVersion, 10);
    if (isNaN(this.majorVersion))
    {
      this.fullVersion = '' + parseFloat(navigator.appVersion);
      this.majorVersion = parseInt(navigator.appVersion, 10);
    }
  }
}
