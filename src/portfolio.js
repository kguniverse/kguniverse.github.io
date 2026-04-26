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
  title: "Hi all, I'm Qiankai (Kevin)",
  subTitle: emoji(
    "Software engineer building agentic AI systems, medical imaging pipelines, and the cloud-native infrastructure that takes them from research to production."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/kguniverse",
  linkedin: "https://www.linkedin.com/in/qiankai-wang/",
  gmail: "kkwang0805@gmail.com",
  googleScholar: "https://scholar.google.com/citations?user=nqoovSEAAAAJ&hl=en",
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
    "Full-stack engineer specializing in AI model optimization, medical imaging pipelines, and cloud-native infrastructure for healthcare and scientific applications.",
  skills: [
    emoji(
      "Full-Stack & Cloud-AI Integration: Build and ship production-grade full-stack applications on cloud-native stacks (AWS, Kubernetes, MLflow), wiring AI models into scalable end-to-end pipelines."
    ),
    emoji(
      "AI Model Training & Optimization: Train deep learning models in PyTorch and TensorFlow, then optimize inference with ONNX Runtime and TensorRT to hit low-latency, high-throughput targets in production."
    ),
    emoji(
      "Medical Imaging & Device Workflows: Process multi-format medical images (DICOM, OME-TIFF, WSI), develop AI models for histology and radiology tasks, and integrate data from MRI and remote sensing devices."
    ),
    emoji(
      "Low-Level Systems & Embedded Development: Systems programming in C++, Rust, and x86 assembly, with hands-on experience in compilers, embedded firmware, and communication protocols for performance-critical workloads."
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
      skillName: "golang",
      fontAwesomeClassname: "fab fa-golang"
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
      desc: "Conducted research in medical image processing and authored a first-author preprint on virtual staining evaluation.",
      descBullets: []
    },
    {
      schoolName: "Beijing University of Posts and Telecommunications",
      logo: require("./assets/images/buptLogo.png"),
      subHeader: "Bachelor of Engineering in Computer Science",
      duration: "September 2019 - June 2023",
      desc: "Graduated in the top 10% of the program. Coursework spanned Software Engineering, Web Security, Computer Architecture, Deep Learning, and Communication Networks.",
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
      role: "Software Engineer",
      company: "Hextom",
      companylogo: require("./assets/images/hextomLogo.png"),
      date: "Sep 2025 - Present",
      desc: "Building AI-powered infrastructure for the Hextom Shopify app suite, focused on agentic systems and large-scale image processing.",
      descBullets: [
        "Designed and shipped an LLM-based agent system that powers in-app automation, letting merchants drive complex workflows through natural-language commands.",
        "Built an asynchronous batch image-processing framework for high-throughput product image generation and transformation, scaled to handle production merchant traffic."
      ]
    },
    {
      role: "Researcher and Software Architect",
      company: "Photomedicines Lab",
      companylogo: require("./assets/images/pmlLogo.png"),
      date: "Oct 2023 - Aug 2025",
      desc: "Led development of AI-driven medical imaging solutions across histopathology and radiology workflows.",
      descBullets: [
        "Designed virtual H&E staining workflows and quality-control models, introducing a novel pathology-aware image similarity metric.",
        "First-author publication: Wang Q, Tweel J E D, Reza P H, et al. Pathology-Guided Virtual Staining Metric for Evaluation and Training. arXiv:2507.12624, 2025.",
        "Architected cloud-native histology image-processing pipelines on Kubernetes and AWS, enabling scalable AI workflows for downstream research."
      ]
    },
    {
      role: "Machine Learning Engineer Intern",
      company: "Cambricon Technologies",
      companylogo: require("./assets/images/cambriconLogo.png"),
      date: "Aug 2022 - Oct 2023",
      desc: "Developed and optimized perception models for autonomous-driving systems, with a focus on 3D object detection and segmentation.",
      descBullets: [
        "Accelerated BEV-based 3D detection models through knowledge distillation and inference optimization, making them viable for edge deployment.",
        "Hardened perception modules against diverse traffic scenarios, measurably improving robustness in adverse conditions."
      ]
    },
    {
      role: "Software Development Engineer Intern",
      company: "ByteDance (TikTok)",
      companylogo: require("./assets/images/bytedanceLogo.png"),
      date: "Aug 2021 - Jul 2022",
      desc: "Worked on TikTok's release infrastructure, building tooling that made staged rollouts to hundreds of millions of users safe and repeatable.",
      descBullets: [
        "Designed and maintained feature-rollout logic for TikTok's gray release platform, enabling staged deployments across regions and devices for hundreds of millions of users.",
        "Automated release and rollback pipelines on internal DevOps tooling, cutting manual overhead and improving deployment reliability."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
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
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "A few awards, certifications, and milestones I'm proud of.",

  achievementsCards: [
    {
      title: "ACM ICPC",
      subtitle: "Bronze Medalist in ACM ICPC 2020, Asia Regional Contest",
      image: require("./assets/images/icpcLogo.png"),
      imageAlt: "ICPC Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "CPR and First Aid",
      subtitle: "Certified in CPR and First Aid by Red Cross",
      image: require("./assets/images/cprLogo.png"),
      imageAlt: "Cross Red Logo",
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "Notes from side projects — architectures, retrospectives, and lessons from things I've built.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "/blog/icecore",
      title: "Building IceCore: An AI-Powered Ski Discovery Platform",
      description:
        "A retrospective on the architecture, pipeline, and AWS infrastructure behind a side project that turned a CSV of ski specs into something genuinely useful — Next.js + Python + Gemini + Terraform."
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
    "Have a project in mind or just want to say hi? My inbox is always open.",
  number: "+1 (437) 855-9032",
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
