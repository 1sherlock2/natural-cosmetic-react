const {Router} = require('express');
const bcrypt = require('bcryptjs')
const router = Router();
const User = require('../models/user');
const {check, validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const config = require('config')

// ( /api/auth/	)
router.post('/register',
	[																																			//	массив который будет делать валидацию пользователей
		check('email', 'Uncorrected email').isEmail(),
		check('password', 'Minimum password size 8 symbol').isLength({min: 6})
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)															// отслеживает введенные данные в полях регистрации
			if (!errors.isEmpty()) {																					// выведем ошибку при некорректном (пустом) вводе данных при регистрации
				return res.statusCode(400).json({
					errors: errors.array(),
					message: 'Email empty, it is not correct'
				})
			}
			const {email, password} = req.body																		// получаем от пользователя данные и заносим впоследствии заносим их в нашу базу
			const candidate = await User.findOne({email})
			if (candidate) {																										// если данный пользователь существует, выводим сообщение, что такое пользователь есть
				return res.statusCode(400).json({message: 'It is user available'})
			}
			const hashedPassword = await bcrypt.hash(password, 12);				// неободимо для шифрования нашего пароля для защиты от взлома (для этого используем библиотеку "bcrypt" через менеджер пакетов "npm"
			const user = new User({
				email: email,
				password: hashedPassword,
			})
			await user.save();
			res.statusCode(201).json({message: 'User created'});
		} catch (e) {
			res.status(500).json({message: 'Error happened try again'})
		}
	})

// ( /api/auth/	)
router.post('/login',
	[
		check('email', 'Input correct email').normalizeEmail().isEmail(),
		check('password', 'Input password').exists(),
	],
	async (req, res) => {
		try {
			const errors = validationResult(req)															// отслеживает введенные данные в полях регистрации
			if (!errors.isEmpty()) {																					// выведем ошибку при некорректном (пустом) вводе данных при регистрации
				return res.statusCode(400).json({
					errors: errors.array(),
					message: 'Email empty, it is not correct entries in system'
				})
			}
			const {email,password} = req.body;																// создаем отслеживающие данные, которые будут внесены пользователем и засунуть в переменные
			const user = await User.findOne({email})													// проверяю на наличие в базе даннных введенного email:
			if (!user) {																											// если не находим
				return res.statusCode(400).json({message: 'User is not found'})
			}
			const isMatch = await bcrypt.compare(password, user.password)			// проверяю на наличие в базе данных введенного password
			if (!isMatch) {
				return res.statusCode(400).json({message: 'Password is not corrected, try again'});
			}
			const token = jwt.sign(                                           // подключаем библиотеку 'jsonwebtoken' для внесения данных в нашу базу данныхб заносим в переменную функцию (для создания объектов) в качестве параметров которая принимает 3 значения
				{userId: user.id},																			// id нашего пользователя
				config.get('jwtSecret'),																					// секретный ключ, который мы указываем в нашем файле config, передаем методом 'require'  и получаем при помощи метода 'get
				{expiresIn: '1h' }																			// через сколько данный 'token' закончит свое существование
			);
			res.json(token)																										// при соблюдении всех условий (корректном введеном email  и password) мы получаем данные в json формате в файл 'user.js, где эти данные будут занесены в общую базу данных
		} catch (e) {
			res.status(500).json({message: 'Error happened try again'})

		}
	}
)


module.exports = router

