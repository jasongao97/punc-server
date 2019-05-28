// 引入路由
const router = require('koa-router')();
const employees = require('../controllers/employees');

// 获取所有员工信息 GET /employees
router.get('/', employees.getAll);

// 获取员工信息 GET /employees/:id
router.get('/:id', employees.getById);

// 获取员工班次信息 GET /employees/:id/arrangements
router.get('/:id/arrangements', employees.getArrangements);

// 添加员工 POST /employees/add
router.post('/add', employees.post);

// 修改员工信息 PUT /employees/update
router.put('/update', employees.putDirector);

// 删除员工 DELETE /employees/del/:id
router.delete('/del/:id', employees.deleteById);

module.exports = router.routes();
