// 引入路由
const router = require('koa-router')();
const departments = require('../controllers/departments');

// 获取所有部门信息 GET /departments
router.get('/', departments.getAll);

// 获取部门信息 GET /departments/:id
router.get('/:id', departments.getById);

// 添加部门 POST /departments/add
router.post('/add', departments.post);

// 修改部门主管 PUT /departments/:id/director
router.put('/:id/director', departments.putDirector);

// 删除部门 DELETE /departments/del/:id
router.delete('/del/:id', departments.deleteById);

module.exports = router.routes();
