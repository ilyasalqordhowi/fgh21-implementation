function divideAndSort(num) {
  
    let numStr = String(num);
    let arr = [];
    let menyimpanString = "";
  
    for (let i = 0; i < numStr.length; i++) {
        if (numStr[i] === '0') {
            if (menyimpanString.length > 0) {
               arr[arr.length] = menyimpanString;
                menyimpanString = "";
            }
        } else {
            menyimpanString += numStr[i];
        }
    }

    if (menyimpanString.length > 0) {
       arr[arr.length] = menyimpanString;
    }


    let pengabunganNumberStr = "";
    for (let i = 0; i < arr.length; i++) {
        let segmentArray = arr[i].split('');
        for (let j = 0; j < segmentArray.length - 1; j++) {
            for (let k = 0; k < segmentArray.length - j - 1; k++) {
                if (segmentArray[k] > segmentArray[k + 1]) {
                    let temp = segmentArray[k];
                    segmentArray[k] = segmentArray[k + 1];
                    segmentArray[k + 1] = temp;
                }
            }
        }
        for (let j = 0; j < segmentArray.length; j++) {
           pengabunganNumberStr += segmentArray[j];
        }
    }

    
    let hasilNumber = parseInt(pengabunganNumberStr, 10);

    return hasilNumber;
}


let result = divideAndSort(5956560159466056);
console.log(result);