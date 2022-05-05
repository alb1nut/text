fetch('https://api.openweathermap.org/data/2.5/weather?q=Accra&appid=8e558e919fe8ca38089961a28828856d')
 .then(res => res.json())
 .then(data =>console.log(data))