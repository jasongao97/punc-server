// 引入路由
const router = require('koa-router')();
const departments = require('../controllers/departments');

// 获取所有部门信息 GET /departments
router.get('/', departments.getAll);

// 获取部门信息 GET /departments/:id
router.get('/:id', departments.getById);

module.exports = router.routes();
