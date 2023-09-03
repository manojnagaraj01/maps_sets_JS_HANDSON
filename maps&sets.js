var question1 = document.getElementById('question1')
var question2 = document.getElementById('question2')


question1.addEventListener('click', function(){
    let arr = "abcadeecfb"
    let a = new Set(arr)
    let ans1 = [...a].join("")
    //or   // ans = ans.map((e)=>console.log(e))
    console.log(ans1)
    let img1 = document.getElementById('img1')
    img1.setAttribute("src", "./ans1.png")
})

question2.addEventListener('click', function(){
    let s = "abcadeecfb"
    let freq = new Array(26)
    freq.fill(0)
    for (let i = 0; i < s.length; i++){
        // console.log(s[i].charCodeAt())
        // console.log('a'.charCodeAt())
        freq[s[i].charCodeAt() - 'a'.charCodeAt()]++
    }
    let ans2=""
    for(let i = 0; i<26; i++){
        // console.log("i " +i + " freq "+ freq)
        if (freq[i]<1)continue; //to count all characters take i<1
        ans2 = ans2 + String.fromCharCode(i  + 'a'.charCodeAt())
        ans2 = ans2+ "=" + freq[i] +("\n")
        // console.log(String.fromCharCode(i + 'a'.charCodeAt()));
    } 
    console.log(ans2)
    let img2 = document.getElementById('img2')
    img2.setAttribute("src", "./ans2.png")
})
