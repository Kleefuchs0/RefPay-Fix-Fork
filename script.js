
let url = location.href;
console.log(url);

let targetUrl = url.replace("RefPay-Fix-Fork", "RefPay");

location.href = targetUrl;
