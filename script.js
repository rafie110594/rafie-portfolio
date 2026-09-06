/* ==========================================================
   RAFIE — PORTFOLIO
   Semua data di bawah ini mudah diganti sesuai kebutuhanmu.
========================================================== */

/* ---------- 1. DATA — GANTI DENGAN DATAMU SENDIRI ---------- */

const PROJECTS = [
  {
    title: "PyChan",
    description:
      "PyChan merupakan aplikasi Android berbasis Artificial Intelligence (AI) yang dikembangkan selama program Bangkit Academy untuk membantu pengguna mengetahui tingkat risiko asam lambung berdasarkan hasil pengisian kuesioner. Aplikasi ini menggunakan model Machine Learning untuk menghasilkan prediksi dalam bentuk persentase serta dilengkapi fitur AI chatbot yang memungkinkan pengguna berinteraksi dan memperoleh informasi terkait asam lambung. Model AI dan chatbot diintegrasikan ke dalam aplikasi melalui REST API menggunakan FastAPI dan di-deploy pada Google Cloud Platform (GCP) agar dapat diakses secara realtime.",
    stack: ["Kotlin", "python", "Mechine Learning", "FastApi", "Google Cloud Platform"],
    github: "https://github.com/QhodryAndra04/Capstone-Project---PhyChan",
    images: [
      "assets/Logo.png",
    ],
  },
  {
    title: "Balinese Mask Classification",
    description:
      "Balinese Mask Classification merupakan proyek skripsi berupa aplikasi mobile berbasis Artificial Intelligence (AI) yang dikembangkan untuk mengenali dan mengklasifikasikan topeng Bali berdasarkan citra. Dataset yang digunakan terdiri dari sekitar 5.600 gambar topeng Bali yang dikumpulkan dan dikelompokkan ke dalam berbagai kelas untuk melatih model menggunakan arsitektur MobileNetV3-Large. Model kemudian diintegrasikan dengan REST API menggunakan FastAPI sehingga aplikasi dapat melakukan prediksi secara realtime dan menampilkan nama topeng beserta tingkat confidence hasil klasifikasi. Sistem AI tersebut di-deploy menggunakan Google Cloud Platform (GCP) agar dapat diakses oleh aplikasi mobile.",
    stack: ["Kotlin", "Python", "JavaScript", "FastAPI", "PyTorch", "Machine Learning", "REST API", "GCP"],
    github: "https://github.com/rafie110594/balinese-mask-classification",
    images: [
      "assets/topeng.png",
    ],
  },
  {
    title: "SpotStory",
    description:
      "SpotStory merupakan aplikasi berbasis lokasi yang memungkinkan pengguna membagikan foto dan caption sebagai sebuah story, lengkap dengan informasi lokasi tempat story tersebut dibuat. Setiap story yang diunggah akan ditampilkan pada peta sehingga pengguna lain dapat melihat berbagai cerita dan foto berdasarkan lokasi geografisnya. Aplikasi ini menggabungkan konsep berbagi konten dengan teknologi location-based services untuk memberikan pengalaman menjelajahi cerita dari berbagai tempat.",
    stack: ["Kotlin", "Firebase", "Google Maps API", "Location Services", "REST API"],
    github: "https://github.com/rafie110594/spotstory",
    images: [
      "assets/screen.png",
    ],
  },
];

const SKILLS = [
  { name: "HTML", percent: 95, icon: "https://cdn.simpleicons.org/html5" },
  { name: "CSS", percent: 90, icon: "https://cdn.simpleicons.org/css3" },
  { name: "JavaScript", percent: 85, icon: "https://cdn.simpleicons.org/javascript" },
  { name: "PHP", percent: 80, icon: "https://cdn.simpleicons.org/php" },
  { name: "Python", percent: 85, icon: "https://cdn.simpleicons.org/python" },
  { name: "Kotlin", percent: 95, icon: "https://cdn.simpleicons.org/kotlin" },
  { name: "Java", percent: 96, icon: "https://cdn.simpleicons.org/openjdk" },
  { name: "MySQL", percent: 82, icon: "https://cdn.simpleicons.org/mysql" },
  { name: "React", percent: 70, icon: "https://cdn.simpleicons.org/react" },
  { name: "Node.js", percent: 75, icon: "https://cdn.simpleicons.org/nodedotjs" },
  { name: "Laravel", percent: 70, icon: "https://cdn.simpleicons.org/laravel" },
  { name: "FastAPI", percent: 80, icon: "https://cdn.simpleicons.org/fastapi" },
  { name: "Flutter", percent: 80, icon: "https://cdn.simpleicons.org/flutter" },
  { name: "PyTorch", percent: 80, icon: "https://cdn.simpleicons.org/pytorch" },
  { name: "Machine Learning", percent: 80, icon: "https://cdn.simpleicons.org/scikitlearn" },
  { name: "Computer Vision", percent: 75, icon: "https://cdn.simpleicons.org/opencv" },
  { name: "REST API", percent: 82, icon: "https://cdn.simpleicons.org/postman" },
  { name: "Git & GitHub", percent: 88, icon: "https://cdn.simpleicons.org/github" },
  { name: "Google Cloud", percent: 75, icon: "https://cdn.simpleicons.org/googlecloud" },
];

const CERTIFICATIONS = [
  {
    title: "Belajar Penerapan Mechine Learning Untuk Android",
    issuer: "Diterbitkan oleh — Dicoding Indonesia",
    image: "assets/MechineLearning.jpeg",
    link: "https://www.dicoding.com/certificates/N9ZOY0MQYPG5",
  },
  {
    title: "belajar Dasar AI",
    issuer: "Diterbitkan oleh — Dicoding Indonesia",
    image: "assets/belajardasarai.jpeg",
    link: "https://www.dicoding.com/certificates/4EXG77M1QPRL",
  },
  {
    title: "Information Technology Specialist",
    issuer: "Diterbitkan oleh — Certiport - A Pearson VUE Business",
    image: "assets/ITS.jpeg",
    link: "https://www.linkedin.com/in/muhammad-rafie-rafsanjani-harmain-5a266427a/",
  },
  {
    title: "IC3 Digital Literacy Certification",
    issuer: "Diterbitkan oleh — Certiport - A Pearson VUE Business",
    image: "assets/IC3.jpeg",
    link: "https://www.linkedin.com/in/muhammad-rafie-rafsanjani-harmain-5a266427a/",
  },
  {
    title: "Belajar Fundamental Aplikasi",
    issuer: "Diterbitkan oleh — Dicoding Indonesia",
    image: "assets/belajarFundamental.jpeg",
    link: "https://www.dicoding.com/certificates/0LZ0445WRP65",
  },
  {
    title: "Belajar Membuat Aplikasi Android Untuk Pemula",
    issuer: "Diterbitkan oleh — Dicoding Indonesia",
    image: "assets/belajarmembuataplikasi.jpeg",
    link: "https://www.dicoding.com/certificates/NVP749WEGPR0",
  },
  {
    title: "Memulai Pemrograman Dengan Kotlin",
    issuer: "Diterbitkan oleh — Dicoding Indonesia",
    image: "assets/Memulaikpemograman.jpeg",
    link: "https://www.dicoding.com/certificates/0LZ04DGLQP65",
  },
  {
    title: "Belajar Dasar GIT dengan GitHub",
    issuer: "Diterbitkan oleh — Dicoding Indonesia",
    image: "assets/belajardasargit.jpeg",
    link: "https://www.dicoding.com/certificates/07Z6499OJPQR",
  },
  {
    title: "Pengenalan ke Logika Pemrograman (Programing Logic 101)",
    issuer: "Diterbitkan oleh — Dicoding Indonesia",
    image: "assets/pengenalankelogika.jpeg",
    link: "https://www.dicoding.com/certificates/L4PQ5KKD7ZO1",
  },
  {
    title: "Memulai Dasar Pemrograman untuk Menjadi Pengembang Software",
    issuer: "Diterbitkan oleh — Dicoding Indonesia",
    image: "assets/memulaidasarpemograman.jpeg",
    link: "https://www.dicoding.com/certificates/0LZ0400J3P65",
  },
];

const ABOUT = {
  projectsCount: 15,
  aboutDescription:
    "Lulusan Rekayasa Sistem Komputer dengan minat yang kuat dalam pengembangan aplikasi mobile dan Artificial Intelligence. Telah menyelesaikan program Bangkit Academy yang diselenggarakan oleh Google bekerja sama dengan Dicoding melalui program Merdeka Belajar Kampus Merdeka (MSIB), dengan fokus pada Mobile Development selama enam bulan. Berpengalaman dalam mengembangkan aplikasi Android menggunakan Kotlin, mengintegrasikan REST API, serta menerapkan praktik pengembangan aplikasi mobile modern. Memiliki beberapa sertifikasi Google Developer yang menunjukkan pemahaman yang baik dalam pengembangan Android dan rekayasa perangkat lunak. Merupakan individu yang cepat belajar, memiliki kemampuan problem solving yang baik, serta antusias untuk berkontribusi dalam proyek teknologi inovatif sambil terus mengembangkan kemampuan teknis.",
};

/* ---------- 2. THEME TOGGLE ---------- */

const root = document.documentElement;
const themeToggle = document.getElementById("themeToggle");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  localStorage.setItem("rafie-theme", theme);
}

(function initTheme() {
  const saved = localStorage.getItem("rafie-theme");
  const prefersLight = window.matchMedia("(prefers-color-scheme: light)").matches;
  applyTheme(saved || (prefersLight ? "light" : "dark"));
})();

themeToggle.addEventListener("click", () => {
  const current = root.getAttribute("data-theme");
  applyTheme(current === "dark" ? "light" : "dark");
});

/* ---------- 3. NAVBAR: mobile menu + active link on scroll ---------- */

const navBurger = document.getElementById("navBurger");
const navMenu = document.getElementById("navMenu");

navBurger.addEventListener("click", () => navMenu.classList.toggle("open"));
navMenu.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => navMenu.classList.remove("open"))
);

const navLinks = document.querySelectorAll(".nav-menu a[data-nav]");
const sections = ["work", "skill", "about", "certification"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${entry.target.id}`
          );
        });
      }
    });
  },
  { rootMargin: "-45% 0px -50% 0px" }
);
sections.forEach((section) => navObserver.observe(section));

/* ---------- 4. TYPING ANIMATION FOR SECTION HEADINGS ---------- */

function typeInto(el, text, speed = 42) {
  el.textContent = "";
  const cursor = document.createElement("span");
  cursor.className = "cursor";
  cursor.textContent = "\u00A0";
  el.appendChild(cursor);

  let i = 0;
  const interval = setInterval(() => {
    el.insertBefore(document.createTextNode(text[i]), cursor);
    i++;
    if (i === text.length) clearInterval(interval);
  }, speed);
}

const typeObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        typeInto(el, el.dataset.typeText || el.textContent.trim());
        observer.unobserve(el);
      }
    });
  },
  { threshold: 0.6 }
);
document.querySelectorAll(".type-heading[data-type-text]").forEach((el) => {
  typeObserver.observe(el);
});

/* ---------- 5. WORK GALLERY SLIDER ---------- */

const sliderTrack = document.getElementById("sliderTrack");
const sliderDots = document.getElementById("sliderDots");
const prevBtn = document.getElementById("prevSlide");
const nextBtn = document.getElementById("nextSlide");
const projectTitle = document.getElementById("projectTitle");
const projectDesc = document.getElementById("projectDesc");
const projectStack = document.getElementById("projectStack");
const projectLink = document.getElementById("projectLink");
const projectIndexEl = document.getElementById("projectIndex");
const projectTotalEl = document.getElementById("projectTotal");

let currentProject = 0;
let currentImage = 0;

function renderProject(projectIdx, imageIdx = 0) {
  const project = PROJECTS[projectIdx];
  currentProject = projectIdx;
  currentImage = imageIdx;

  // text panel
  projectTitle.textContent = project.title;
  projectDesc.textContent = project.description;
  projectStack.innerHTML = project.stack
    .map((tech) => `<span>${tech}</span>`)
    .join("");
  projectLink.href = project.github;
  projectIndexEl.textContent = String(projectIdx + 1).padStart(2, "0");
  projectTotalEl.textContent = String(PROJECTS.length).padStart(2, "0");

  // build the deck: [peek of previous project] + [this project's real images] + [peek of next project]
  // the peeks stay put while you flip through this project's own images, so as you
  // approach the last image the next project already starts creeping into view.
  let html = "";
  if (PROJECTS.length > 1) {
    const prevProject = PROJECTS[(projectIdx - 1 + PROJECTS.length) % PROJECTS.length];
    const prevImg = prevProject.images[prevProject.images.length - 1];
    html += `<div class="slide slide-peek" data-role="prev-peek" style="background-image:url('${prevImg}')" title="${prevProject.title}"></div>`;
  }
  html += project.images
    .map((src, i) => `<div class="slide" data-role="image" data-i="${i}" style="background-image:url('${src}')"></div>`)
    .join("");
  if (PROJECTS.length > 1) {
    const nextProject = PROJECTS[(projectIdx + 1) % PROJECTS.length];
    const nextImg = nextProject.images[0];
    html += `<div class="slide slide-peek" data-role="next-peek" style="background-image:url('${nextImg}')" title="${nextProject.title}"></div>`;
  }
  sliderTrack.innerHTML = html;

  sliderDots.innerHTML = project.images
    .map((_, i) => `<button data-i="${i}" aria-label="Gambar ${i + 1}"></button>`)
    .join("");

  // clicking a peek card jumps straight to that project
  const prevPeekEl = sliderTrack.querySelector('[data-role="prev-peek"]');
  const nextPeekEl = sliderTrack.querySelector('[data-role="next-peek"]');
  if (prevPeekEl) {
    prevPeekEl.addEventListener("click", () => {
      const idx = (currentProject - 1 + PROJECTS.length) % PROJECTS.length;
      renderProject(idx, PROJECTS[idx].images.length - 1);
    });
  }
  if (nextPeekEl) {
    nextPeekEl.addEventListener("click", () => {
      const idx = (currentProject + 1) % PROJECTS.length;
      renderProject(idx, 0);
    });
  }

  goToImage(imageIdx, false);

  sliderDots.querySelectorAll("button").forEach((dot) =>
    dot.addEventListener("click", () => goToImage(Number(dot.dataset.i)))
  );
}

// positions every card relative to the active one: center card up front,
// this project's other images and the neighbouring projects' peeks fan out on each side
function layoutSlides() {
  const slides = Array.from(sliderTrack.children);
  const activeIdx = slides.findIndex(
    (slide) => slide.dataset.role === "image" && Number(slide.dataset.i) === currentImage
  );

  slides.forEach((slide, i) => {
    const offset = i - activeIdx;
    const abs = Math.abs(offset);

    slide.classList.toggle("is-active", offset === 0);

    if (abs > 2) {
      slide.style.transform = `translateX(-50%) translateX(${offset > 0 ? 140 : -140}%) scale(.7)`;
      slide.style.opacity = "0";
      slide.style.zIndex = "0";
      slide.style.pointerEvents = "none";
      return;
    }

    const translate = offset * 62; // % of card's own width per step
    const translateY = abs * 16; // px — side cards sit a touch lower, like a soft cascade
    const scale = 1 - abs * 0.1;
    slide.style.transform = `translateX(-50%) translateX(${translate}%) translateY(${translateY}px) scale(${scale})`;
    slide.style.opacity = String(1 - abs * 0.3);
    slide.style.zIndex = String(10 - abs);
    slide.style.pointerEvents = offset === 0 ? "auto" : slide.classList.contains("slide-peek") ? "auto" : "none";
  });
}

function goToImage(idx, animate = true) {
  const project = PROJECTS[currentProject];
  const clamped = (idx + project.images.length) % project.images.length;
  currentImage = clamped;
  if (!animate) sliderTrack.classList.add("no-anim");
  layoutSlides();
  sliderDots.querySelectorAll("button").forEach((dot, i) =>
    dot.classList.toggle("active", i === clamped)
  );
  if (!animate) {
    requestAnimationFrame(() => requestAnimationFrame(() => sliderTrack.classList.remove("no-anim")));
  }
}

prevBtn.addEventListener("click", () => {
  const project = PROJECTS[currentProject];
  if (currentImage === 0) {
    // go to previous project, last image
    const prevIdx = (currentProject - 1 + PROJECTS.length) % PROJECTS.length;
    renderProject(prevIdx, PROJECTS[prevIdx].images.length - 1);
  } else {
    goToImage(currentImage - 1);
  }
});

nextBtn.addEventListener("click", () => {
  const project = PROJECTS[currentProject];
  if (currentImage === project.images.length - 1) {
    const nextIdx = (currentProject + 1) % PROJECTS.length;
    renderProject(nextIdx, 0);
  } else {
    goToImage(currentImage + 1);
  }
});

// drag / swipe support
let dragStartX = null;
sliderTrack.addEventListener("pointerdown", (e) => (dragStartX = e.clientX));
sliderTrack.addEventListener("pointerup", (e) => {
  if (dragStartX === null) return;
  const delta = e.clientX - dragStartX;
  if (Math.abs(delta) > 40) {
    delta < 0 ? nextBtn.click() : prevBtn.click();
  }
  dragStartX = null;
});

renderProject(0, 0);

/* ---------- 6. SKILLS ---------- */

const skillList = document.getElementById("skillList");

skillList.innerHTML = SKILLS.map(
  (skill) => `
  <div class="skill-row">
    <div class="skill-id">
      <span class="skill-icon"><img src="${skill.icon}" alt="" onerror="this.parentElement.style.display='none'"></span>
      <span class="skill-name">${skill.name}</span>
    </div>
    <div class="skill-track">
      <div class="skill-fill" data-percent="${skill.percent}"></div>
    </div>
    <span class="skill-percent">${skill.percent}%</span>
  </div>`
).join("");

const skillObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.percent + "%";
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.4 }
);
document.querySelectorAll(".skill-fill").forEach((fill) => skillObserver.observe(fill));

/* ---------- 7. ABOUT ---------- */

document.getElementById("statProjects").textContent = ABOUT.projectsCount + "+";
document.getElementById("statCert").textContent = CERTIFICATIONS.length;
document.getElementById("aboutDesc").textContent = ABOUT.aboutDescription;

/* ---------- 8. CERTIFICATIONS ---------- */

const certGrid = document.getElementById("certGrid");
certGrid.innerHTML = CERTIFICATIONS.map(
  (cert) => `
  <article class="cert-card">
    <div class="cert-thumb" style="background-image:url('${cert.image}')"></div>
    <div class="cert-body">
      <p class="cert-title">${cert.title}</p>
      <p class="cert-issuer">${cert.issuer}</p>
      <a class="cert-link" href="${cert.link}" target="_blank" rel="noopener">
        <span>View Certification</span>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H9M17 7v8"/></svg>
      </a>
    </div>
  </article>`
).join("");

/* ---------- 9. IMAGE FALLBACKS (hero & about photo) ---------- */

function handleImageFallback(imgEl) {
  imgEl.addEventListener("error", () => imgEl.classList.add("hidden"));
}
handleImageFallback(document.getElementById("heroPhoto"));
handleImageFallback(document.getElementById("aboutPhoto"));

/* ---------- 10. FOOTER YEAR ---------- */

document.getElementById("year").textContent = new Date().getFullYear();
