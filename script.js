// complete the given function

function palindrome(str){
	str = str.toLowerCase().replace(/[^a-z0-9]/g,'');
	let n = str.length;
	let l = 0;
	let r = n-1
	while (l<r) {
		if(str.charAt(l)!=str.charAt(r)){
			return false;
		}
		l++;
		r--;
	}
	return true;
}
module.exports = palindrome
