import { Resend } from 'resend';

const apiKey = process.env.API_KEY;

const resend = new Resend(apiKey);

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'marcinhojazz@gmail.com',
  subject: 'Hello World',
  html: '<p>Email de teste com Resend <strong>first email</strong>!</p>'
})
.then(response => {
  console.log(response);
  console.log("Deu certo!");
})
.catch(error => {
  console.log("Deu errado.")
})