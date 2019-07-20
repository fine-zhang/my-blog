var visitorDao = require('../dao/visitorDao')
var nodemailer = require('nodemailer');


function sendEmail (name,email) {

    
    var config = {
        host: 'smtp.163.com', 
        port: 465,
        auth: {
            user: 'zh_zheng_h@163.com', //刚才注册的邮箱账号
            pass: '749813zrz'  //邮箱的授权码，不是注册时的密码
        }
    };
    var transporter = nodemailer.createTransport(config);
    var mail = {
        // 发件人
        from: '张正好。<zh_zheng_h@163.com>',
        // 主题
        subject: '张正好。博客的验证邮件',
        // 收件人
        to: email,
        // 邮件内容，HTML格式
        text: `尊敬的${name}，您好！点击链接即可验证您在张正好。个人博客的
            评论邮箱,http://94.191.61.155:8081/insertVisitor?code=749813&email=${email}` 
    }
    transporter.sendMail(mail, function(error,info){
        
        if(error) {
        console.log(error);
        }
    });
}


module.exports.sendEmail = sendEmail;

// var name = '1'
// var email = '846922022@qq.com'

// sendEmail(name,email)


// var nodemailer = require('nodemailer');

// 创建一个SMTP客户端配置
// var config = {
//     host: 'smtp.163.com',
//     port: 25,
//     auth: {
//         user: 'zh_zheng_h@163.com', //刚才注册的邮箱账号
//         pass: '749813zrz'  //邮箱的授权码，不是注册时的密码
//     }
// };

// // 创建一个SMTP客户端对象
// var transporter = nodemailer.createTransport(config);

// // 发送邮件
// module.exports = function (mail) {
//     transporter.sendMail(mail, function (error, info) {
//         if (error) {
//             return console.log(error);
//         }
//         console.log('mail sent:', info);
//     });
// };