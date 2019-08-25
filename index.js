const fs = require('fs');
const path = require('path');
(() => {
	const zips = JSON.parse(fs.readFileSync(path.resolve(__dirname, './china-city-area-zip.json')).toString());
	let refactor_zips = [];
	zips.forEach(top => {
		top.child.forEach(major => {
			major.child.forEach(minor => {
				let zip = {};
				zip.major_region = major.name;
				zip.major_id = major.id;
				zip.minor_id = minor.id;
				zip.minor_region = minor.name;
				zip.top_region = top.name;
				zip.top_id = top.id;
				refactor_zips.push(zip);
			});
		});
	});

	fs.writeFileSync(path.resolve(__dirname, './china-refactor-zips.json'), JSON.stringify(refactor_zips));
})();
