import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, CheckCircle2, Send } from "lucide-react";
import { toast } from "sonner";
import { profile, mailtoHireMe } from "@/lib/portfolio";
import emailjs from "@emailjs/browser";

const info = [
  { icon: Mail, label: "Email", value: profile.email, href: mailtoHireMe },
  { icon: MapPin, label: "Location", value: profile.location },
  { icon: CheckCircle2, label: "Availability", value: "Open for Opportunities" },
  { icon: Send, label: "Response Time", value: "Within 24 Hours", },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "", mobile: "" });
  const [sending, setSending] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  // const formattedMessage = `
  // Subject: ${form.subject}

  // Hi Sanjay,
  // I hope you're doing well. 

  // ${form.message}

  // Contact Information:
  // Name: ${form.name}
  // Email: ${form.email} 

  // Best regards,
  // ${form.name}
  // `;

  // const submit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setSending(true);
  //   try {
  //     const res = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
  //       method: "POST",
  //       headers: { "Content-Type": "application/json", Accept: "application/json" },
  //       body: JSON.stringify({
  //         _subject: form.subject,
  //         message: formattedMessage,
  //         _captcha: "false",
  //       }),
  //     });
  //     if (!res.ok) throw new Error("send failed");
  //     toast.success("Message sent!", {
  //       description: "Thanks for reaching out — Sanjay will get back to you soon.",
  //     });
  //     setForm({ name: "", email: "", subject: "", message: "" });
  //   } catch {
  //     toast.error("Could not send message", {
  //       description: "Please try again or email me directly.",
  //     });
  //   } finally {
  //     setSending(false);
  //   }
  // };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // try {
    //   await emailjs.send(
    //     "service_1z7n25j", // Your Service ID
    //     "template_icqmn5o", // Your Template ID
    //     {
    //       subject: form.subject,
    //       name: form.name,
    //       email: form.email,
    //       message: form.message,
    //       mobile: form.mobile,
    //     },
    //     "S4BvgHtzHRX7CtuwA" // Your Public Key
    //   );

    //   toast.success("Message sent!", {
    //     description: "Thanks for reaching out — Sanjay will get back to you soon.",
    //   });

    //   setForm({
    //     name: "",
    //     email: "",
    //     subject: "",
    //     message: "",
    //     mobile: "",
    //   });

    // } 
    try {
      const templateParams = {
        subject: form.subject,
        name: form.name,
        email: form.email,
        mobile: form.mobile,
        message: form.message,
      };

      await Promise.all([

        // 1. Send notification email to you
        emailjs.send(
          "service_1z7n25j", // Your Service ID
          "template_0hdbecj", // Your Template ID
          templateParams,
          "S4BvgHtzHRX7CtuwA" // Your Public Key
        ),

        // 2. Send auto-reply to visitor
        emailjs.send(
          "service_1z7n25j",
          "template_alsa863", // A separate template for auto-reply
          templateParams,
          "S4BvgHtzHRX7CtuwA"
        ),
      ]);

      // 3. Show success only after both emails are sent
      toast.success("Message sent successfully!", {
        description: `A confirmation email has been sent to ${form.email}.`,
        duration: 4000,
      });

      setShowSuccessModal(true);
      setSubmittedEmail(form.email);

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
        mobile: "",
      });
    }
    catch (error) {
      console.error(error);

      toast.error("Could not send message", {
        description: "Please try again.",
      });
    } finally {
      setSending(false);
    }
  };

  const field =
    "w-full rounded-xl border-[3px] border-ink bg-surface px-4 py-3 text-sm outline-none transition-shadow placeholder:text-muted-foreground focus:shadow-[3px_3px_0_0_var(--ink)]";


  return (
    <section id="contact" className="relative py-12">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-brand-glow">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">Let's Work Together</h2>
        </motion.div>

        <div className="mt-12 grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 lg:col-span-2"
          >
            {info.map((item) => (
              <a
                key={item.label}
                href={item.href ?? undefined}
                target={item.href ? "_blank" : undefined}
                rel="noreferrer"
                className="glass flex items-center gap-4 rounded-2xl p-5 transition-transform hover:-translate-y-1"
              >
                <span
                  className="grid h-12 w-12 shrink-0 place-items-center rounded-xl text-white"
                  style={{ background: "var(--gradient-brand)" }}
                >
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-xs uppercase tracking-wider text-muted-foreground">
                    {item.label}
                  </p>
                  <p className="font-medium">{item.value}</p>
                </div>
              </a>
            ))}

            <div className="glass rounded-2xl p-5">
              <h4 className="font-bold">Why Work With Me?</h4>

              <div className="mt-4 space-y-2 text-sm">
                <p>✅ 2+ Years Experience</p>
                <p>✅ 6+ Projects Delivered</p>
                <p>✅ Full Stack Development</p>
                <p>✅ ASP.NET Core & Angular Specialist</p>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={submit}
            className="glass space-y-4 rounded-3xl p-7 lg:col-span-3"
          >
            <div className="mb-2">
              <h3 className="text-2xl font-bold">
                Let's Build Something Amazing 🚀
              </h3>

              <p className="mt-2 text-xs text-muted-foreground">
                Looking for a Full Stack Developer for your next project,
                freelance work, or full-time opportunity?
                Send me a message and I'll get back to you shortly.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 mt-4">
              <input
                required
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={field}
              />
              <input
                required
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={field}
              />
            </div>
            <input
              required
              type="tel"
              pattern="[0-9]{10}"
              maxLength={10}
              placeholder="Your Mobile Number"
              value={form.mobile}
              onChange={(e) => setForm({ ...form, mobile: e.target.value.replace(/\D/g, "") })}
              className={field}
            />
            <input
              required
              placeholder="Subject"
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
              className={field}
            />
            <textarea
              required
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${field} resize-none`}
            />

            <p className="text-xs text-center text-muted-foreground">
              🔒 Your information is secure and will only be used to respond to your inquiry.
            </p>

            <button
              type="submit"
              disabled={sending}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border-[3px] border-ink px-6 py-4
              text-base font-bold text-white transition-all hover:scale-[1.02] hover:shadow-xl disabled:opacity-60"
              style={{
                background: "var(--gradient-brand)",
                boxShadow: "var(--shadow-glow)",
              }}>

              <Send className="h-5 w-5" />

              {sending ? "Sending Message..." : "Send Message"}
            </button>

          </motion.form>
        </div>
      </div>
      {showSuccessModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">

          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-md rounded-3xl bg-white p-8 shadow-2xl"
          >
            <div className="flex justify-center">

              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-100">

                <CheckCircle2
                  size={50}
                  className="text-green-600"
                />

              </div>

            </div>

            <h2 className="mt-6 text-center text-2xl font-bold">
              Thank You!
            </h2>

            <p className="mt-3 text-center text-gray-600">
              Your message has been sent successfully.
            </p>

            <div className="mt-6 rounded-xl bg-gray-50 p-4">

              <p className="text-sm text-gray-500">
                Confirmation Email
              </p>

              <p className="font-semibold break-all">
                {submittedEmail}
              </p>

            </div>

            <div className="mt-6 space-y-3 text-sm text-gray-600">

              <p>
                ✅ I've successfully received your message.
              </p>

              <p>
                📧 A confirmation email has been sent to your inbox.
              </p>

              <p>
                ⏳ I'll review your inquiry and respond within <strong>24 hours</strong>.
              </p>

              <p className="rounded-lg border border-yellow-200 bg-yellow-50 p-3 text-yellow-800">
                <strong>Can't find the email?</strong>
                <br />
                Please check your <strong>Spam</strong>, <strong>Junk</strong>, or <strong>Promotions</strong> folder.
              </p>

            </div>

            <button
              onClick={() => setShowSuccessModal(false)}
              className="mt-8 w-full rounded-xl bg-gradient-to-r from-indigo-600 to-violet-600 py-3 font-semibold text-white transition hover:scale-[1.02]"
            >
              Back to Portfolio
            </button>

          </motion.div>

        </div>
      )}
    </section>


  );
}
