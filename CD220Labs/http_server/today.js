module.exports.getDate = function getDate() {
    console.log(Intl.DateTimeFormat().resolvedOptions().timeZone)
    let aestTime = new Date().toLocaleString("en-US");
    return new Date(aestTime);
}
