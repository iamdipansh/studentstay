import {NextResponse} from 'next/server'
import connectMongoDB from '@/lib/db'
import User from '@/lib/model/user'
const nodemailer = require('nodemailer');

connectMongoDB();
export async function POST(request){
   
    const data = await request.json()
    const email = data.email;
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'dipanshuikey@gmail.com',
            pass: 'gcnk tjba gvrx xkko'
        }
    });
    async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"Maddison Foo Koch 👻" <dipanshuikey@gmail.com>', // sender address
          to: email, // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world", // plain text body
          html: "<b>Hello world? please click on link to verify</b> <a href=http://localhost:3000/>click the link to verify</a>", // html body
        });
      
        console.log("Message sent: %s", info.messageId);
        // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
      }

      main().catch(console.error);

    
    const newUser = await new User(data)
    await newUser.save();

    return NextResponse.json(data);
}