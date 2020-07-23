const { Router } = require("express");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const User = require("../models/User");
const { check, validationResult } = require("express-validator");

const authRouter = Router();

authRouter.post(
    '/register', 
    [
        check('email', 'Некорректный е-мэйл').isEmail(),
        check('password', 'Некорректный пароль! Минимальная длина 6 символов!').isLength({ min: 6 })
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при регистрации! Повторите попытку.'
            });
            const { email, password, fullname, city, country } = req.body;
            
            const person = await User.findOne({ email });
            if (person) return res.status(400).json({ message: 'Такой пользователь уже существует..!' });
            
            const hashedPass = await bcrypt.hash(password, 12);
            const user = new User({ email, password: hashedPass, fullname, city, country });
            
            await user.save();

            res.status(201).json({ message: 'Пользователь создан!' })
        } catch (err) {
            res.status(500).json({ message: 'Что-то пошло не так..(((' });
        }
    }
);

authRouter.post(
    '/login',
    [
        check('email', 'Введите корректный е-мэйл!').normalizeEmail().isEmail(),
        check('password', 'Введите корректный пароль!').exists()
    ],
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) return res.status(400).json({
                errors: errors.array(),
                message: 'Некорректные данные при авторизации! Повторите попытку.'
            });
            const { email, password } = req.body;
            const user = await User.findOne({ email });
            if (!user) return res.status(400).json({ message: 'Пользователь не найден! Попробуйте снова.' });

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) return res.status(400).json({ message: 'Неверный пароль! Попробуйте снова.' });

            const token = jwt.sign(
                { userId: user.id },
                config.get('jwtSecret'),
                { expiresIn: '2h' }
            );
            
            res.json({ token, userId: user.id });
        } catch (err) {
            res.status(500).json({ message: 'Что-то пошло не так..((' });
        }
    }
);

module.exports = authRouter;