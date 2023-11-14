function shortcut(s1, s2) {
  // your code here
	if(str1 == "" || str2 == ""){
	    return '';
    }
    let f = str1.charAt(0);
    let s = str2.charAt(0);
    return f.concat(s);
}
// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
