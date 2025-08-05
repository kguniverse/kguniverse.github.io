/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Qiankai Wang",
  title: "Hi all, I'm Qiankai(Kevin)",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 Full-stack \
    engineer with expertise in AI model optimization, medical imaging pipelines, \
    and cloud-integrated solutions for healthcare and scientific applications "
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kguniverse",
  linkedin: "https://www.linkedin.com/in/qiankai-wang/",
  gmail: "mailto://kkwang0805@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Full-stack \
    engineer with expertise in AI model optimization, medical imaging pipelines, \
    and cloud-integrated solutions for healthcare and scientific applications",
  skills: [
    emoji(
      "Full-Stack & Cloud-AI Integration: Proficient in building and deploying \
      full-stack applications with cloud-native tools (e.g., AWS, Kubernetes, MLFlows), \
      and integrating AI models into scalable production pipelines."
    ),
    emoji(
      "AI Model Training & Optimization: Skilled in training deep learning models \
       with PyTorch and TensorFlow, optimizing inference with ONNX Runtime and TensorRT for low-latency,\
        high-throughput applications."
    ),
    emoji(
      "Medical Imaging & Device Workflow: Capable of processing multi-format medical images (DICOM, OME-TIFF, WSI), developing AI models for histological and radiological tasks, and integrating data from MRI and remote sensing devices."
    ),
    emoji(
      "Low-Level Systems & Embedded Development: Experienced in systems programming with C++, Rust, and x86 assembly; familiar with compiler principles, embedded development, and implementing communication protocols for performance-critical applications."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "C/C++/CUDA",
      fontAwesomeClassname: "fab fa-cuttlefish"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "react",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "rust",
      fontAwesomeClassname: "fab fa-rust"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "deep learning",
      fontAwesomeClassname: "fas fa-brain"
    },
    {
      skillName: "assembly",
      fontAwesomeClassname: "fas fa-microchip"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "University of Waterloo",
      logo: require("./assets/images/waterlooLogo.png"),
      subHeader: "Master of Applied Science in Systems Design Engineering",
      duration: "September 2023 - August 2025",
      desc: "Participated in the research of Medical Image Processing and published 1 journal paper.",
      descBullets: [
        "paper published: Wang Q, Tweel J E D, Reza P H, et al. Pathology-Guided Virtual Staining Metric for Evaluation and Training[J]. arXiv preprint arXiv:2507.12624, 2025."
      ]
    },
    {
      schoolName: "Beijing University of Posts and Telecommunications",
      logo: require("./assets/images/buptLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2019 - June 2023",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Computer Architecture, Deep Learning, Communication Networks, etc.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Researcher and Software Architect",
      company: "Photomedicines Lab",
      companylogo: require("./assets/images/pmlLogo.png"),
      date: "Oct 2023 - Aug 2025",
      desc: "Led the development of AI-driven medical imaging solutions, focusing on histopathology and radiology.",
      descBullets: [
        "Developed workflows and models for H&E virtual staining and quality control systems, introducing pathology-aware image similarity methods.",
        "paper published: Wang Q, Tweel J E D, Reza P H, et al. Pathology-Guided Virtual Staining Metric for Evaluation and Training[J]. arXiv preprint arXiv:2507.12624, 2025.",
        "Built cloud-native pipelines for histology image processing with Kubernetes and AWS, enabling scalable AI workflows."
      ]
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Cambricon Technologies",
      companylogo: require("./assets/images/cambriconLogo.png"),
      date: "Aug 2022 - Oct 2023",
      desc: "Developed and optimized AI models for autonomous driving perception systems, focusing on 3D object detection and segmentation.",
      descBullets: [
        "Accelerated BEV-based 3D detection models via knowledge distillation and model optimization for edge deployment.",
        "Improved robustness of perception modules for autonomous driving under diverse traffic scenarios."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "Bytedance(TikTok)",
      companylogo: require("./assets/images/bytedanceLogo.png"),
      date: "Aug 2021 - Jul 2022",
      desc: "",
      descBullets: [
        "Designed and maintained feature rollout logic for TikTok's gray release platform, enabling safe and scalable staged deployments to millions of users across regions and devices.",
        "Automated release workflows and rollback pipelines using internal DevOps tools, reducing manual overhead and improving release reliability."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "ACM ICPC",
      subtitle: "Bronze Medalist in ACM ICPC 2020, Asia Regional Contest",
      image: require("./assets/images/icpcLogo.png"),
      imageAlt: "ICPC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "CPR and First Aid",
      subtitle: "Certified in CPR and First Aid by Red Cross",
      image: require("./assets/images/cprLogo.png"),
      imageAlt: "ICPC Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 4378559032",
  email_address: "kkwang0805@gmail.com"
};

// Twitter Section

//TODO: Bugs of loading twitter feed
const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
