// ==UserScript==
// @name         sjzezojname
// @namespace    http://tampermonkey.net/
// @version      1.0.5
// @description  light up the sky!
// @author       RevolutionBP & XiEn1847
// @match        https://www.sjzezoj.com/*
// @match        https://sjzezoj.com/*
// @icon         https://ftp.bmp.ovh/imgs/2021/12/81ce0eb68e885de0.jpg
// @grant        none
// ==/UserScript==

(function() {
	'use strict';
//  usage: use $("span[class=\"uoj-username\"]:contains('MYNAME')") to find your span
//  then do .html('NEWNAME') to change name
//  then do .css('color', '#NEWCOLOR') to change color   **(recommended to change name first cuz U'll have to find the span by its css)

	$("span[class=\"uoj-username\"]:contains('2021lijiaxi')").html('RevolutionBP')
	$("span[class=\"uoj-username\"]:contains('RevolutionBP')").css('color', '#f6aeb8')
	$("a[class=\"uoj-username\"]:contains('2021lijiaxi')").html('RevolutionBP')
	$("a[class=\"uoj-username\"]:contains('RevolutionBP')").css('color', '#f6aeb8')

	$("span[class=\"uoj-username\"]:contains('teacherli')").html('lj')
	$("span[class=\"uoj-username\"]:contains('lj')").css('color', '#635794')
	$("a[class=\"uoj-username\"]:contains('teacherli')").html('lj')
	$("a[class=\"uoj-username\"]:contains('lj')").css('color', '#635794')

	$("span[class=\"uoj-username\"]:contains('2021dubogu')").html('Acestar')
	$("span[class=\"uoj-username\"]:contains('Acestar')").css('color', '#00BFFF')
	$("a[class=\"uoj-username\"]:contains('2021dubogu')").html('Acestar')
	$("a[class=\"uoj-username\"]:contains('Acestar')").css('color', '#00BFFF')


	$("span[class=\"uoj-username\"]:contains('2021lijiahang')").html('Shukuang')
	$("span[class=\"uoj-username\"]:contains('Shukuang')").css('color', 'Violet')
	$("a[class=\"uoj-username\"]:contains('2021lijiahang')").html('Shukuang')
	$("a[class=\"uoj-username\"]:contains('Shukuang')").css('color', 'Violet')

	$("span[class=\"uoj-username\"]:contains('2021duboxi')").html('xixike')
	$("span[class=\"uoj-username\"]:contains('xixike')").css('color', '#dfd294')
	$("a[class=\"uoj-username\"]:contains('2021duboxi')").html('xixike')
	$("a[class=\"uoj-username\"]:contains('xixike')").css('color', '#dfd294')

	$("span[class=\"uoj-username\"]:contains('2021yunyitian')").html('Cloudysky')
	$("a[class=\"uoj-username\"]:contains('2021yunyitian')").html('Cloudysky')

	$("span[class=\"uoj-username\"]:contains('2021xiefengyu')").html('Ignotus')
	$("span[class=\"uoj-username\"]:contains('Ignotus')").css('color', '#a938f1')
	$("a[class=\"uoj-username\"]:contains('2021xiefengyu')").html('Ignotus')
	$("a[class=\"uoj-username\"]:contains('Ignotus')").css('color', '#a938f1')

	$("span[class=\"uoj-username\"]:contains('2021guoyixiao')").html('Fideow')
	$("a[class=\"uoj-username\"]:contains('2021guoyixiao')").html('Fideow')

	$("span[class=\"uoj-username\"]:contains('2021liuzipei')").html('卡哇伊沛沛')
	$("a[class=\"uoj-username\"]:contains('2021liuzipei')").html('卡哇伊沛沛')


	$("span[class=\"uoj-username\"]:contains('2020luorongxin')").html('</span><span style=\"color:rgb(96,181,244)\">X</span><span style=\"color:rgb(80,80,80)\">iEn1847</span><span>')
	$("a[class=\"uoj-username\"]:contains('2020luorongxin')").html('</span><span style=\"color:rgb(96,181,244)\">X</span><span style=\"color:rgb(80,80,80)\">iEn1847</span><span>')


//	$("span[class=\"uoj-username\"]:contains('zhangzhiqi')").css('color', 'rgb(0,0,0)')
	$("span[class=\"uoj-username\"]:contains('zhangzhiqi')").html('<span style="color: rgb(0,0,0);">r</span><span style="color: rgb(20,20,20);">s</span><span style="color: rgb(40,40,40);">d</span><span style="color: rgb(60,60,60);">b</span><span style="color: rgb(80,80,80);">k</span><span style="color: rgb(100,100,100);">_</span><span style="color: rgb(120,120,120);">h</span><span style="color: rgb(140,140,140);">u</span><span style="color: rgb(160,160,160);">s</span><span style="color: rgb(180,180,180);">k</span><span style="color: rgb(200,200,200);">y</span>')
	$("span[class=\"uoj-username\"]:contains('zhangzhiqi')").html('<span style="color: rgb(0,0,0);">r</span><span style="color: rgb(20,20,20);">s</span><span style="color: rgb(40,40,40);">d</span><span style="color: rgb(60,60,60);">b</span><span style="color: rgb(80,80,80);">k</span><span style="color: rgb(100,100,100);">_</span><span style="color: rgb(120,120,120);">h</span><span style="color: rgb(140,140,140);">u</span><span style="color: rgb(160,160,160);">s</span><span style="color: rgb(180,180,180);">k</span><span style="color: rgb(200,200,200);">y</span>')
//	$("a[class=\"uoj-username\"]:contains('zhangzhiqi')").css('color', 'rgb(0,0,0)')
	$("a[class=\"uoj-username\"]:contains('zhangzhiqi')").html('<span style="color: rgb(0,0,0);">r</span><span style="color: rgb(20,20,20);">s</span><span style="color: rgb(40,40,40);">d</span><span style="color: rgb(60,60,60);">b</span><span style="color: rgb(80,80,80);">k</span><span style="color: rgb(100,100,100);">_</span><span style="color: rgb(120,120,120);">h</span><span style="color: rgb(140,140,140);">u</span><span style="color: rgb(160,160,160);">s</span><span style="color: rgb(180,180,180);">k</span><span style="color: rgb(200,200,200);">y</span>')
	$("a[class=\"uoj-username\"]:contains('zhangzhiqi')").html('<span style="color: rgb(0,0,0);">r</span><span style="color: rgb(20,20,20);">s</span><span style="color: rgb(40,40,40);">d</span><span style="color: rgb(60,60,60);">b</span><span style="color: rgb(80,80,80);">k</span><span style="color: rgb(100,100,100);">_</span><span style="color: rgb(120,120,120);">h</span><span style="color: rgb(140,140,140);">u</span><span style="color: rgb(160,160,160);">s</span><span style="color: rgb(180,180,180);">k</span><span style="color: rgb(200,200,200);">y</span>')
	// Your code here...
})();
