const contactInformation = [
  {
    id: 0,
    whatsapp: "+2349139124809",
    phone1: "+2349139124809",
    phone2: "+2348119238643",
    email: "opubortony@gmail.com",
    address: "No. 9 Abraham Adesanya estate, Lekki, Lagos, Nigeria",
    openingHours: "MON - FRI, 9am - 5pm",
    facebook:
      "https://www.facebook.com/profile.php?id=100094794262869&mibextid=LQQJ4d",
    twitter: "https://instagram.com/moricol2022?igshid=OGQ5ZDc2ODk2ZA==",
    instagram: "https://instagram.com/moricol2022?igshid=OGQ5ZDc2ODk2ZA==",
  },
];

const aims = [
  {
    id: 1,
    picture:
      "bg-[linear-gradient(to_right_bottom,rgba(128,0,0,0.9),rgba(128,0,0,0.9)),url('/pic1.jpg')]",
    picture2: "bg-[url('/pic1.jpg')]",
    name: "CHILDREN",
    icon: "FaChildren",
    message:
      "The proper education of Children in the villages and rural settings.",
    message2:
      "Access to quality education remains a major challenge in rural communities. Our organization is committed to changing that narrative by providing children in underserved villages with the tools and support they need to succeed academically. Through book drives, school supply donations, and community-driven learning initiatives, we ensure that no child is left behind due to their location. We believe every child—regardless of where they live—deserves the opportunity to learn, grow, and reach their full potential.",
  },
  {
    id: 2,
    picture:
      "bg-[linear-gradient(to_right_bottom,rgba(128,0,0,0.9),rgba(128,0,0,0.9)),url('/pic6.jpg')]",
    picture2: "bg-[url('/pic6.jpg')]",
    name: "WOMEN",
    icon: "GrRestroomWomen",
    message:
      "Engaging women in discourses relating to key concepts and their role in building better societies.",
    message2:
      "Empowering women starts with giving them a voice and a platform to lead. We actively involve women in discussions around leadership, social transformation, and their critical roles in community development. By creating safe spaces for dialogue and training, we foster a culture where women are not only included but also equipped to shape a more just, balanced, and compassionate society. Investing in women’s growth leads to stronger families, healthier communities, and lasting change.",
  },
  {
    id: 3,
    picture:
      "bg-[linear-gradient(to_right_bottom,rgba(128,0,0,0.9),rgba(128,0,0,0.9)),url('/pic7.jpg')]",
    picture2: "bg-[url('/pic7.jpg')]",
    name: "EMPOWERMENT",
    icon: "FaFistRaised",
    message: "Empowering the Youths and Women through vocational education.",
    message2:
      "Vocational training is a powerful tool for economic independence. Our programs focus on equipping youths and women with practical skills such as tailoring, hairdressing, farming, crafts, and digital literacy. By offering hands-on learning and mentorship, we help individuals become job creators rather than job seekers. This initiative reduces unemployment, boosts self-confidence, and sets the foundation for long-term self-reliance and prosperity.",
  },
  {
    id: 4,
    picture:
      "bg-[linear-gradient(to_right_bottom,rgba(128,0,0,0.9),rgba(128,0,0,0.9)),url('/pic11.jpg')]",
    picture2: "bg-[url('/pic11.jpg')]",
    name: "AGRICULTURE",
    icon: "TbPlant",
    message:
      "Establishing agricultural farms to aid the Youths and Women to be self sustainable.",
    message2:
      "Agriculture holds immense potential for poverty reduction and food security. We establish and support community-based farms that empower women and youths to generate income and feed their families. With training in sustainable farming practices and access to tools and seeds, participants learn how to grow their own food and sell surplus produce. This not only improves livelihoods but also strengthens local economies and promotes environmental stewardship.",
  },
];

const events = [
  {
    id: 1,
    day: "05",
    month: "MAR",
    name: "Book Distribution for Students",
    location: "Kafanchan, Kaduna State",
    description:
      "In a mission to support basic education in underserved regions, our team organized a successful book distribution event in Kafanchan. Hundreds of schoolchildren received essential learning materials ranging from textbooks to writing tools. The event emphasized the importance of early education and literacy in community development. Teachers and parents expressed immense gratitude, acknowledging the boost it gave to classroom engagement and student performance. This initiative is part of our long-term goal to reduce educational inequality in rural Nigeria.",
    picture: "bg-[url('/pic9.jpg')]",
  },
  {
    id: 2,
    day: "18",
    month: "JUL",
    name: "Women’s Capacity Building Seminar",
    location: "Gboko, Benue State",
    description:
      "The Women’s Capacity Building Seminar held in Gboko was a landmark event aimed at enlightening women on their critical roles in transforming society. Through interactive sessions, guest speakers, and training workshops, women were empowered with knowledge in areas such as leadership, child development, and health awareness. This event reaffirmed our belief that when women are informed and inspired, entire communities rise. The feedback was overwhelmingly positive, with participants eager for future training opportunities.",
    picture: "bg-[url('/pic10.jpg')]",
  },
  {
    id: 3,
    day: "10",
    month: "NOV",
    name: "Youth Vocational Skills Training",
    location: "Ikare-Akoko, Ondo State",
    description:
      "To combat youth unemployment and encourage self-sufficiency, our NGO launched a vocational training program in Ikare-Akoko. Over 150 young men and women were trained in various trades such as tailoring, shoemaking, hairdressing, and soap making. Materials were provided free of charge, and many participants have already begun using their new skills to generate income. This initiative is a testament to the power of hands-on training in uplifting communities and reducing poverty.",
    picture: "bg-[url('/pic2.jpg')]",
  },
  {
    id: 4,
    day: "28",
    month: "FEB",
    name: "Rural Literacy Awareness Day",
    location: "Obubra, Cross River State",
    description:
      "The Rural Literacy Awareness Day held in Obubra aimed to promote reading culture among children and adults in the region. We partnered with local schools and community leaders to organize reading competitions, storytelling sessions, and a mobile library. Participants gained access to hundreds of books, and the joy of reading was reignited. The event fostered a deeper understanding of the role of literacy in personal growth and societal development.",
    picture: "bg-[url('/pic3.jpg')]",
  },
  {
    id: 5,
    day: "22",
    month: "MAY",
    name: "Launch of Women-Led Agricultural Cooperative",
    location: "Lafia, Nasarawa State",
    description:
      "We officially launched a women-led agricultural cooperative in Lafia to empower rural women through farming. The cooperative received seedlings, tools, and basic agribusiness training. The goal is to help women become economically independent while contributing to local food production. Early results are promising, with members reporting increased productivity and access to new markets. The cooperative stands as a model for inclusive, grassroots development.",
    picture: "bg-[url('/pic4.jpg')]",
  },
  {
    id: 6,
    day: "14",
    month: "AUG",
    name: "Community Health & Hygiene Workshop",
    location: "Ihiala, Anambra State",
    description:
      "Focusing on preventive healthcare and clean living, our NGO held a Community Health & Hygiene Workshop in Ihiala. Local residents were educated on sanitation practices, clean water usage, and disease prevention. Free hygiene kits were distributed, and community health workers were trained to continue the outreach. The workshop made a noticeable impact, especially among mothers and children, who now practice safer and healthier routines in their homes.",
    picture: "bg-[url('/pic5.jpg')]",
  },
];

const gallery = [
  { id: 1, picture: "bg-[url('/pic4.jpg')]" },
  { id: 2, picture: "bg-[url('/pic3.jpg')]" },
  { id: 3, picture: "bg-[url('/pic4.jpg')]" },
  { id: 4, picture: "bg-[url('/pic1.jpg')]" },
  { id: 5, picture: "bg-[url('/pic9.jpg')]" },
  { id: 6, picture: "bg-[url('/pic8.jpg')]" },
  { id: 7, picture: "bg-[url('/pic7.jpg')]" },
  { id: 8, picture: "bg-[url('/pic6.jpg')]" },
];

const team = [
  {
    id: 0,
    name: "Jemi Martins",
    picture: "bg-[url('/me.jpg')]",
    role: "Co-Founder",
  },
  {
    id: 1,
    name: "Matthew Davids",
    picture: "bg-[url('/me.jpg')]",
    role: "Co-Founder",
  },
  {
    id: 2,
    name: "Simi Andrews",
    picture: "bg-[url('/me.jpg')]",
    role: "Managing Director",
  },
  {
    id: 3,
    name: "Tega James",
    picture: "bg-[url('/me.jpg')]",
    role: "Volunteer",
  },
];

const blog = [
  {
    id: 1,
    day: "12",
    month: "APR",
    year: "2024",
    picture: "bg-[url('/pic5.jpg')]",
    title: "Why Rural Education is the Bedrock of National Development",
    paragraph1:
      "In many rural parts of the world, especially in developing nations, education remains a privilege rather than a right. Schools are few, understaffed, and often lack basic infrastructure. Children may walk for hours to attend classes or drop out entirely to support their families. These challenges not only hinder individual growth but also suppress the potential of entire communities. Without quality education, the cycle of poverty continues from one generation to the next.",
    paragraph2:
      "Rural education is more than just learning to read and write—it’s the seedbed of innovation, health, economic participation, and civic responsibility. When children in rural areas receive foundational learning, they become equipped to make informed decisions, seek better opportunities, and contribute meaningfully to society. Educated individuals tend to invest in their own families’ education, breaking intergenerational patterns of illiteracy.",
    paragraph3:
      "Beyond academics, schools in rural communities often serve as safe spaces. They provide children with structure, community identity, and a chance to interact beyond the boundaries of survival. Education also plays a critical role in shaping values—such as cooperation, respect, and tolerance—which are essential for peaceful and prosperous societies.",
    paragraph4:
      "One key to sustainable rural education is culturally relevant and community-driven learning. Education systems must adapt to the realities of village life, integrating agricultural knowledge, vocational skills, and local wisdom alongside academic subjects. This makes learning relatable and useful, increasing student retention and interest.",
    paragraph5:
      "Investing in rural education is one of the most effective strategies for long-term national development. It prepares communities to adapt to change, innovate, and engage with the wider world. A literate village today can become a hub of opportunity tomorrow. It's not just about building schools—it's about building futures.",
  },
  {
    id: 2,
    day: "02",
    month: "FEB",
    year: "2025",
    picture: "bg-[url('/pic4.jpg')]",
    title: "The Hidden Strength of Rural Women in Community Transformation",
    paragraph1:
      "In many rural areas, women are the unseen engines of survival. They manage households, farm the land, raise children, and often support extended families—all while navigating limited access to healthcare, education, and economic resources. Yet despite their heavy burdens, rural women remain largely excluded from decision-making processes that affect their lives and communities.",
    paragraph2:
      "Empowering women goes beyond gender equality; it’s a strategic move for building healthier, more resilient societies. Numerous studies show that when women are educated and economically active, they reinvest significantly more of their income into their families than men do. This improves nutrition, schooling, and health outcomes across entire households.",
    paragraph3:
      "Community transformation begins when women are invited into conversations about governance, education, and economic development. Their perspectives bring balance and sustainability to decision-making. Moreover, rural women tend to advocate strongly for practical, inclusive solutions—like water access, school safety, and healthcare improvements—because they live the consequences of policy gaps every day.",
    paragraph4:
      "Education, leadership training, and economic opportunities for women create ripple effects that reach every corner of a community. When women are equipped to lead cooperatives, launch small businesses, or participate in civic groups, the entire social structure begins to shift toward greater equity and stability. Men, children, and elders all benefit.",
    paragraph5:
      "Recognizing and strengthening the role of rural women is not just an ethical imperative—it’s a smart and sustainable path to community development. When we support women in their roles as leaders, caregivers, and changemakers, we unleash an unstoppable force for progress that benefits everyone.",
  },
  {
    id: 3,
    day: "12",
    month: "MAR",
    year: "2025",
    picture: "bg-[url('/pic3.jpg')]",
    title: "Reviving Agriculture Through Youth Empowerment",
    paragraph1:
      "Across Africa, agriculture has long been a pillar of life. Yet in recent decades, rural youth have increasingly distanced themselves from farming, seeing it as a symbol of poverty and hardship. Many leave their villages in search of white-collar jobs, unaware that the land they abandoned holds the keys to sustainable income, food security, and community resilience.",
    paragraph2:
      "The challenge is not in agriculture itself, but in how it is presented. Farming must be rebranded—not as back-breaking labor, but as an opportunity for innovation, entrepreneurship, and environmental stewardship. With access to the right tools, training, and technology, today’s youth can transform traditional farming into profitable and rewarding careers.",
    paragraph3:
      "Vocational agricultural education introduces young people to modern techniques: organic farming, irrigation systems, animal husbandry, greenhouse management, and digital agriculture. It also nurtures skills in budgeting, marketing, and product development. When youth see that agriculture can generate stable income and independence, it becomes a compelling alternative to urban migration or unemployment.",
    paragraph4:
      "Additionally, empowering youth in agriculture directly contributes to national food security. Local food production reduces dependence on imports, strengthens rural economies, and creates job opportunities beyond just farming—such as processing, logistics, and retail. Youth become key drivers of local development when they are active producers, not passive consumers.",
    paragraph5:
      "The revival of agriculture lies in the hands of the next generation. By engaging young minds and empowering them with knowledge and resources, we are not only safeguarding traditions but also cultivating new paths of innovation. Youth-driven agriculture is not just about feeding people—it’s about feeding hope for a self-sufficient future.",
  },
];

export { contactInformation, aims, blog, events, gallery, team };
