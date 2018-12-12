module.exports = {
    //创建用户信息
    "ADD_USER": "insert into userlist (uid,nick_name) values (?,?)",
    //获取iconlist图标
    "SELECT_ICON_LIST": "select * from iconlist",
    //创建分类表格
    "ADD_CLASSIFY": "insert into classify (cid,uid,type,c_name,c_icon) values (?,?,?,?,?)",
    //查询分类表格
    "SELECT_CLASSIFY": "select * from classify where (uid=? or uid='*')",
    //查找分类是否 存在
    "SELECT_ISHAS": "select * from classify where (uid=? or uid='*') and c_name=? and type=?",
    //添加账单
    "ADD_BILL": "insert into bill_list (bid,uid,timer,cid,money) values (?,?,?,?,?)",
    //按年查询账单
    "SELECT_YEAR_BILL": "select b.*,c.c_name,c_icon,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and u.uid=b.uid and date_format(b.timer,'%Y')=?",
    //按月查询账单
    "SELECT_MONTH_BILL": "select b.*,c.c_name,c_icon,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and b.uid=u.uid and date_format(b.timer,'%Y-%m')=?",
    //按年年+分类查询账单
    "SELECT_YEAR_CBILL": "select b.*,c.c_name,c_icon,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and u.uid=b.uid and date_format(b.timer,'%Y')=? and c.c_name in (?)",
    //按月+分类查询
    "SELECT_MONTH_CBILL": "select b.*,c.c_name,c_icon,type from bill_list b,classify c,userlist u where b.uid=? and b.cid=c.cid and u.uid=b.uid and date_format(b.timer,'%Y-%m')=? and c.c_name in (?)",
    //删除账单
    "DELETE_BILL": "delete from bill_list where bid=?",
}