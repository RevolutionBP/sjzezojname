// ==UserScript==
// @name         RevolutionBP
// @namespace    http://tampermonkey.net/
// @version      1.0.1
// @description  light up the sky!
// @author       RevolutionBP
// @match        https://sjzezoj.com/*
// @icon         https://ftp.bmp.ovh/imgs/2021/12/81ce0eb68e885de0.jpg
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    $('.uoj-username').each(function(){$(this).text().includes('2021lijiaxi')&&$(this).html('RevolutionBP'); })
    $('.uoj-honor').each(function(){$(this).text().includes('2021lijiaxi')&&$(this).html('RevolutionBP'); })

    $('.uoj-username').each(function(){$(this).text().includes('RevolutionBP')&&$(this).css('color', '#f6aeb8') })
    $('.uoj-honor').each(function(){$(this).text().includes('RevolutionBP')&&$(this).css('color', '#f6aeb8')})

    $('.uoj-username').each(function(){$(this).text().includes('teacherli')&&$(this).html('lj')})
    $('.uoj-username').each(function(){$(this).text().includes('lj')&&$(this).css('color', '#635794')})

    $('.uoj-username').each(function(){$(this).text().includes('2021dubogu')&&$(this).html('Acestar')})
    $('.uoj-honor').each(function(){$(this).text().includes('2021dubogu')&&$(this).html('Acestar')})

    $('.uoj-username').each(function(){$(this).text().includes('Acestar')&&$(this).css('color', '#00BFFF')})
    $('.uoj-honor').each(function(){$(this).text().includes('Acestar')&&$(this).css('color', '#00BFFF')})

    $('.uoj-username').each(function(){$(this).text().includes('2021lijiahang')&&$(this).html('Shukuang')})
    $('.uoj-honor').each(function(){$(this).text().includes('2021lijiahang')&&$(this).html('Shukuang')})

    $('.uoj-username').each(function(){$(this).text().includes('Shukuang')&&$(this).css('color', 'Violet')})
    $('.uoj-honor').each(function(){$(this).text().includes('Shukuang')&&$(this).css('color', 'Violet')})

    $('.uoj-username').each(function(){$(this).text().includes('2021duboxi')&&$(this).html('xixike')})
    $('.uoj-honor').each(function(){$(this).text().includes('2021duboxi')&&$(this).html('xixike')})

    $('.uoj-username').each(function(){$(this).text().includes('xixike')&&$(this).css('color', '#dfd294')})
    $('.uoj-honor').each(function(){$(this).text().includes('xixike')&&$(this).css('color', '#dfd294')})

    $('.uoj-username').each(function(){$(this).text().includes('2021yunyitian')&&$(this).html('Cloudysky')})
    $('.uoj-honor').each(function(){$(this).text().includes('2021yunyitian')&&$(this).html('Cloudysky')})

    $('.uoj-username').each(function(){$(this).text().includes('2021xiefengyu')&&$(this).html('Ignotus')})
    $('.uoj-honor').each(function(){$(this).text().includes('2021xiefengyu')&&$(this).html('Ignotus')})
    $('.uoj-username').each(function(){$(this).text().includes('Ignotus') && $(this).css('color', '#000000')})
    $('.uoj-honor').each(function(){$(this).text().includes('Ignotus') && $(this).css('color', '#000000')})
    
    $('.uoj-username').each(function(){$(this).text().includes('Ignotus')&&$(this).css('color','#a938f1')});
    $('.uoj-honor').each(function(){$(this).text().includes('Ignotus')&&$(this).css('color','#a938f1')});
    
    $('.uoj-username').each(function(){$(this).text().includes('2021guoyixiao')&&$(this).html('Fideow')})
    $('.uoj-honor').each(function(){$(this).text().includes('2021guoyixiao')&&$(this).html('Fideow')})

    $('.uoj-username').each(function(){$(this).text().includes('2021liuzipei')&&$(this).html('卡哇伊沛沛')})
    $('.uoj-honor').each(function(){$(this).text().includes('2021liuzipei')&&$(this).html('卡哇伊沛沛')})

     $('.uoj-username').each(function(){$(this).text().includes('2020luorongxin')&&$(this).css('color', 'rgb(96,181,244)') })
    $('.uoj-username').each(function(){$(this).text().includes('2020luorongxin (罗荣鑫)')&&$(this).html('X</span><span class=\"uoj-username\" style=\"color:rgb(80,80,80)\">iEn1847 (罗荣鑫)'); })
    $('.uoj-username').each(function(){$(this).text().includes('2020luorongxin')&&$(this).html('X</span><span class=\"uoj-username\" style=\"color:rgb(80,80,80)\">iEn1847'); })
    $('.uoj-honor').each(function(){$(this).text().includes('2020luorongxin')&&$(this).css('color', 'rgb(96,181,244)') })
    $('.uoj-honor').each(function(){$(this).text().includes('2020luorongxin (罗荣鑫)')&&$(this).html('X</span><span class=\"uoj-username\" style=\"color:rgb(80,80,80)\">iEn1847 (罗荣鑫)'); })
    $('.uoj-honor').each(function(){$(this).text().includes('2020luorongxin')&&$(this).html('X</span><span class=\"uoj-username\" style=\"color:rgb(80,80,80)\">iEn1847'); })

    // Your code here...
})();
