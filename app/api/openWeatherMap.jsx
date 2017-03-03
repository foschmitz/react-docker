var axios = require('axios');

const APP_ID = '014b104c9850472d8da0fed17f7a40fd';
const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=metric';

module.exports = {
    getTemp: function (location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&appid=${APP_ID}&q=${encodedLocation}`;

        return axios.get(requestUrl).then(function (res) {
            if (res.data.count < 1) {
                throw new Error("City not found");
            } else {
                return res.data.list[0].main.temp;
            }
        }, function (res) {
            throw new Error(res.data.message);
        });

    }
}