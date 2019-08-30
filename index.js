const fs = require('fs');
const path = require('path');
(() => {
	const zips = JSON.parse(fs.readFileSync(path.resolve(__dirname, './china-city-area-zip.json')).toString());
	let refactor_zips = [];
	zips.forEach(top => {
		top.child.forEach(major => {
			major.child.forEach(minor => {
				let zip = {};
				zip.majorRegionName = major.name;
				zip.majorRegionId = major.id;
				zip.minorRegionId = minor.id;
				zip.minorRegionName = minor.name;
				zip.topRegionName = top.name;
				zip.topRegionId = top.id;
				refactor_zips.push(zip);
			});
		});
	});

	fs.writeFileSync(path.resolve(__dirname, './china-refactor-zips.json'), JSON.stringify(refactor_zips));
})();
