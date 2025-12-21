function Food() {

    const food1 = "Pizza"
    const price1 = 10

    return (
        <div>
            <h1>Food</h1>
            <p>Food is a dish of food</p>
            <p>{food1.toUpperCase()}</p>
            <p>{price1}</p>
        </div>
    )
}

export default Food
