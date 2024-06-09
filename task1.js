const cekPalindrom = 'malam'

let hasil = '';
for(let i = cekPalindrom.length; i > 0; i--){
    hasil = hasil + cekPalindrom[i-1]
 
}if(cekPalindrom.length > 0){
if (hasil === cekPalindrom) {
    console.log('palindrom')
}else{
    console.log('bukan palindrom')
}
}