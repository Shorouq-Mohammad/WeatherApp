class Manager{
    constructor(){
        this.cityData = []
    }
    async getDataFromDB(){
        const cities = await $.get('/cities')
        cities.forEach(async c => {
            if(!moment(c.updatedAt).isAfter(moment().subtract(3, 'hours'))){
                await this.updateCity(c.name)
            }
            c.updatedAt = moment(c.updatedAt).format("llll")
            this.cityData.push({...c, saved: true})
        })
    }
    async getCityData(city){
        let cityWeather
        if(city instanceof GeolocationCoordinates){
            const coords = `lat=${city.latitude}&lon=${city.longitude}`
            cityWeather = await $.get(`/city/${coords}`)
        }else{
            city = `q=${city}`
            cityWeather = await $.get(`/city/${city}`)
        }
        this.cityData.unshift(cityWeather)
    }
    async saveCity(city){
        const cityObj = this.cityData.find(c => c.name == city)
        cityObj["saved"] = true
        try{
            const addCity = await $.ajax({
                url: `/city`,
                type: 'POST',
                data: cityObj
            })
        }catch(error){
            console.log("the city was not added");
        }
    }
    async removeCity(city){
        try{
            const deleteCity = await $.ajax({
                url:`/city/${city}` ,
                method: 'DELETE'
            })
            const deletedCity = this.cityData.find(c => c.name == city)
            deletedCity.saved = false
        }catch(error){
            console.log("something went wrong, the city was not deleted")
        }
    }
    getCityDataArr(){return this.cityData}
    async updateCity(city){
        try{
            const updatedCity = await $.ajax({
                url: `/city/${city}`,
                method: 'PUT'
            })
            const index = this.cityData.findIndex(c => c.name === updatedCity.name)
            this.cityData[index]= {...updatedCity, saved: this.cityData[index].saved}
        } catch(error){
            console.log(error);
        }
    }
}
