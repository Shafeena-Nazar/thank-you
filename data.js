// ===== EDIT ME: everything on the page comes from this file =====
const SITE = {
  title: "Thank You, Team",
  name: "Shafeena Nazar",       // <- put your name here
  tenure: "Signing off with love",   // <- e.g. "2021 – 2026"
  intro: "I'm moving on, and I wanted to say thank you properly. Not in an email, but with the faces that made this place feel like home. Scroll down, find your name, and know that I meant every word.",
  signoff: "I came here to work and I'm leaving with friends. Keep shipping, keep laughing, and keep the tea breaks sacred.",
  contactLabel: "Chat with me on WhatsApp",
  contactHref: "https://wa.me/918089321966?text=Hi!%20I%20saw%20your%20thank-you%20page"
};

// photo: file name inside /images (leave out for a text-only card)
const GROUPS = [
  { id: "leaders", name: "Leadership", color: "#FFC93C", cards: [
    { names: "Anoop & Rama ma'am", role: "CEOs", wide: true,
      line: "Thank you for the opportunity, for the trust, and for letting me grow into my role here. I came in wanting to do good work and I'm leaving having learned what a good company feels like. I'll carry that with me wherever I go." }
  ]},
  { id: "mentors", name: "Mentors & managers", color: "#FF8A75", cards: [
    { names: "Vidya", role: "Team lead", photo: "vidya.jpg", line: "You were my lead, my mentor and my friend, all at once. You guided me through the work and through the harder days, and you never made me feel small for not knowing something. Whatever I do well from here carries your teaching." },
    { names: "Prasanth (PD)", role: "Manager, Web & Mobile", photo: "prasanth.jpg", line: "Whenever something broke, you were the person I trusted to fix it. Those two days of headaches that disappeared within minutes are a story I'll keep telling. Thank you for the support, always." },
    { names: "Hari & Ananthu", role: "Seniors, other teams", line: "You didn't have to help someone from another team, but you always did. Your advice saved me time and taught me more than I admitted back then. Thank you for being so generous with your experience." }
  ]},
  { id: "circle", name: "My closest circle", color: "#B9A4FF", cards: [
    { names: "Sruthi", role: "Best friend", photo: "sruthi.jpg", line: "You were the reason I looked forward to coming to office. Every day felt lighter because you were there. Wherever work takes us, you stay my best friend and my favourite part of this place." },
    { names: "Anoop R", role: "Closest friend", photo: "anoop-r.jpg", line: "My closest friend here. You made long days feel short and hard days feel okay. The office was never just an office with you around, and this friendship doesn't end on my last day." },
    { names: "Roshan", role: "My app developer", photo: "roshan.jpg", line: "The best companion a developer could ask for. Late builds, tricky bugs and small wins were all easier with you next to me. Thank you for being someone I could always count on." },
    { names: "Akshai", role: "Team mate", photo: "akshai.jpg", line: "Thank you for being my buddy through meetings, deadlines and everything in between. You always had my back, often without being asked. I couldn't have asked for a better teammate." },
    { names: "Geemon", role: "Tester", photo: "geemon.jpg", line: "Testers and developers are famous for fighting, and we did our share. Somewhere between the bug reports and the arguments, it turned into real friendship. Thank you for pushing me to build better and for being a true friend." },
    { names: "Ajay", photo: "ajay.jpg", line: "A real bro. Through the good days and the chaotic ones, you were always there. Wherever I go, this group chat is coming with me." },
    { names: "Jibin", photo: "jibin.jpg", line: "Thank you for the laughs, the leg-pulling and the loyalty. You made workdays fun. Bro for life, not just for the job." },
    { names: "Nahaz, Anok, Nuhman & Shahabaz", photo: "wedding-selfie.jpg", span: true, line: "You turned the office into a place I enjoyed coming to. Thank you for the jokes, the support and the company. You'll be hearing from me, so don't get comfortable." }
  ]},
  { id: "mandi", name: "Mandi & tea crews", color: "#FFC93C", cards: [
    { names: "Sreeraj", role: "Mandi partner", photo: "sreeraj.jpg", line: "My mandi partner. Lunch with you was the best break of the day, and it won't taste the same without you. I'm already planning the next one." },
    { names: "Justin", role: "Mandi partner", photo: "justin.jpg", line: "Partner in every mandi plan, and always up for it. Thank you for the food, the laughs and the good company." },
    { names: "Sajin, Anju, Ancy, Ghanasyam, Rajesh & Midhun Mathew", role: "The tea crew", line: "The best meetings I ever attended had no agenda. Thank you for the tea, the chats and the breaks that kept me going." }
  ]},
  { id: "it", name: "The IT crew", color: "#8FC2FF", cards: [
    { names: "Jose, Vaishakan & Alwin", role: "IT admins", line: "The real heroes behind every \"it's working now.\" Thank you for the quick fixes, the patience, and for never judging my \"I swear I didn't touch anything.\" This place runs because of you." }
  ]},
  { id: "vibes", name: "Office vibes & juniors", color: "#9EE493", cards: [
    { names: "Vishnu Raj & Arun R K", role: "Friends", line: "You brought the office vibes. With you around, the workplace felt like somewhere people wanted to be. Thank you for the energy and the good times." },
    { names: "Rashma, Vishal & Aditya", role: "Juniors, same team", line: "You brought fresh energy to the team every day, and I loved working alongside you. Aditya, thank you for the sisterhood and for keeping my bugs honest. You're all going to do wonderfully, so keep going." }
  ]},
  { id: "everyone", name: "And everyone else", color: "#FF8FB1", cards: [
    { names: "To everyone I couldn't fit on this page", role: "With love, from Shafeena", wide: true,
      line: "To the colleagues who shared a hello in the corridor, a seat at lunch, a laugh, or a bit of help when I needed it, and to anyone I forgot to name: this list could never hold everyone, but every one of you is part of my story here. Thank you for making this place feel like home." }
  ]}
];

const GALLERY = [
  { photo: "web-mobile-team.jpg", caption: "Web & Mobile, the whole gang" },
  { photo: "ucp-team.jpg", caption: "Team UCP" },
  { photo: "ladies-web-mobile.jpg", caption: "The ladies of Web & Mobile" }
];
