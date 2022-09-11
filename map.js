1. "Problem:
You are given a string (STR) of length N, consisting of only the lower case English alphabet.
Your task is to remove all the duplicate occurrences of characters in the string.

Input:
abcadeecfb

Output:
abcdef"

 

ans: 

    s='abcadeecfb';
    let n=s.length;
    let set=new Set();
    for(let i=0;i < n;i++){
    set.add(s.charAt(i));
    }
    console.log(set);

 
 
 
 
2. "Problem:
You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

Input:
abcadeecfb

Output:
a=2
b=2
c=2
d=1
e=2
f=1


ans:  
let str = ["a","b","c","a","d","e","e","c","f","b"];
let count = {};
for (let i of str) {
  if (count[i]) {
    count[i] += 1;
  } else {
    count[i] = 1;
  }
}
console.log(count);
