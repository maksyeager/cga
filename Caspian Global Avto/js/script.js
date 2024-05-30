const carLists = document.querySelectorAll(".car-list");

getCar();

async function getCar() {

    const response = await fetch("./js/cars.json");
    console.log(response);

    const cars = await response.json();
    console.log(cars);

    renderCars(cars);
}

const renderCars = (cars) => {
    cars.forEach((car) => {
        const carHTML = `
        <div class ="car-item">
            <a class="car-item__link" href="/car"></a>
            <div class="car-item__img">
                <img src="${car.image}" alt="${car.make} ${car.model}" class="cart-item__img">
            </div> 
            <h3>${car.make} ${car.model}</h3>
            <p>Year: ${car.year}</p>
            <p>Price: ${car.price}</p>
        </div>
    `;
    carLists.forEach(carList=>{
        carList.insertAdjacentHTML("beforeend", carHTML)
    })
    });
};