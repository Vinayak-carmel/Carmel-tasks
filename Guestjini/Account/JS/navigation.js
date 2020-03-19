function changeImage(image, id) {
    var changeimage = image;
    var id = id;
    id = document.getElementById(id);
    id.src = changeimage;
}

function defaultImage(image, id) {
    var changeimage = image;
    var id = id;
    id = document.getElementById(id);
    id.src = changeimage;
}

function showBurgerMenu(navID, rentID) {
    var burgerMenu = document.getElementById(navID);
    var rentInvoice = document.getElementById(rentID);
    rentInvoice.style.position = 'fixed';
    burgerMenu.style.display = 'block';
    window.onclick = function(event) {
        if (event.target == burgerMenu) {
            burgerMenu.style.display = "none";
            rentInvoice.style.position = 'absolute';
        }
    }

}

function nextNav(dest) {
    location.href = dest;
}

function rentShowMore(icon, rent, dth, breakage, discount, net) {
    var changeIconID = document.getElementById(icon);
    var rentID = document.getElementById(rent);
    var dthID = document.getElementById(dth);
    var breakageID = document.getElementById(breakage);
    var discountID = document.getElementById(discount);
    var netID = document.getElementById(net);

    if (changeIconID.alt == 'downwordIcon') {
        changeIconID.alt = 'upwordIcon';
        rentID.style.display = 'block';
        rentID.style.paddingTop = '4%';
        dthID.style.paddingTop = '1%';
        dthID.style.display = 'block';
        breakageID.style.display = 'block';
        discountID.style.display = 'block';
        netID.style.display = 'block';
        changeIconID.src = '../ICONS/Artboard 1 copy 16@16x.png';

    } else {
        rentID.style.display = 'none';
        dthID.style.display = 'none';
        breakageID.style.display = 'none';
        discountID.style.display = 'none';
        netID.style.display = 'none';
        changeIconID.src = '../ICONS/Artboard 1 copy 21@16x.png';
        changeIconID.alt = 'downwordIcon'
    }
}

function morePayment(payment, option) {
    var paymentType = document.getElementById(payment);
    var moreOption = document.getElementById(option);
    paymentType.style.display = 'block';
    moreOption.style.display = 'none';
}

function pay() {

}