function ipToDecimal(address) {
  let binary = '';
  const octets = address.split('.');
  octets.forEach(octet => {
    const binOctet = Number(octet).toString(2);
    binary += binOctet.padStart(8, '0'); 
  });
  return parseInt(binary, 2);
}

function ipsBetween(start, end){
  return ipToDecimal(end) - ipToDecimal(start);
}

console.log(ipsBetween("10.0.0.0", "10.0.0.50"), 50);
console.log(ipsBetween("20.0.0.10", "20.0.1.0"), 246);