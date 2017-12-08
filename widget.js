// declaring a namespace for the plugin
var TIETO = TIETO || {};

TIETO = {
    widget: {
        render: function (context) {
            var imgUrls = TIETO.widget.graphsPerUri[context.id];
            if (imgUrls) {
                var imgUrl = imgUrls[0];
            }

            $('.concept-info').after(Handlebars.compile($('#tieto-template').html())({'opened': true, 'imgurl': imgUrl, 'images': imgUrls, clang: content_lang}));
            $('.panel-body').magnificPopup({
                delegate: 'a',
                gallery: {
                    enabled: true
                },
                type: 'iframe'
            });
        },
        // Flips the icon displayed on the top right corner of the widget header
        flipChevron: function() {
            var $glyph = $('#headingTieto > .versal > .glyphicon');
            if ($glyph.hasClass('glyphicon-chevron-down')) {
                $glyph.removeClass('glyphicon-chevron-down').addClass('glyphicon-chevron-up');
                createCookie('TIETO_WIDGET_OPEN', 1);
            } else {
                $glyph.removeClass('glyphicon-chevron-up').addClass('glyphicon-chevron-down');
                createCookie('TIETO_WIDGET_OPEN', 0);
            }
        },
        legendVisible: false,
        toggleLegend: function() {
            TIETO.widget.legendVisible = !TIETO.widget.legendVisible;
            $('#collapseTieto > .legend').toggle();
        },
        graphsPerUri: { // SHITZU
            "http://urn.fi/URN:NBN:fi:au:tt:t140":[
                "http://kaaviot.finto.fi/tt/asiarekisteri.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t110":[
                "http://kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t30":[
                "http://kaaviot.finto.fi/tt/rekisterit.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t31":[
                "http://kaaviot.finto.fi/tt/tiedon-muotoja.svg",
                "http://kaaviot.finto.fi/tt/rakenteinen-data.svg",
                "http://kaaviot.finto.fi/tt/avoin-data-ja-omadata.svg",
                "http://kaaviot.finto.fi/tt/raakadata-ja-massadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t32":[
                "http://kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t33":[
                "http://kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t34":[
                "http://kaaviot.finto.fi/tt/tietojohtaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t35":[
                "http://kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t36":[
                "http://kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t37":[
                "http://kaaviot.finto.fi/tt/tiedon-jalostaminen.svg",
                "http://kaaviot.finto.fi/tt/aineeton-paaoma.svg",
                "http://kaaviot.finto.fi/tt/sisalto-kaavio.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t38":[
                "http://kaaviot.finto.fi/tt/sisalto-kaavio.svg",
                "http://kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t39":[
                "http://kaaviot.finto.fi/tt/tietoaineistot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t85":[
                "http://kaaviot.finto.fi/tt/tietoilmioita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t84":[
                "http://kaaviot.finto.fi/tt/rakenteinen-data.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t87":[
                "http://kaaviot.finto.fi/tt/tiedon-jalostaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t86":[
                "http://kaaviot.finto.fi/tt/sanasto.svg",
                "http://kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg",
                "http://kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t81":[
                "http://kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t80":[
                "http://kaaviot.finto.fi/tt/tietoturvallisuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t83":[
                "http://kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t82":[
                "http://kaaviot.finto.fi/tt/tietoaineistot.svg",
                "http://kaaviot.finto.fi/tt/arkistointi.svg",
                "http://kaaviot.finto.fi/tt/asiakirjahallinta.svg",
                "http://kaaviot.finto.fi/tt/rakenteinen-data.svg",
                "http://kaaviot.finto.fi/tt/tiedonhankinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t89":[
                "http://kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t88":[
                "http://kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t49":[
                "http://kaaviot.finto.fi/tt/arkistointi.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t18":[
                "http://kaaviot.finto.fi/tt/immateriaalioikeus.svg",
                "http://kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg",
                "http://kaaviot.finto.fi/tt/avoin-data-ja-omadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t19":[
                "http://kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t106":[
                "http://kaaviot.finto.fi/tt/tietojohtaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t12":[
                "http://kaaviot.finto.fi/tt/tietotyo.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t13":[
                "http://kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t10":[
                "http://kaaviot.finto.fi/tt/arkistointi.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t11":[
                "http://kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t16":[
                "http://kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t17":[
                "http://kaaviot.finto.fi/tt/asiarekisteri.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t14":[
                "http://kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t15":[
                "http://kaaviot.finto.fi/tt/sisalto-kaavio.svg",
                "http://kaaviot.finto.fi/tt/tiedonhallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t92":[
                "http://kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t93":[
                "http://kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t90":[
                "http://kaaviot.finto.fi/tt/tietojohtaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t91":[
                "http://kaaviot.finto.fi/tt/tiedon-muotoja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t96":[
                "http://kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t97":[
                "http://kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t94":[
                "http://kaaviot.finto.fi/tt/tietoaineistot.svg",
                "http://kaaviot.finto.fi/tt/asiakirjahallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t95":[
                "http://kaaviot.finto.fi/tt/tietoturvallisuus.svg",
                "http://kaaviot.finto.fi/tt/tiedonhallinta.svg",
                "http://kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t98":[
                "http://kaaviot.finto.fi/tt/rakenteinen-data.svg",
                "http://kaaviot.finto.fi/tt/tiedonhankinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t99":[
                "http://kaaviot.finto.fi/tt/tiedonhankinta.svg",
                "http://kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t47":[
                "http://kaaviot.finto.fi/tt/tiedonhallinta.svg",
                "http://kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg",
                "http://kaaviot.finto.fi/tt/tietojohtaminen.svg",
                "http://kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t69":[
                "http://kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t68":[
                "http://kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t67":[
                "http://kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t66":[
                "http://kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t65":[
                "http://kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t108":[
                "http://kaaviot.finto.fi/tt/tiedon-jalostaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t63":[
                "http://kaaviot.finto.fi/tt/tiedon-tyyppeja.svg",
                "http://kaaviot.finto.fi/tt/rekisterit.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t62":[
                "http://kaaviot.finto.fi/tt/asiakirjahallinta.svg",
                "http://kaaviot.finto.fi/tt/tiedonhallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t61":[
                "http://kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t60":[
                "http://kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t114":[
                "http://kaaviot.finto.fi/tt/tietoaineistot.svg",
                "http://kaaviot.finto.fi/tt/rekisterit.svg",
                "http://kaaviot.finto.fi/tt/asiarekisteri.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t115":[
                "http://kaaviot.finto.fi/tt/tietotyo.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t116":[
                "http://kaaviot.finto.fi/tt/avoin-data-ja-omadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t117":[
                "http://kaaviot.finto.fi/tt/tiedon-jalostaminen.svg",
                "http://kaaviot.finto.fi/tt/tiedon-muotoja.svg",
                "http://kaaviot.finto.fi/tt/tiedon-tyyppeja.svg",
                "http://kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg",
                "http://kaaviot.finto.fi/tt/tietoilmioita.svg",
                "http://kaaviot.finto.fi/tt/tietoaineistot.svg",
                "http://kaaviot.finto.fi/tt/sanasto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t78":[
                "http://kaaviot.finto.fi/tt/terminologian-kasitteita.svg",
                "http://kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t79":[
                "http://kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t112":[
                "http://kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t113":[
                "http://kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t74":[
                "http://kaaviot.finto.fi/tt/immateriaalioikeus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t75":[
                "http://kaaviot.finto.fi/tt/tietoilmioita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t76":[
                "http://kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t77":[
                "http://kaaviot.finto.fi/tt/asiakirjahallinta.svg",
                "http://kaaviot.finto.fi/tt/arkistointi.svg",
                "http://kaaviot.finto.fi/tt/asiarekisteri.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t70":[
                "http://kaaviot.finto.fi/tt/rekisterit.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t119":[
                "http://kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t72":[
                "http://kaaviot.finto.fi/tt/raakadata-ja-massadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t73":[
                "http://kaaviot.finto.fi/tt/arkistointi.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t20":[
                "http://kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t111":[
                "http://kaaviot.finto.fi/tt/tietoilmioita.svg",
                "http://kaaviot.finto.fi/tt/tietojohtamisen-valineet.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t118":[
                "http://kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t71":[
                "http://kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t107":[
                "http://kaaviot.finto.fi/tt/terminologian-kasitteita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t48":[
                "http://kaaviot.finto.fi/tt/tietoaineistot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t105":[
                "http://kaaviot.finto.fi/tt/tietoaineistot.svg",
                "http://kaaviot.finto.fi/tt/tiedon-tyyppeja.svg",
                "http://kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t104":[
                "http://kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t103":[
                "http://kaaviot.finto.fi/tt/tietotyo.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t102":[
                "http://kaaviot.finto.fi/tt/terminologian-kasitteita.svg",
                "http://kaaviot.finto.fi/tt/sanasto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t101":[
                "http://kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t100":[
                "http://kaaviot.finto.fi/tt/avoin-data-ja-omadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t41":[
                "http://kaaviot.finto.fi/tt/tiedon-tyyppeja.svg",
                "http://kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg",
                "http://kaaviot.finto.fi/tt/rakenteinen-data.svg",
                "http://kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg",
                "http://kaaviot.finto.fi/tt/asiakirjahallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t40":[
                "http://kaaviot.finto.fi/tt/terminologian-kasitteita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t43":[
                "http://kaaviot.finto.fi/tt/sisalto-kaavio.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t42":[
                "http://kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t45":[
                "http://kaaviot.finto.fi/tt/immateriaalioikeus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t44":[
                "http://kaaviot.finto.fi/tt/tietotyo.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t109":[
                "http://kaaviot.finto.fi/tt/immateriaalioikeus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t46":[
                "http://kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t8":[
                "http://kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t9":[
                "http://kaaviot.finto.fi/tt/tietojohtaminen.svg",
                "http://kaaviot.finto.fi/tt/tietojohtamisen-valineet.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t1":[
                "http://kaaviot.finto.fi/tt/tiedonhankinta.svg",
                "http://kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t2":[
                "http://kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t3":[
                "http://kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t4":[
                "http://kaaviot.finto.fi/tt/tiedon-jalostaminen.svg",
                "http://kaaviot.finto.fi/tt/sisalto-kaavio.svg",
                "http://kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t5":[
                "http://kaaviot.finto.fi/tt/tietoilmioita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t6":[
                "http://kaaviot.finto.fi/tt/raakadata-ja-massadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t7":[
                "http://kaaviot.finto.fi/tt/tiedonhallinta.svg",
                "http://kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg",
                "http://kaaviot.finto.fi/tt/asiakirjahallinta.svg",
                "http://kaaviot.finto.fi/tt/arkistointi.svg",
                "http://kaaviot.finto.fi/tt/tietoilmioita.svg",
                "http://kaaviot.finto.fi/tt/tietojohtaminen.svg",
                "http://kaaviot.finto.fi/tt/tietojohtamisen-valineet.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t56":[
                "http://kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t57":[
                "http://kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t54":[
                "http://kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t55":[
                "http://kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t52":[
                "http://kaaviot.finto.fi/tt/terminologian-kasitteita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t53":[
                "http://kaaviot.finto.fi/tt/rakenteinen-data.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t50":[
                "http://kaaviot.finto.fi/tt/avoin-data-ja-omadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t51":[
                "http://kaaviot.finto.fi/tt/tiedonhankinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t58":[
                "http://kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t59":[
                "http://kaaviot.finto.fi/tt/terminologian-kasitteita.svg",
                "http://kaaviot.finto.fi/tt/sanasto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t138":[
                "http://kaaviot.finto.fi/tt/tiedon-jalostaminen.svg",
                "http://kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t139":[
                "http://kaaviot.finto.fi/tt/tietojohtamisen-valineet.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t132":[
                "http://kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t133":[
                "http://kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t130":[
                "http://kaaviot.finto.fi/tt/tiedon-muotoja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t131":[
                "http://kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t136":[
                "http://kaaviot.finto.fi/tt/tietoturvallisuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t137":[
                "http://kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t134":[
                "http://kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t135":[
                "http://kaaviot.finto.fi/tt/tiedonhallinta.svg",
                "http://kaaviot.finto.fi/tt/asiakirjahallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t23":[
                "http://kaaviot.finto.fi/tt/tietojohtaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t22":[
                "http://kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t21":[
                "http://kaaviot.finto.fi/tt/rakenteinen-data.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t64":[
                "http://kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t27":[
                "http://kaaviot.finto.fi/tt/tiedon-jalostaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t26":[
                "http://kaaviot.finto.fi/tt/asiakirjahallinta.svg",
                "http://kaaviot.finto.fi/tt/arkistointi.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t25":[
                "http://kaaviot.finto.fi/tt/tiedonhallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t24":[
                "http://kaaviot.finto.fi/tt/tietotyo.svg",
                "http://kaaviot.finto.fi/tt/asiakirjahallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t29":[
                "http://kaaviot.finto.fi/tt/tietojohtaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t28":[
                "http://kaaviot.finto.fi/tt/tietoturvallisuus.svg",
                "http://kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t129":[
                "http://kaaviot.finto.fi/tt/asiakirjahallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t128":[
                "http://kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t125":[
                "http://kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t124":[
                "http://kaaviot.finto.fi/tt/immateriaalioikeus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t127":[
                "http://kaaviot.finto.fi/tt/rekisterit.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t126":[
                "http://kaaviot.finto.fi/tt/rekisterit.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t121":[
                "http://kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t120":[
                "http://kaaviot.finto.fi/tt/tietojohtamisen-valineet.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t123":[
                "http://kaaviot.finto.fi/tt/immateriaalioikeus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t122":[
                "http://kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ]
        }
    }
};

$(function() {

    window.hamis = function (data) {
        // Only activating the widget when on a concept page and there is a prefLabel.
        if (data.page !== 'page' || data.prefLabels === undefined) {
            return;
        }
        // reading the id from the uri
        var id = data.uri;
        var openCookie = readCookie('TIETO_WIDGET_OPEN');
        var isOpen = openCookie !== null ? parseInt(openCookie, 10) : 1;

        TIETO.widget.render({id: id, opened: isOpen});
        $('.panel-body').slick({
            arrows: true,
            dots: true,
            responsive: true,
            speed: '0',
            prevArrow: '<span class="glyphicon glyphicon-chevron-left"></span>',
            nextArrow: '<span class="glyphicon glyphicon-chevron-right"></span>',
        });
        $('#headingTieto > .versal > .glyphicon').on('click', function() {
            TIETO.widget.flipChevron();
        });

        $('#headingTieto > .legend').on('click', function() {
            TIETO.widget.toggleLegend();
            return false;
        });
    };

});
