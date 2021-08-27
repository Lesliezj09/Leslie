
 // 当带有script标签时，直接放在html的head部分
 // 当带有script标签时，作为js文件存在，在html通过 <script src="js文件名.js"></script>
 // <script language="JavaScript">


 var caution = false
 function setCookie(name, value, expires, path, domain, secure) {
  var curCookie = name + "=" + escape(value) +
  ((expires) ? "; expires=" + expires.toGMTString() : "") +
  ((path) ? "; path=" + path : "") +
  ((domain) ? "; domain=" + domain : "") +
  ((secure) ? "; secure" : "")
  if (!caution || (name + "=" + escape(value)).length <= 4000)
   document.cookie = curCookie
  else if (confirm("Cookie exceeds 4KB and will be cut!"))
   document.cookie = curCookie
 }
 function getCookie(name) {
  var prefix = name + "="
  var cookieStartIndex = document.cookie.indexOf(prefix)
  if (cookieStartIndex == -1)
   return null
  var cookieEndIndex = document.cookie.indexOf(";", cookieStartIndex + prefix.length)
  if (cookieEndIndex == -1)
   cookieEndIndex = document.cookie.length
  return unescape(document.cookie.substring(cookieStartIndex + prefix.length,
  cookieEndIndex))
 }
 function deleteCookie(name, path, domain) {
  if (getCookie(name)) {
   document.cookie = name + "=" +
   ((path) ? "; path=" + path : "") +
   ((domain) ? "; domain=" + domain : "") +
   "; expires=Thu, 01-Jan-70 00:00:01 GMT"
  }
 }
 function fixDate(date) {
  var base = new Date(0)
  var skew = base.getTime()
  if (skew > 0)
  date.setTime(date.getTime() - skew)
 }
 var now = new Date()
 fixDate(now)
 now.setTime(now.getTime() + 730 * 24 * 60 * 60 * 1000)
 var visits = getCookie("counter")
 if (!visits)
  visits = 1
 else
  visits = parseInt(visits) + 1
 setCookie("counter", visits, now)
 document.write("<font size=2 color=blue>访客数：" + visits + " ")

// </script>
