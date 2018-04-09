module.exports = {
    'secret': 'reddictechlearningcenter'
};

module.exports.getTodaysDate = () => {
		let d = new Date();
		let today = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
		return today;
}