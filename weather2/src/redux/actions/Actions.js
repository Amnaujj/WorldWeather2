
export const GET_CITY = 'GET_CITY';

const apiKey = '4ae2636d8dfbdc3044bede63951a019b';



export function getCity (ciudad) {

    return function(dispatch ){
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}&units=metric`)
        .then(info => info.json())
        .then(
            (i) => {
                if(i.main !== undefined){
                    const ciudad = {
                        min: Math.round(i.main.temp_min),
                        max: Math.round(i.main.temp_max),
                        img: i.weather[0].icon,
                        id: i.id,
                        wind: i.wind.speed,
                        temp: i.main.temp,
                        name: i.name,
                        weather: i.weather[0].main,
                        clouds: i.clouds.all,
                        latitud: i.coord.lat,
                        longitud: i.coord.lon
                    }
                    return dispatch({
                        type: 'GET_CITY',
                        payload: ciudad
                    })
                }
            }
        )
    }    
}
