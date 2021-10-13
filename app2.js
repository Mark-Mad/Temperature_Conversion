while (true) {
  let entry = prompt(
    `Welcome to Temperature Conversion App \n 1. For Celcius to Fahrenheit Conversion \n 2. For Fahrenheit to Celcius Conversion)\n q. quit`
  );
  if (entry == 1) {
    // console.log(check() * 1.8 + 32);
    let convert = check();
    console.log(`${convert} °C = ${convert * 1.8 + 32}°F`)
    // let result = `${convert} °C = ${convert * 1.8 + 32}°F`
    // document.getElementById("result").innerHTML = `${convert} °C = ${convert * 1.8 + 32}°F`
    // document.getElementById('code').value = `${result}`
    break;
  } else if (entry == 2) {
    // console.log((check() - 32) / 1.8);
    let convert = check();
    console.log(`${convert} °F = ${(convert - 32)/ 1.8}°C`)
    break;
  } else if (entry.toLowerCase() == "q") {
    break;
  }
}

function check() {
  let conversion;
  while (true) {
    conversion = prompt("Enter Value : ");
    if (conversion ?? !isNaN(conversion) ) break;
  }
  return conversion;
}

