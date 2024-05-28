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
        var myMap = new ymaps.Map("map", {
            center: [65.856469, 74.493631],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),

            // Создаем геообъект с типом геометрии "Точка".
            myGeoObject = new ymaps.GeoObject({
                // Описание геометрии.
                geometry: {
                    type: "Point",
                    coordinates: [65.856469, 74.493631]
                },
                // Свойства.
                properties: {
                    // Контент метки.
                    iconContent: 'ПГ-123',
                    hintContent: 'Тип: наружний; Система: кольцева'
                }
            }, {
                // Опции.
                // Иконка метки будет растягиваться под размер ее содержимого.
                preset: 'islands#blackStretchyIcon',
                // Метку можно перемещать.
                draggable: false
            });


        myMap.geoObjects
            .add(myGeoObject)
            .add(new ymaps.Placemark([55.684758, 37.738521], {
                balloonContent: 'цвет <strong>воды пляжа бонди</strong>'
            }, {
                preset: 'islands#icon',
                iconColor: '#0095b6'
            }))
            .add(new ymaps.Placemark([55.833436, 37.715175], {
                balloonContent: '<strong>серобуромалиновый</strong> цвет'
            }, {
                preset: 'islands#dotIcon',
                iconColor: '#735184'
            }))
            .add(new ymaps.Placemark([55.687086, 37.529789], {
                balloonContent: 'цвет <strong>влюбленной жабы</strong>'
            }, {
                preset: 'islands#circleIcon',
                iconColor: '#3caa3c'
            }))
            .add(new ymaps.Placemark([55.782392, 37.614924], {
                balloonContent: 'цвет <strong>детской неожиданности</strong>'
            }, {
                preset: 'islands#circleDotIcon',
                iconColor: 'yellow'
            }))
            .add(new ymaps.Placemark([55.642063, 37.656123], {
                balloonContent: 'цвет <strong>красный</strong>'
            }, {
                preset: 'islands#redSportIcon'
            }))
            .add(new ymaps.Placemark([55.826479, 37.487208], {
                balloonContent: 'цвет <strong>фэйсбука</strong>'
            }, {
                preset: 'islands#governmentCircleIcon',
                iconColor: '#3b5998'
            }))
            .add(new ymaps.Placemark([55.694843, 37.435023], {
                balloonContent: 'цвет <strong>носика Гены</strong>',
                iconCaption: 'Очень длиннный, но невероятно интересный текст'
            }, {
                preset: 'islands#greenDotIconWithCaption'
            }))
            .add(new ymaps.Placemark([55.790139, 37.814052], {
                balloonContent: 'цвет <strong>голубой</strong>',
                iconCaption: 'Очень длиннный, но невероятно интересный текст'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }));
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

function sortTable() {

    const table = document.querySelector("#table");
    const th = table.querySelectorAll("th");
    let tbody = table.querySelector("tbody");
    let rows = [...tbody.rows];

    th.forEach((header) => {
        header.addEventListener("click", function () {
            let columnIndex = header.cellIndex;
            let sortDirection =
                header.getAttribute("data-sort-direction") === "asc" ? "desc" : "asc";
            header.setAttribute("data-sort-direction", sortDirection);

            rows.sort((a, b) => {
                let aValue = a.cells[columnIndex].textContent;
                let bValue = b.cells[columnIndex].textContent;

                if (sortDirection === "asc") {
                    return aValue > bValue ? 1 : -1;
                } else {
                    return bValue > aValue ? 1 : -1;
                }
            });

            tbody.remove();
            tbody = document.createElement("tbody");
            rows.forEach((row) => tbody.appendChild(row));
            table.appendChild(tbody);
        });
    });
}

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