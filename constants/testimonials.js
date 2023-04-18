const allTestimonials =[
   {
        id: 1,
        user: 'Dr. Michele Ross',
        designation: 'Founder',
        picture: 'Dr_Michele.webp',
        content: `I'm migrating my forms from Paperform, where I've been a user for over 4 years. Loving the software so far! I've already replaced Paperform form embeds & popups on my sites & my husband's websites with Formester forms`,
        logo: 'dr._michelelogo.webp',
        logoAlt: 'Dr. michele ross logo',
        company: 'Infused Health',
    },
    {
        id: 2,
        user: 'Jilson',
        designation: 'Organiser',
        picture: 'jilson.webp',
        content: `Formester is really easy to use and an exceptional alternative for Typeform. We use it for call for papers, lead registrations, feedback and surveys and it cannot be simpler.`,
        logo: 'vueconf.webp',
        logoAlt: 'Vue conference logo',
        company: 'Vue Conference',
    },
    {
        id: 3,
        user: 'Bogdan Arsenie',
        designation: 'CTO',
        picture: 'bogdan.webp',
        content: `At Rumie we use Formester to get feedback from our educators and
        volunteers. It's intuitive, fast and easy to share.`,
        logo: 'rumie.webp',
        logoAlt: 'Rumie logo',
        company: 'Rumie',
    },
    {
        id: 4,
        user: 'Costanza Casullo',
        designation: 'Volunteer',
        picture: 'costanza.webp',
        content: `Formester is simple enough for non-developers and sophisticated enough for developers. I'd say being able to choose between simplicity and complexity is one of this product's strengths. In addition, the founder is available to answer questions and doubts, which does not happen every day.`,
        logo: 'wato-coding-hub.webp',
        logoAlt: 'Wato coding hub logo',
        company: 'Wato Coding Hub',
    },
    {
        id: 5,
        user: 'Deanna Bugalski',
        designation: 'Founder/CEO',
        picture: 'Deanna_bugalski.webp',
        content: `I was searching for a long time for a product I could use to send newsletters and surveys to my database. I tried so many different types of software and I found many of them difficult to use and slow to learn how to operate. But Formestar was super easy to set up, and the usability is seamless! I highly recommend!`,
        logo: 'suggesterfy_logo.webp',
        logoAlt: 'suggesterfy logo',
        company: 'Suggesterfy',
    },
    {
        id: 6,
        user: 'Thibaud Martinez',
        designation: 'Organiser',
        picture: 'thibaud.webp',
        content: `I really enjoy Formester. It’s clean and straight-forward and it does well, what it is supposed to do.`,
        logo: 'tedx.webp',
        logoAlt: 'Tedx logo',
        company: 'Tedx',
    },
]

function getTwoRandomTestimonial() {
    const testimonials = allTestimonials.sort(() => 0.5 - Math.random()).slice(0, 2 )
    return testimonials;
}

export { getTwoRandomTestimonial, allTestimonials };