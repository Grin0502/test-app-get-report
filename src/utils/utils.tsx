const getPrices = (price: number) => {
    return "$" + price.toLocaleString("en-US");
};

export {
    getPrices
};