//FAZER P.E. PARA PARTNER, CENTRALIST AND DIRECTION

module.exports = function(sequelize, Sequelize) {
	let User = sequelize.define('centralist', {
		id: { autoIncrement: true, primaryKey: true, type: Sequelize.INTEGER },
		profile: { type: Sequelize.STRING, notEmpty: true },
		email: { type: Sequelize.STRING, validate: { isEmail: true } },
		password: { type: Sequelize.STRING, allowNull: false },
		status: { type: Sequelize.ENUM('active', 'inactive'), defaultValue: 'active' }
	})
	return User;
}