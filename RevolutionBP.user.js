// ==UserScript==
// @name         sjzezojname
// @namespace    http://tampermonkey.net/
// @version      1.0.4
// @description  light up the sky!
// @author       RevolutionBP & XiEn1847
// @match        https://www.sjzezoj.com/*
// @match        https://sjzezoj.com/*
// @icon         https://ftp.bmp.ovh/imgs/2021/12/81ce0eb68e885de0.jpg
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
//  usage: use $("span[style=\"font-weight: 800; color:#007bff\"]:contains('MYNAME')") to find your span
//  then do .html('NEWNAME') to change name
//  then do .css('color', '#NEWCOLOR') to change color   **(recommended to change name first cuz U'll have to find the span by its css)

	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('2021lijiaxi')").html('RevolutionBP')
	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('RevolutionBP')").css('color', '#f6aeb8')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('2021lijiaxi')").html('RevolutionBP')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('RevolutionBP')").css('color', '#f6aeb8')

	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('teacherli')").html('lj')
	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('lj')").css('color', '#635794')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('teacherli')").html('lj')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('lj')").css('color', '#635794')

	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('2021dubogu')").html('Acestar')
	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('Acestar')").css('color', '#00BFFF')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('2021dubogu')").html('Acestar')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('Acestar')").css('color', '#00BFFF')


	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('2021lijiahang')").html('Shukuang')
	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('Shukuang')").css('color', 'Violet')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('2021lijiahang')").html('Shukuang')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('Shukuang')").css('color', 'Violet')

	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('2021duboxi')").html('xixike')
	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('xixike')").css('color', '#dfd294')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('2021duboxi')").html('xixike')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('xixike')").css('color', '#dfd294')

	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('2021yunyitian')").html('Cloudysky')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('2021yunyitian')").html('Cloudysky')

	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('2021xiefengyu')").html('Ignotus')
	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('Ignotus')").css('color', '#a938f1')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('2021xiefengyu')").html('Ignotus')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('Ignotus')").css('color', '#a938f1')

	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('2021guoyixiao')").html('Fideow')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('2021guoyixiao')").html('Fideow')

	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('2021liuzipei')").html('卡哇伊沛沛')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('2021liuzipei')").html('卡哇伊沛沛')


	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('2020luorongxin')").html('</span><span style=\"color:rgb(96,181,244)\">X</span><span style=\"color:rgb(80,80,80)\">iEn1847</span><span>')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('2020luorongxin')").html('</span><span style=\"color:rgb(96,181,244)\">X</span><span style=\"color:rgb(80,80,80)\">iEn1847</span><span>')


//	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('zhangzhiqi')").css('color', 'rgb(0,0,0)')
	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('zhangzhiqi')").html('<span style="color: rgb(0,0,0);">r</span><span style="color: rgb(20,20,20);">s</span><span style="color: rgb(40,40,40);">d</span><span style="color: rgb(60,60,60);">b</span><span style="color: rgb(80,80,80);">k</span><span style="color: rgb(100,100,100);">_</span><span style="color: rgb(120,120,120);">h</span><span style="color: rgb(140,140,140);">u</span><span style="color: rgb(160,160,160);">s</span><span style="color: rgb(180,180,180);">k</span><span style="color: rgb(200,200,200);">y</span>')
	$("span[style=\"font-weight: 800; color:#007bff\"]:contains('zhangzhiqi')").html('<span style="color: rgb(0,0,0);">r</span><span style="color: rgb(20,20,20);">s</span><span style="color: rgb(40,40,40);">d</span><span style="color: rgb(60,60,60);">b</span><span style="color: rgb(80,80,80);">k</span><span style="color: rgb(100,100,100);">_</span><span style="color: rgb(120,120,120);">h</span><span style="color: rgb(140,140,140);">u</span><span style="color: rgb(160,160,160);">s</span><span style="color: rgb(180,180,180);">k</span><span style="color: rgb(200,200,200);">y</span>')
//	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('zhangzhiqi')").css('color', 'rgb(0,0,0)')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('zhangzhiqi')").html('<span style="color: rgb(0,0,0);">r</span><span style="color: rgb(20,20,20);">s</span><span style="color: rgb(40,40,40);">d</span><span style="color: rgb(60,60,60);">b</span><span style="color: rgb(80,80,80);">k</span><span style="color: rgb(100,100,100);">_</span><span style="color: rgb(120,120,120);">h</span><span style="color: rgb(140,140,140);">u</span><span style="color: rgb(160,160,160);">s</span><span style="color: rgb(180,180,180);">k</span><span style="color: rgb(200,200,200);">y</span>')
	$("a[style=\"font-weight: 800; color:#007bff\"]:contains('zhangzhiqi')").html('<span style="color: rgb(0,0,0);">r</span><span style="color: rgb(20,20,20);">s</span><span style="color: rgb(40,40,40);">d</span><span style="color: rgb(60,60,60);">b</span><span style="color: rgb(80,80,80);">k</span><span style="color: rgb(100,100,100);">_</span><span style="color: rgb(120,120,120);">h</span><span style="color: rgb(140,140,140);">u</span><span style="color: rgb(160,160,160);">s</span><span style="color: rgb(180,180,180);">k</span><span style="color: rgb(200,200,200);">y</span>')
	// Your code here...
})();
