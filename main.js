const inputFileScan = document.getElementById("one_scan");
const inputFileScan2 = document.getElementById("two_scan");
const imgInputScan1 = document.getElementById("scanFileOne");
const imgInputScan2 = document.getElementById("scanFileTwo");
const imgCheckOne = document.getElementById("checkDownloadOne");
const imgChecktwo = document.getElementById("checkDownloadTwo");

// console.log(checkDownload);


inputFileScan.onchange = ({target}) => {
    console.log(target.files);
    imgInputScan1.style.background = `url(./img/plus.png)`;
    imgCheckOne.style.display = `block`;
};

inputFileScan2.onchange = ({target}) => {
    console.log(target.files);
    imgInputScan2.style.background = `url(./img/plus.png)`;
    imgChecktwo.style.display = `block`;
};