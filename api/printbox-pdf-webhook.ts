import { createClient } from "@supabase/supabase-js";

export default async function handler(req: any, res: any) {
  const supabase = createClient(
    process.env.SUPABASE_URL!,
    process.env.SUPABASE_ANON_KEY!
  );

  const { order, projects } = req.body;

  if (!order || !projects) {
    return res.status(400).json({ message: "Incorrect payload" });
  }

  console.log(order, projects);

  try {
    const renders: any = [];

    if (projects[0]?.render?.files) {
      for (const file of projects[0].render.files) {
        renders.push({
          order_id: order,
          render_url: file.url,
        });
      }
    }

    let sgMail = '';
    console.log(renders);
      if(renders){
        sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        var message = 'Hi babu,<br><br>check<br>';
        message +=  'Regards,<br>Team Pressclub';

        const msg = {
          to: 'babu.nvjr@gmail.com',
          from: 'pressclubdev@gmail.com',
          subject: 'Pressclub - Download PDF Render Email',
          html: message,
        };

        sgMail.send(msg); 
      } else {
        sgMail = require('@sendgrid/mail');
        sgMail.setApiKey(process.env.SENDGRID_API_KEY);

        var message = 'Hi,checking pdf';

        const msg = {
          to: 'babu.nvjr@gmail.com',
          from: 'pressclubdev@gmail.com',
          subject: 'Pressclub - Download PDF Render Email',
          html: message,
        };

        sgMail.send(msg); 
      }

    const { data, error } = await supabase.from("renders").insert(renders);

    if (error) {
      console.log(error);
      return res.status(500).json({ message: error });
    }

    if (data) {
      console.log(data);
      return res.status(200).json({ message: "Renders synced." });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Error updating user" });
  }
}
