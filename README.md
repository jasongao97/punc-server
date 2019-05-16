# 员工考勤系统后端 Punc

Node.js | Koa | passport | mysql | knex | objection

# 接口

### 部门

获取所有部门
GET /departments

获取部门
GET /departments/:id

修改部门主管
PUT /departments/:id/director

### 员工

新建员工
POST /employees

修改员工信息
PUT /employees/:id

删除员工
DELETE /employees/:id

获取员工班次
GET /employees/:id/arrangements

修改员工班次
PUT /employees/:id/arrangements