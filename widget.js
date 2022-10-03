// declaring a namespace for the plugin
var TIETO = TIETO || {};

TIETO = {
    widget: {
        legendVisible: true,
        legendLabels: { 
            false: { 'fi': 'Näytä selite', 'sv': 'Visa förklaring', 'en': 'Show legend' }, 
            true: { 'fi': 'Piilota selite', 'sv': 'Dölj förklaring', 'en': 'Hide legend' }
        },
        render: function (context) {
            var imgUrls = TIETO.widget.graphsPerUri[context.id];
            if (imgUrls) {
                var imgUrl = imgUrls[0];
            }
            var legendLabel = TIETO.widget.legendLabels[TIETO.widget.legendVisible][lang];

            $('#content-bottom').after(Handlebars.compile($('#tieto-template').html())({'opened': true, 'imgurl': imgUrl, 'images': imgUrls, clang: content_lang, legendLabel: legendLabel}));
            var $tietoButton = $('#headingTieto > .accordion-button');
            $tietoButton.on('click', function() {

            });
            $('.panel-body').magnificPopup({
                delegate: 'a:not(.slick-cloned)',
                gallery: {
                    enabled: true
                },
                callbacks: {
                    open: function() {
                        var mfp = $.magnificPopup.instance;
                        var proto = $.magnificPopup.proto;

                        // only in case of multiple urls allow changing current slide (the default action)
                        mfp.next = function() {
                            if(imgUrls && imgUrls.length > 1) {
                                proto.next.call(mfp);
                            }
                        };
                        mfp.prev = function() {
                            if(imgUrls && imgUrls.length > 1) {
                                proto.prev.call(mfp);
                            }
                        };
                    }
                },
                type: 'iframe'
            });
        },
        toggleLegend: function() {
            TIETO.widget.legendVisible = !TIETO.widget.legendVisible;
            $('#headingTieto > button').text(TIETO.widget.legendLabels[TIETO.widget.legendVisible][lang]);
        },
        graphsPerUri: { // SHITZU
            "http://urn.fi/URN:NBN:fi:au:tt:t140":[
                "//kaaviot.finto.fi/tt/asiarekisteri.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t110":[
                "//kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t30":[
                "//kaaviot.finto.fi/tt/rekisterit.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t31":[
                "//kaaviot.finto.fi/tt/tiedon-muotoja.svg",
                "//kaaviot.finto.fi/tt/rakenteinen-data.svg",
                "//kaaviot.finto.fi/tt/avoin-data-ja-omadata.svg",
                "//kaaviot.finto.fi/tt/raakadata-ja-massadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t32":[
                "//kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t33":[
                "//kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t34":[
                "//kaaviot.finto.fi/tt/tietojohtaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t35":[
                "//kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t36":[
                "//kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t37":[
                "//kaaviot.finto.fi/tt/tiedon-jalostaminen.svg",
                "//kaaviot.finto.fi/tt/aineeton-paaoma.svg",
                "//kaaviot.finto.fi/tt/sisalto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t38":[
                "//kaaviot.finto.fi/tt/sisalto.svg",
                "//kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t39":[
                "//kaaviot.finto.fi/tt/tietoaineistot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t85":[
                "//kaaviot.finto.fi/tt/tietoilmioita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t84":[
                "//kaaviot.finto.fi/tt/rakenteinen-data.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t87":[
                "//kaaviot.finto.fi/tt/tiedon-jalostaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t86":[
                "//kaaviot.finto.fi/tt/sanasto.svg",
                "//kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg",
                "//kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t81":[
                "//kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t80":[
                "//kaaviot.finto.fi/tt/tietoturvallisuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t83":[
                "//kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t82":[
                "//kaaviot.finto.fi/tt/tietoaineistot.svg",
                "//kaaviot.finto.fi/tt/arkistointi.svg",
                "//kaaviot.finto.fi/tt/asiakirjahallinta.svg",
                "//kaaviot.finto.fi/tt/rakenteinen-data.svg",
                "//kaaviot.finto.fi/tt/tiedonhankinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t89":[
                "//kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t88":[
                "//kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t49":[
                "//kaaviot.finto.fi/tt/arkistointi.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t18":[
                "//kaaviot.finto.fi/tt/immateriaalioikeus.svg",
                "//kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg",
                "//kaaviot.finto.fi/tt/avoin-data-ja-omadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t19":[
                "//kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t106":[
                "//kaaviot.finto.fi/tt/tietojohtaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t12":[
                "//kaaviot.finto.fi/tt/tietotyo.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t13":[
                "//kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t10":[
                "//kaaviot.finto.fi/tt/arkistointi.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t11":[
                "//kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t16":[
                "//kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t17":[
                "//kaaviot.finto.fi/tt/asiarekisteri.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t14":[
                "//kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t15":[
                "//kaaviot.finto.fi/tt/sisalto.svg",
                "//kaaviot.finto.fi/tt/tiedonhallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t92":[
                "//kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t93":[
                "//kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t90":[
                "//kaaviot.finto.fi/tt/tietojohtaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t91":[
                "//kaaviot.finto.fi/tt/tiedon-muotoja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t96":[
                "//kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t97":[
                "//kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t94":[
                "//kaaviot.finto.fi/tt/tietoaineistot.svg",
                "//kaaviot.finto.fi/tt/asiakirjahallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t95":[
                "//kaaviot.finto.fi/tt/tietoturvallisuus.svg",
                "//kaaviot.finto.fi/tt/tiedonhallinta.svg",
                "//kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t98":[
                "//kaaviot.finto.fi/tt/rakenteinen-data.svg",
                "//kaaviot.finto.fi/tt/tiedonhankinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t99":[
                "//kaaviot.finto.fi/tt/tiedonhankinta.svg",
                "//kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t47":[
                "//kaaviot.finto.fi/tt/tiedonhallinta.svg",
                "//kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg",
                "//kaaviot.finto.fi/tt/tietojohtaminen.svg",
                "//kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t69":[
                "//kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t68":[
                "//kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t67":[
                "//kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t66":[
                "//kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t65":[
                "//kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t108":[
                "//kaaviot.finto.fi/tt/tiedon-jalostaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t63":[
                "//kaaviot.finto.fi/tt/tiedon-tyyppeja.svg",
                "//kaaviot.finto.fi/tt/rekisterit.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t62":[
                "//kaaviot.finto.fi/tt/asiakirjahallinta.svg",
                "//kaaviot.finto.fi/tt/tiedonhallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t61":[
                "//kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t60":[
                "//kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t114":[
                "//kaaviot.finto.fi/tt/tietoaineistot.svg",
                "//kaaviot.finto.fi/tt/rekisterit.svg",
                "//kaaviot.finto.fi/tt/asiarekisteri.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t115":[
                "//kaaviot.finto.fi/tt/tietotyo.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t116":[
                "//kaaviot.finto.fi/tt/avoin-data-ja-omadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t117":[
                "//kaaviot.finto.fi/tt/tiedon-jalostaminen.svg",
                "//kaaviot.finto.fi/tt/tiedon-muotoja.svg",
                "//kaaviot.finto.fi/tt/tiedon-tyyppeja.svg",
                "//kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg",
                "//kaaviot.finto.fi/tt/tietoilmioita.svg",
                "//kaaviot.finto.fi/tt/tietoaineistot.svg",
                "//kaaviot.finto.fi/tt/sanasto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t78":[
                "//kaaviot.finto.fi/tt/terminologian-kasitteita.svg",
                "//kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t79":[
                "//kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t112":[
                "//kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t113":[
                "//kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t74":[
                "//kaaviot.finto.fi/tt/immateriaalioikeus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t75":[
                "//kaaviot.finto.fi/tt/tietoilmioita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t76":[
                "//kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t77":[
                "//kaaviot.finto.fi/tt/asiakirjahallinta.svg",
                "//kaaviot.finto.fi/tt/arkistointi.svg",
                "//kaaviot.finto.fi/tt/asiarekisteri.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t70":[
                "//kaaviot.finto.fi/tt/rekisterit.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t119":[
                "//kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t72":[
                "//kaaviot.finto.fi/tt/raakadata-ja-massadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t73":[
                "//kaaviot.finto.fi/tt/arkistointi.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t20":[
                "//kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t111":[
                "//kaaviot.finto.fi/tt/tietoilmioita.svg",
                "//kaaviot.finto.fi/tt/tietojohtamisen-valineet.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t118":[
                "//kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t71":[
                "//kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t107":[
                "//kaaviot.finto.fi/tt/terminologian-kasitteita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t48":[
                "//kaaviot.finto.fi/tt/tietoaineistot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t105":[
                "//kaaviot.finto.fi/tt/tietoaineistot.svg",
                "//kaaviot.finto.fi/tt/tiedon-tyyppeja.svg",
                "//kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t104":[
                "//kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t103":[
                "//kaaviot.finto.fi/tt/tietotyo.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t102":[
                "//kaaviot.finto.fi/tt/terminologian-kasitteita.svg",
                "//kaaviot.finto.fi/tt/sanasto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t101":[
                "//kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t100":[
                "//kaaviot.finto.fi/tt/avoin-data-ja-omadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t41":[
                "//kaaviot.finto.fi/tt/tiedon-tyyppeja.svg",
                "//kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg",
                "//kaaviot.finto.fi/tt/rakenteinen-data.svg",
                "//kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg",
                "//kaaviot.finto.fi/tt/asiakirjahallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t40":[
                "//kaaviot.finto.fi/tt/terminologian-kasitteita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t43":[
                "//kaaviot.finto.fi/tt/sisalto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t42":[
                "//kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t45":[
                "//kaaviot.finto.fi/tt/immateriaalioikeus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t44":[
                "//kaaviot.finto.fi/tt/tietotyo.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t109":[
                "//kaaviot.finto.fi/tt/immateriaalioikeus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t46":[
                "//kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t8":[
                "//kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t9":[
                "//kaaviot.finto.fi/tt/tietojohtaminen.svg",
                "//kaaviot.finto.fi/tt/tietojohtamisen-valineet.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t1":[
                "//kaaviot.finto.fi/tt/tiedonhankinta.svg",
                "//kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t2":[
                "//kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t3":[
                "//kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t4":[
                "//kaaviot.finto.fi/tt/tiedon-jalostaminen.svg",
                "//kaaviot.finto.fi/tt/sisalto.svg",
                "//kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t5":[
                "//kaaviot.finto.fi/tt/tietoilmioita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t6":[
                "//kaaviot.finto.fi/tt/raakadata-ja-massadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t7":[
                "//kaaviot.finto.fi/tt/tiedonhallinta.svg",
                "//kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg",
                "//kaaviot.finto.fi/tt/asiakirjahallinta.svg",
                "//kaaviot.finto.fi/tt/arkistointi.svg",
                "//kaaviot.finto.fi/tt/tietoilmioita.svg",
                "//kaaviot.finto.fi/tt/tietojohtaminen.svg",
                "//kaaviot.finto.fi/tt/tietojohtamisen-valineet.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t56":[
                "//kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t57":[
                "//kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t54":[
                "//kaaviot.finto.fi/tt/tiedon-tyyppeja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t55":[
                "//kaaviot.finto.fi/tt/yhteentoimivuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t52":[
                "//kaaviot.finto.fi/tt/terminologian-kasitteita.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t53":[
                "//kaaviot.finto.fi/tt/rakenteinen-data.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t50":[
                "//kaaviot.finto.fi/tt/avoin-data-ja-omadata.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t51":[
                "//kaaviot.finto.fi/tt/tiedonhankinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t58":[
                "//kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t59":[
                "//kaaviot.finto.fi/tt/terminologian-kasitteita.svg",
                "//kaaviot.finto.fi/tt/sanasto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t138":[
                "//kaaviot.finto.fi/tt/tiedon-jalostaminen.svg",
                "//kaaviot.finto.fi/tt/nykytilan-kuvaaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t139":[
                "//kaaviot.finto.fi/tt/tietojohtamisen-valineet.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t132":[
                "//kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t133":[
                "//kaaviot.finto.fi/tt/luokitus-ja-koodisto.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t130":[
                "//kaaviot.finto.fi/tt/tiedon-muotoja.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t131":[
                "//kaaviot.finto.fi/tt/sanastot-tyypin-ja-laatimistavan-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t136":[
                "//kaaviot.finto.fi/tt/tietoturvallisuus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t137":[
                "//kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t134":[
                "//kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t135":[
                "//kaaviot.finto.fi/tt/tiedonhallinta.svg",
                "//kaaviot.finto.fi/tt/asiakirjahallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t23":[
                "//kaaviot.finto.fi/tt/tietojohtaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t22":[
                "//kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t21":[
                "//kaaviot.finto.fi/tt/rakenteinen-data.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t64":[
                "//kaaviot.finto.fi/tt/sanastot-kayttotarkoituksen-mukaan.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t27":[
                "//kaaviot.finto.fi/tt/tiedon-jalostaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t26":[
                "//kaaviot.finto.fi/tt/asiakirjahallinta.svg",
                "//kaaviot.finto.fi/tt/arkistointi.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t25":[
                "//kaaviot.finto.fi/tt/tiedonhallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t24":[
                "//kaaviot.finto.fi/tt/tietotyo.svg",
                "//kaaviot.finto.fi/tt/asiakirjahallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t29":[
                "//kaaviot.finto.fi/tt/tietojohtaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t28":[
                "//kaaviot.finto.fi/tt/tietoturvallisuus.svg",
                "//kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t129":[
                "//kaaviot.finto.fi/tt/asiakirjahallinta.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t128":[
                "//kaaviot.finto.fi/tt/lukutaidot.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t125":[
                "//kaaviot.finto.fi/tt/tiedon-sailytys-ja-havittaminen.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t124":[
                "//kaaviot.finto.fi/tt/immateriaalioikeus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t127":[
                "//kaaviot.finto.fi/tt/rekisterit.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t126":[
                "//kaaviot.finto.fi/tt/rekisterit.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t121":[
                "//kaaviot.finto.fi/tt/aineeton-paaoma.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t120":[
                "//kaaviot.finto.fi/tt/tietojohtamisen-valineet.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t123":[
                "//kaaviot.finto.fi/tt/immateriaalioikeus.svg"
            ],
            "http://urn.fi/URN:NBN:fi:au:tt:t122":[
                "//kaaviot.finto.fi/tt/tieto-paasyn-ja-kayton-ehtojen-seka-suojauksen-mukaan.svg"
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
        var $tietoButton = $('#headingTieto > .accordion-button');

        TIETO.widget.render({id: id, opened: isOpen});
        $('.panel-body').slick({
            arrows: true,
            dots: true,
            responsive: true,
            speed: '0',
            prevArrow: '<span class="glyphicon glyphicon-chevron-left"></span>',
            nextArrow: '<span class="glyphicon glyphicon-chevron-right"></span>',
        });
        $('#headingTieto > .accordion-button').on('click', function() {
            TIETO.widget.toggleLegend();
            if ($(this).hasClass('collapsed')) {
                createCookie('TIETO_WIDGET_OPEN', 0);
            } else {
                createCookie('TIETO_WIDGET_OPEN', 1);
            }
        });
    };

});
