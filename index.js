import { Resend } from 'resend';

const apiKey = process.env.API_KEY;

const resend = new Resend(apiKey);

resend.emails.send({
  from: 'onboarding@resend.dev',
  to: 'marcinhojazz@gmail.com',
  subject: 'Enviando Emails com Resend + BUN',
  html: '<p>Email de teste com<strong>Resend + BUN</strong>!</p>'
})
.then(response => {
  console.log(response);
  console.log("Deu certo!");
})
.catch(error => {
  console.log("Deu errado.")
})