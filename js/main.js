$(function () {

    $('.darkmode__btn').on('click', function () {
        $('.darkmode__btn').toggleClass('--active');
        $('.header').toggleClass('--darkmode');
        $('.header__burger').toggleClass('--darkmode');
        $('.main').toggleClass('--darkmode');
        $('.footer').toggleClass('--darkmode');
        $('.darkmode__mask').toggleClass('--darkmode');
        $('.navigation').toggleClass('--darkmode');
        $('.navigation__list-link__img').toggleClass('--darkmode');
        $('.table').toggleClass('--darkmode');
        $('.calc').toggleClass('--darkmode');
    });

    $('.header__burger').on('click', function () {
        $('.navigation').toggleClass('--visible');
    });

    function dates() {

        const options = {
            hour: 'numeric', minute: 'numeric', second: 'numeric',
            day: 'numeric', month: 'numeric', year: 'numeric',
            weekday: 'short',
            timeZoneName: 'short'
        }

        let time = new Date()
        document.getElementById('time').innerHTML = time.toLocaleDateString('ru-RU', options)

    }

    setInterval(dates, 30);
    dates();

    ymaps.ready(init);

    function init() {
        let myMap = new ymaps.Map("map", {
            center: [65.856469, 74.493631],
            zoom: 14,
            controls: ['routeButtonControl'],

        }, {
            searchControlProvider: 'yandex#search'
        }),


            // Создаем геообъект с типом геометрии "Точка".
            myGeoObject = new ymaps.GeoObject();


        myMap.geoObjects
            .add(myGeoObject)
            .add(new ymaps.Placemark([65.859503, 74.501579], {
                balloonContentHeader: '<h4>ПГ-51</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/51.jpg" height="252" width="336">',
                iconCaption: 'ПГ-51'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860965, 74.500286], {
                balloonContentHeader: '<h4>ПГ-57</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/57.jpg" height="252" width="336">',
                iconCaption: 'ПГ-57'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.86059, 74.504193], {
                balloonContentHeader: '<h4>ПГ-53</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/53.jpg" height="320" width="240">',
                iconCaption: 'ПГ-53'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.861491, 74.501885], {
                balloonContentHeader: '<h4>ПГ-56</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/56.jpg" height="252" width="336">',
                iconCaption: 'ПГ-56'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860061, 74.504790], {
                balloonContentHeader: '<h4>ПГ-52</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-52'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.859691, 74.50382], {
                balloonContentHeader: '<h4>ПГ-52в</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-52в'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860135, 74.502734], {
                balloonContentHeader: '<h4>ПГ-54</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/54.jpg" height="252" width="336">',
                iconCaption: 'ПГ-54'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860544, 74.501494], {
                balloonContentHeader: '<h4>ПГ-55</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/55.jpg" height="316" width="232">',
                iconCaption: 'ПГ-55'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.859934, 74.499757], {
                balloonContentHeader: '<h4>ПГ-60</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-60'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860520, 74.498458], {
                balloonContentHeader: '<h4>ПГ-87</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-87'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.861203, 74.496951], {
                balloonContentHeader: '<h4>ПГ-88</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/88.jpg" height="252" width="336">',
                iconCaption: 'ПГ-88'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.859904, 74.500386], {
                balloonContentHeader: '<h4>ПГ-8</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/8.jpg" height="252" width="336">',
                iconCaption: 'ПГ-8'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. энергетиков */

            .add(new ymaps.Placemark([65.858945, 74.497512], {
                balloonContentHeader: '<h4>ПГ-58</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/58.jpg" height="252" width="336">',
                iconCaption: 'ПГ-58'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.859145, 74.498715], {
                balloonContentHeader: '<h4>ПГ-59</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/59.jpg" height="252" width="336">',
                iconCaption: 'ПГ-59'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.856806, 74.494603], {
                balloonContentHeader: '<h4>ПГ-112</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-112'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. ленина */

            .add(new ymaps.Placemark([65.860718, 74.495094], {
                balloonContentHeader: '<h4>ПГ-128</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/128.jpg" height="252" width="336">',
                iconCaption: 'ПГ-128'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.860236, 74.495029], {
                balloonContentHeader: '<h4>ПГ-129</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/129.jpg" height="252" width="336">',
                iconCaption: 'ПГ-129'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. звёздная */

            .add(new ymaps.Placemark([65.859712, 74.495963], {
                balloonContentHeader: '<h4>ПГ-130</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/130.jpg" height="252" width="336">',
                iconCaption: 'ПГ-130'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.859328, 74.495487], {
                balloonContentHeader: '<h4>ПГ-131</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="images/waterObjects/131.jpg" height="252" width="336">',
                iconCaption: 'ПГ-131'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. спортивная */

            .add(new ymaps.Placemark([65.840714, 74.460534], {
                balloonContentHeader: '<h4>ПГ-41</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: тупиковая',
                balloonContentFooter: '<img src="images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-41'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
        /* гидранты пр-д Медвежье */


        let control = myMap.controls.get('routeButtonControl')

        // Зададим координаты пункта отправления с помощью геолокации.
        control.routePanel.geolocate('from')

        // Откроем панель для построения маршрутов.
        control.state.set('expanded', true)

        myMap.events.add('click', function (e) {
            if (!myMap.balloon.isOpen()) {
                let coords = e.get('coords');
                myMap.balloon.open(coords, {
                    contentHeader: 'Координаты точки:',
                    contentBody: '<p>Широта:<br></p>' + coords[0].toPrecision(6) +
                        '<p>Долгота:<br>' + coords[1].toPrecision(6)
                });
            }
            else {
                myMap.balloon.close();
            }
        });

        // Скрываем хинт при открытии балуна.
        myMap.events.add('balloonopen', function (e) {
            myMap.hint.close();
        });
    }
});

function searchTable() {
    let input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("table");
    tr = table.getElementsByTagName("tr");

    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

$(function () {

    const table = document.querySelector("#table")
    const th = table.querySelectorAll("th")
    const thValOne = th[0]
    const thValTwo = th[1]
    let tbody = table.querySelector("tbody")
    let rows = [...tbody.rows]


    thValOne.addEventListener('click', function () {
        let sortDirection = thValOne.getAttribute('data-sort-direction') === "asc" ? "desc" : "asc"
        thValOne.setAttribute('data-sort-direction', sortDirection)

        rows.sort((a, b) => {
            let aValue = a.cells[0].innerText
            let bValue = b.cells[0].innerText

            console.log(aValue, bValue)

            if (sortDirection === "asc") {
                return parseInt(aValue) > parseInt(bValue) ? 1 : -1
            } else {
                return parseInt(bValue) > parseInt(aValue) ? 1 : -1
            }
        })

        tbody.remove()
        tbody = document.createElement("tbody")
        rows.forEach((row) => tbody.appendChild(row))
        table.appendChild(tbody)
    })

    thValTwo.addEventListener('click', function () {
        let sortDirection = thValTwo.getAttribute('data-sort-direction') === "asc" ? "desc" : "asc"
        thValTwo.setAttribute('data-sort-direction', sortDirection)

        rows.sort((a, b) => {
            let aValue = a.cells[1].innerText
            let bValue = b.cells[1].innerText

            console.log(aValue, bValue)

            if (sortDirection === "asc" || aValue.toLowerCase() < bValue.toLowerCase()) {
                return -1
            }
            if (sortDirection === "desc" || aValue.toLowerCase() > bValue.toLowerCase()) {
                return 1
            }
            return 0
        })

        tbody.remove()
        tbody = document.createElement("tbody")
        rows.forEach((row) => tbody.appendChild(row))
        table.appendChild(tbody)
    })
})



$('.calculator__btn').on('click', function calc() {

    let firstFM = document.getElementById('firstFM').value;
    let secondFM = document.getElementById('secondFM').value;
    let therdFM = document.getElementById('therdFM').value;
    let fourFM = document.getElementById('fourFM').value;
    let fiveFM = document.getElementById('fiveFM').value;

    let HoursOn = document.getElementById('HoursOn').value;
    let MinutesOn = document.getElementById('MinutesOn').value;

    let AirQ = document.getElementById('AirQ').value;
    let BallonV = document.getElementById('BallonV').value;

    let FastPmin__on = document.getElementById('FastPmin__on').value;

    let Pmin__on = [firstFM, secondFM, therdFM, fourFM, fiveFM];

    Array.prototype.remove = function (value) {
        var index = this.indexOf(value);
        if (index !== -1) {
            this.splice(index, 1);
        }
    }

    for (i = 0; i < 5; i++) {

        const zeroValue = 0;
        const emptyValue = '';
        Pmin__on.remove(zeroValue);
        Pmin__on.remove(emptyValue);
    }

    let min = Math.min(...Pmin__on);


    FastPmin__on = min;

    let Pmax__pad = min / 3;
    let Pcontrexit = min - Pmax__pad;
    let DeltaTime = (Pmax__pad * BallonV) / AirQ;


    HoursOn = parseInt(HoursOn);
    MinutesOn = parseInt(MinutesOn);



    if ((MinutesOn + DeltaTime) < 59) {

        MinutesOn += DeltaTime;
    }

    else if ((MinutesOn + DeltaTime) > 59) {

        HoursOn += 1;
        MinutesOn = (MinutesOn + DeltaTime) - 60;

    }

    if (HoursOn < 10) {
        HoursOn = '0' + HoursOn
    }

    if (HoursOn > 23) {
        HoursOn = '0' + 0;
    }

    let Texit;

    if (MinutesOn < 10) {
        Texit = HoursOn + ' : 0' + Math.floor(MinutesOn);
    }

    else if (MinutesOn > 10) {
        Texit = HoursOn + ' : ' + Math.floor(MinutesOn);
    }

    let Tjob = (min * BallonV) / AirQ;

    let Tback;

    HoursOn = parseInt(HoursOn);
    MinutesOn = parseInt(MinutesOn);

    if ((MinutesOn + Tjob) < 59) {

        MinutesOn += Tjob;
    }

    else if ((MinutesOn + Tjob) > 59) {

        HoursOn += 1;
        MinutesOn = (MinutesOn + Tjob) - 60;

    }

    if (HoursOn < 10) {
        HoursOn = '0' + HoursOn
    }

    if (HoursOn > 23) {
        HoursOn = '0' + 0;
    }

    if (MinutesOn < 10) {
        Tback = HoursOn + ' : 0' + Math.floor(MinutesOn);
    }

    else if (MinutesOn > 10) {
        Tback = HoursOn + ' : ' + Math.floor(MinutesOn);
    }


    document.getElementById('Pmax__pad').innerHTML = Math.floor(Pmax__pad);
    document.getElementById('Pcontrexit').innerHTML = Math.floor(Pcontrexit);
    document.getElementById('DeltaTime').innerHTML = Math.floor(DeltaTime);
    document.getElementById('Texit').innerHTML = Texit;
    document.getElementById('Tjob').innerHTML = Math.floor(Tjob);
    document.getElementById('Tback').innerHTML = Tback;
    document.getElementById('FastPmin__on').innerHTML = FastPmin__on;

    alert(Pmax__pad, Pcontrexit, DeltaTime, Texit, Tjob, Tback, FastPmin__on);
    return false;
});