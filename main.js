// БАЗА ДАННЫХ ПК
let pc = [
    {id: 0, name: "PCZONE ONE", videoCard: "Nvidia Geforce Gtx 1660 4 GB", processor: "Intel Core I5 10400f", motherBoard: "B760", price: 59.999},
    {id: 1, name: "PCZONE FURY", videoCard: "Nvidia Geforce Rtx 2060 6 GB", processor: "Intel Core I5 12400f", motherBoard: "B760", price: 89.999},
    {id: 2, name: "PCZONE WARRIOR", videoCard: "Nvidia Geforce Rtx 2070 6 GB", processor: "Intel Core I5 14400f", motherBoard: "Z790", price: 109.999},
    {id: 3, name: "PCZONE CHAMPION", videoCard: "Nvidia Geforce Rtx 3060 8 GB", processor: "Intel Core I7 12700f", motherBoard: "Z790", price: 139.999},
    //.................................
];










// СИНХРОНИЗАЦИЯ ЦЕН ПК
const divId = document.querySelector(".info-buy-price");
const dataId = divId.getAttribute("data-id");

let pcPrice = pc.find(pcId => pcId.id == dataId);

if (pcPrice) {
    const divPriceP = document.createElement("p");
    divPriceP.innerText = pcPrice.price + "руб";
    divId.append(divPriceP);
}





