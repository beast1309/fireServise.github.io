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

            .add(new ymaps.Placemark([65.848049, 74.472152], {
                balloonContentHeader: '<h4>ПГ-9</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="252" width="336">',
                iconCaption: 'ПГ-9'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.849295, 74.474673], {
                balloonContentHeader: '<h4>ПГ-10</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/10.jpg" height="252" width="336">',
                iconCaption: 'ПГ-10'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.849849, 74.475851], {
                balloonContentHeader: '<h4>ПГ-11</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/11.jpg" height="252" width="336">',
                iconCaption: 'ПГ-11'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. полярников */

            .add(new ymaps.Placemark([65.859503, 74.501579], {
                balloonContentHeader: '<h4>ПГ-51</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/51.jpg" height="252" width="336">',
                iconCaption: 'ПГ-51'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860965, 74.500286], {
                balloonContentHeader: '<h4>ПГ-57</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/57.jpg" height="252" width="336">',
                iconCaption: 'ПГ-57'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.86059, 74.504193], {
                balloonContentHeader: '<h4>ПГ-53</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/53.jpg" height="320" width="240">',
                iconCaption: 'ПГ-53'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.861491, 74.501885], {
                balloonContentHeader: '<h4>ПГ-56</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/56.jpg" height="252" width="336">',
                iconCaption: 'ПГ-56'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860061, 74.504790], {
                balloonContentHeader: '<h4>ПГ-52</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-52'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.859691, 74.50382], {
                balloonContentHeader: '<h4>ПГ-52в</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-52в'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860135, 74.502734], {
                balloonContentHeader: '<h4>ПГ-54</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/54.jpg" height="252" width="336">',
                iconCaption: 'ПГ-54'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860544, 74.501494], {
                balloonContentHeader: '<h4>ПГ-55</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/55.jpg" height="316" width="232">',
                iconCaption: 'ПГ-55'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.859934, 74.499757], {
                balloonContentHeader: '<h4>ПГ-60</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-60'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.860520, 74.498458], {
                balloonContentHeader: '<h4>ПГ-87</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-87'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.861203, 74.496951], {
                balloonContentHeader: '<h4>ПГ-88</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/88.jpg" height="252" width="336">',
                iconCaption: 'ПГ-88'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            .add(new ymaps.Placemark([65.859904, 74.500386], {
                balloonContentHeader: '<h4>ПГ-8</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/8.jpg" height="252" width="336">',
                iconCaption: 'ПГ-8'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. энергетиков */

            .add(new ymaps.Placemark([65.858945, 74.497512], {
                balloonContentHeader: '<h4>ПГ-58</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/58.jpg" height="252" width="336">',
                iconCaption: 'ПГ-58'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.859145, 74.498715], {
                balloonContentHeader: '<h4>ПГ-59</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/59.jpg" height="252" width="336">',
                iconCaption: 'ПГ-59'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.853109, 74.484775], {
                balloonContentHeader: '<h4>ПГ-120</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/120.jpg" height="252" width="336">',
                iconCaption: 'ПГ-120'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.856806, 74.494603], {
                balloonContentHeader: '<h4>ПГ-112</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/112.jpg" height="150" width="200">',
                iconCaption: 'ПГ-112'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.858202, 74.494047], {
                balloonContentHeader: '<h4>ПГ-89</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-89'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.857832, 74.497343], {
                balloonContentHeader: '<h4>ПГ-111</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/111.jpg" height="150" width="200">',
                iconCaption: 'ПГ-111'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.855646, 74.491541], {
                balloonContentHeader: '<h4>ПГ-42</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/42.jpg" height="150" width="200">',
                iconCaption: 'ПГ-42'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.855196, 74.492420], {
                balloonContentHeader: '<h4>ПГ-44</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/44.jpg" height="150" width="200">',
                iconCaption: 'ПГ-44'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.858629, 74.499456], {
                balloonContentHeader: '<h4>ПГ-110</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/110.jpg" height="150" width="200">',
                iconCaption: 'ПГ-110'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.850384, 74.479550], {
                balloonContentHeader: '<h4>ПГ-20</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/20.jpg" height="150" width="200">',
                iconCaption: 'ПГ-20'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.851534, 74.480542], {
                balloonContentHeader: '<h4>ПГ-19</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/19.jpg" height="150" width="200">',
                iconCaption: 'ПГ-19'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.852269, 74.484810], {
                balloonContentHeader: '<h4>ПГ-21</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/21.jpg" height="150" width="200">',
                iconCaption: 'ПГ-21'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. ленина */

            .add(new ymaps.Placemark([65.857066, 74.500021], {
                balloonContentHeader: '<h4>ПГ-148</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/148.jpg" height="150" width="200">',
                iconCaption: 'ПГ-148'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.851857, 74.489390], {
                balloonContentHeader: '<h4>ПГ-139</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/139.jpg" height="150" width="200">',
                iconCaption: 'ПГ-139'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.850461, 74.483441], {
                balloonContentHeader: '<h4>ПГ-108</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/108.jpg" height="150" width="200">',
                iconCaption: 'ПГ-108'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.857715, 74.504587], {
                balloonContentHeader: '<h4>ПГ-145</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/145.jpg" height="150" width="200">',
                iconCaption: 'ПГ-145'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854036, 74.495159], {
                balloonContentHeader: '<h4>ПГ-46</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/46.jpg" height="150" width="200">',
                iconCaption: 'ПГ-46'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.855020, 74.497669], {
                balloonContentHeader: '<h4>ПГ-49</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/49.jpg" height="150" width="200">',
                iconCaption: 'ПГ-49'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854351, 74.495989], {
                balloonContentHeader: '<h4>ПГ-47</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/47.jpg" height="150" width="200">',
                iconCaption: 'ПГ-47'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.856825, 74.502164], {
                balloonContentHeader: '<h4>ПГ-144</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/144.jpg" height="150" width="200">',
                iconCaption: 'ПГ-144'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.850313, 74.485106], {
                balloonContentHeader: '<h4>ПГ-125</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/125.jpg" height="150" width="200">',
                iconCaption: 'ПГ-125'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.852782, 74.491889], {
                balloonContentHeader: '<h4>ПГ-28</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/28.jpg" height="150" width="200">',
                iconCaption: 'ПГ-28'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854629, 74.496731], {
                balloonContentHeader: '<h4>ПГ-48</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/48.jpg" height="150" width="200">',
                iconCaption: 'ПГ-48'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854097, 74.491522], {
                balloonContentHeader: '<h4>ПГ-30</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/30.jpg" height="252" width="336">',
                iconCaption: 'ПГ-30'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854712, 74.495182], {
                balloonContentHeader: '<h4>ПГ-45</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/45.jpg" height="252" width="336">',
                iconCaption: 'ПГ-45'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.855612, 74.496433], {
                balloonContentHeader: '<h4>ПГ-50</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/50.jpg" height="252" width="336">',
                iconCaption: 'ПГ-50'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. мира */

            .add(new ymaps.Placemark([65.860718, 74.495094], {
                balloonContentHeader: '<h4>ПГ-128</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/128.jpg" height="252" width="336">',
                iconCaption: 'ПГ-128'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.860236, 74.495029], {
                balloonContentHeader: '<h4>ПГ-129</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/129.jpg" height="252" width="336">',
                iconCaption: 'ПГ-129'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.851673, 74.475978], {
                balloonContentHeader: '<h4>ПГ-15</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/15.jpg" height="252" width="336">',
                iconCaption: 'ПГ-15'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.858570, 74.493859], {
                balloonContentHeader: '<h4>ПГ-40</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="252" width="336">',
                iconCaption: 'ПГ-40'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.858938, 74.491200], {
                balloonContentHeader: '<h4>ПГ-36</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/36.jpg" height="252" width="336">',
                iconCaption: 'ПГ-36'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.857214, 74.486701], {
                balloonContentHeader: '<h4>ПГ-34</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/34.jpg" height="252" width="336">',
                iconCaption: 'ПГ-34'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.852758, 74.474442], {
                balloonContentHeader: '<h4>ПГ-17</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/17.jpg" height="252" width="336">',
                iconCaption: 'ПГ-17'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.857152, 74.486042], {
                balloonContentHeader: '<h4>ПГ-33</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/33.jpg" height="252" width="336">',
                iconCaption: 'ПГ-33'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854953, 74.481048], {
                balloonContentHeader: '<h4>ПГ-122</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/122.jpg" height="252" width="336">',
                iconCaption: 'ПГ-122'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.858185, 74.489221], {
                balloonContentHeader: '<h4>ПГ-35</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/35.jpg" height="252" width="336">',
                iconCaption: 'ПГ-35'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.856739, 74.482979], {
                balloonContentHeader: '<h4>ПГ-26</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/26.jpg" height="252" width="336">',
                iconCaption: 'ПГ-26'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.853627, 74.475736], {
                balloonContentHeader: '<h4>ПГ-23</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/23.jpg" height="252" width="336">',
                iconCaption: 'ПГ-23'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.859152, 74.493284], {
                balloonContentHeader: '<h4>ПГ-39</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/39.jpg" height="252" width="336">',
                iconCaption: 'ПГ-39'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. звёздная */

            .add(new ymaps.Placemark([65.859712, 74.495963], {
                balloonContentHeader: '<h4>ПГ-130</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/130.jpg" height="252" width="336">',
                iconCaption: 'ПГ-130'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.859328, 74.495487], {
                balloonContentHeader: '<h4>ПГ-131</h4>',
                balloonContentBody: 'Тип: наружний;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/131.jpg" height="252" width="336">',
                iconCaption: 'ПГ-131'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. спортивная */

            .add(new ymaps.Placemark([65.854911, 74.483821], {
                balloonContentHeader: '<h4>ПГ-27</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/27.jpg" height="252" width="336">',
                iconCaption: 'ПГ-27'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.853383, 74.491033], {
                balloonContentHeader: '<h4>ПГ-29</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/29.jpg" height="252" width="336">',
                iconCaption: 'ПГ-29'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.854339, 74.488040], {
                balloonContentHeader: '<h4>ПГ-31</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/31.jpg" height="252" width="336">',
                iconCaption: 'ПГ-31'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))

            .add(new ymaps.Placemark([65.855396, 74.486436], {
                balloonContentHeader: '<h4>ПГ-32</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/32.jpg" height="252" width="336">',
                iconCaption: 'ПГ-32'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. строителей */

            .add(new ymaps.Placemark([65.851567, 74.474375], {
                balloonContentHeader: '<h4>ПГ-14</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/waterObjects/14.jpg" height="252" width="336">',
                iconCaption: 'ПГ-14'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты ул. набережная */

            .add(new ymaps.Placemark([65.840714, 74.460534], {
                balloonContentHeader: '<h4>ПГ-41</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: тупиковая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-41'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
            /* гидранты пр-д Медвежье */

            .add(new ymaps.Placemark([65.845723, 74.469151], {
                balloonContentHeader: '<h4>ПГ-68</h4>',
                balloonContentBody: 'Тип: подземный;<br>Система: кольцевая',
                balloonContentFooter: '<img src="./images/pg-kek.jpg" height="150" width="200">',
                iconCaption: 'ПГ-68'
            }, {
                preset: 'islands#blueCircleDotIconWithCaption',
                iconCaptionMaxWidth: '50'
            }))
        /* гидранты пр-е */


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