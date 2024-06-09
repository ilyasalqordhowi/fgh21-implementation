const reverseWord = 'Saya Belajar Javascript';

// Array untuk menyimpan kata-kata
const words = new Array(reverseWord.length);
let wordCount = 0;
let word = '';

// Pisahkan kata berdasarkan spasi
for (let i = 0; i < reverseWord.length; i++) {
    if (reverseWord[i] === ' ') {
        if (word !== '') {
            words[wordCount] = word;
            wordCount++;
            word = '';
        }
    } else {
        word += reverseWord[i];
    }
}

// Tambahkan kata terakhir 
if (word !== '') {
    words[wordCount] = word;
    wordCount++;
}

// Membalik urutan kata
let membalikanUrutan = '';
for (let i = wordCount - 1; i >= 0; i--) {
   membalikanUrutan += words[i];
    if (i > 0) {
       membalikanUrutan += ' ';
    }
}

// Tampilkan hasil
console.log(membalikanUrutan); // Output: "Javascript Belajar Saya"
