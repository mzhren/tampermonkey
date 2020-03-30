// ==UserScript==
// @name         京东辅助脚本，用于比价返利
// @namespace    https://www.jd.com/
// @version      0.1
// @description  点击去到京东比较和返利页面
// @author       http://www.mzh.ren/
// @match        https://*.jd.com/*
// @exclude      https://union.jd.com/*
// ==/UserScript==
/* jshint -W097 */
'use strict';
(function () {

    function create_link(text, href, position) {
        if (!position) {
            position = 0;
        }

        return $('<a>').css({
            'position': 'fixed',
            'top': (100 + 60 * position) + 'px',
            'left': '20px',
            'z-index': '10000',
            'padding': '10px',
            'border': '1px red solid',
            'background': 'red',
            'color': 'white'
        }).text(text).attr({ 'href': href, 'target': '_blank' });
    }

    var doc = window.top.document;
    var item_pathname = document.location.pathname;
    var item_url = doc.location.protocol + "//" + doc.location.hostname + item_pathname;
    var item_id = item_pathname.replace('/', '').replace('.html', '');
    // mobile端
    item_id = item_id.replace('product/', '');

    var jd_union_base_url = "https://union.jd.com/proManager/index?pageNo=1&keywords=";
    var jd_promo_url = jd_union_base_url + item_id;

    // 慢慢买比价
    var mmb_base_url = "http://tool.manmanbuy.com/historyLowest.aspx?url=";
    var mmb_url = mmb_base_url + encodeURIComponent(item_url);

    // 购物党比价
    var gwd_base_url = 'https://www.gwdang.com/trend?url=';
    var gwd_url = gwd_base_url + encodeURIComponent(item_url);


    var $link1 = create_link('返利', jd_promo_url);
    var $link2 = create_link('慢慢买比价', mmb_url, 1);
    var $link3 = create_link('购物党比价', gwd_url, 2);

    $('body').append($link1, $link2, $link3);
})();

