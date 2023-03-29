module.exports.getDate = function getDate() {
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
    var offset = new Date().getTimezoneOffset();
    console.log(offset/60);
    let aestTime = new Date().toLocaleString("en-US");
    return new Date(aestTime);
}
