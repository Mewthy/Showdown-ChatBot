﻿/**
 * Normalize string util
 */

'use strict';

const Text = Tools.get('text.js');

function normalize_init() {
	let str1 = "ÃÀÁÄÂÈÉËÊÌÍÏÎÒÓÖÔÙÚÜÛãàáäâèéëêìíïîòóöôùúüûÑÇç";
	let str2 = "AAAAAEEEEIIIIOOOOUUUUaaaaaeeeeiiiioooouuuuñcc";
	let map = {};
	for (let i = 0; i < str1.length; i++) {
		map[str1.charAt(i)] = str2.charAt(i);
	}
	return map;
}

const normalObj = normalize_init();

function normalize(str) {
	if (!str) return '';
	let res = '';
	for (let i = 0; i < str.length; i++) {
		res += normalObj[str.charAt(i)] ? normalObj[str.charAt(i)] : str.charAt(i);
	}
	return Text.toId(res);
}

module.exports = normalize;