export default
function addWeatherItem(temp, location){
 
    //create <div> with class name 'weather-item'
    let newWeatherItem = document.createElement('div');
    newWeatherItem.className = 'weather-item';
    document.querySelector('.weather-item-container').append(newWeatherItem);

    let itemTemp = document.createElement('div');
    itemTemp.className = 'weather-item-temp';
    itemTemp.textContent = temp;
    newWeatherItem.append(itemTemp);
    //access the inner text to show current temp
    //access the inner text to show current location
    let itemLocation= document.createElement('div');
    itemLocation.className = 'weather-item-location';
    itemLocation.textContent = location;
    newWeatherItem.append(itemLocation);
    //append to weather-item-container
    //
};