
const apiKey = '4ae2636d8dfbdc3044bede63951a019b';

export const GET_CITY = 'GET_CITY';


export default function getCity (city) {
    return function (dispatch) {
        return fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        .then (i => i.json())
        .then ((info) => {
            if(info.main !== undefined){
                const city = {
                min : Math.round(info.main.temp_min),
                max : Math.round(info.main.temp_min),
                img: info.weather[0].icon,
                id: info.id,
                wind: info.wind.speed,
                temp: info.main.temp,
                name: info.name,
                weather: info.weather[0].main,
                clouds: info.clouds.all,
                latitud: info.coord.lat,
                longitud: info.coord.lon
                };
                dispatch({
                    type: 'GET_CITY',
                    payload: city
                })
            } else { alert("ciudad no encontrada") }
        })
    }
}

export default function setCity (city) {
    return
}