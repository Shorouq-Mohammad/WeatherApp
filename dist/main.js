const manager = new Manager() 
const renderer = new Render()

const handleSearch  = async function(){
    const city = $("#city").val()
    let cities = await manager.getCityData(city)
    cities = manager.getCityDataArr()
    renderer.renderData(cities)
}

const loadPage = async function(){
    await manager.getDataFromDB()
    navigator.geolocation.getCurrentPosition(async position => {
        await manager.getCityData(position.coords)
        renderer.renderData(manager.getCityDataArr())
    }, async error => {
        await renderer.renderData(manager.getCityDataArr())
    })
}

$("#cities").on("click", ".material-icons", async function(){
    const name = $(this).closest(".card-image").find(".name").text()
    const iconType = $(this).text()
    if(iconType === "add_circle"){
        await manager.saveCity(name)
    }else{
        await manager.removeCity(name)
    }
    renderer.renderData(manager.getCityDataArr())
})

$("#cities").on("click", ".card-content a", async function() {
    const name = $(this).closest(".city").find(".card-image").find(".name").text()
    await manager.updateCity(name)
    renderer.renderData(manager.getCityDataArr())
})

loadPage()