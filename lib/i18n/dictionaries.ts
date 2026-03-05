export type Locale = "en" | "es"

export const dictionaries = {
  en: {
    header: {
      portfolio: "// portfolio",
    },
    hero: {
      label: "Luis Monzón / 2026",
      title1: "Luis",
      title2: "Monzón",
      subtitle:
        "Exploring the intersection between code, matter, and spirit.",
    },
    studies: {
      cs: {
        title: "Computer Science",
        description:
          "Algorithms, systems design, and the formal foundations of computation. From lambda calculus to distributed systems.",
        topics: ["Algorithms", "Systems", "PL Theory", "Networks"],
      },
      physics: {
        title: "Physics",
        description:
          "Understanding nature through mathematical frameworks. Classical mechanics to quantum field theory.",
        topics: ["Quantum", "Stat Mech", "Relativity", "Optics"],
      },
      math: {
        title: "Mathematics",
        description:
          "Pure abstraction and structure. Exploring topology, algebra, and the language underlying all sciences.",
        topics: ["Topology", "Algebra", "Analysis", "Logic"],
      },
      theology: {
        title: "Theology",
        description:
          "Systematic and historical theology. The intersection of faith, philosophy, and textual criticism.",
        topics: ["Patristics", "Ethics", "Hermeneutics"],
      },
    },
    experience: {
      title: "Experience",
      label: "Dates",
      items: [
        {
          year: "Jul 2025 — Present",
          role: "Software Architect",
          org: "Banrural",
          description:
            "Led a team of 15 in system modernization initiatives. Implemented quality metrics that reduced software bugs by 20%, enhancing overall product reliability.",
        },
        {
          year: "May 2024 — Present",
          role: "CTO & Co-Founder",
          org: "Neovol",
          description:
            "Driving technology strategy, product development, and scalable SaaS solutions. Building high-performance teams and delivering secure, innovative platforms.",
        },
        {
          year: "Jul 2023 — Jun 2025",
          role: "Systems Analyst II",
          org: "Banrural",
          description:
            "Drafted SRS and technical specifications. Designed system architectures, managed team resources, and proposed cutting-edge technologies for development.",
        },
        {
          year: "Aug 2021 — Jun 2023",
          role: "Software Developer I",
          org: "Banrural",
          description:
            "Developed SOAP and RESTful microservices with IBM Integration Bus and .NET. Created stored procedures with Sybase and SQL Server, and built ETL processes.",
        },
        {
          year: "Apr 2020 — Present",
          role: "Monitoring & Digitization Technician",
          org: "Municipalidad de Guatemala",
          description:
            "Designing and developing software for internal process automation using Python, C# (.NET Core), and SQL Server.",
        },
        {
          year: "Jun 2024 — Present",
          role: "Training Facilitator",
          org: "Guatemala Próspera",
          description:
            "Delivered the 'Ethics and Leadership in 8 Steps' diploma, developing ethical leadership skills among professionals and emerging leaders.",
        },
      ],
    },
    focus: {
      title: "Current Focus",
      items: [
        { label: "Software architecture & system design", type: "studying" },
        { label: "Scalable SaaS platforms at Neovol", type: "building" },
        { label: "Process automation with Python & .NET", type: "coding" },
        { label: "Ethics and leadership education", type: "teaching" },
      ],
    },
    contact: {
      label: "Contact",
    },
    footer: {
      left: "Built with precision",
      right: "MMXXVI",
    },
  },
  es: {
    header: {
      portfolio: "// portafolio",
    },
    hero: {
      label: "Luis Monzón / 2026",
      title1: "Luis",
      title2: "Monzón",
      subtitle:
        "Explorando la interseccion entre el codigo, la materia y el espiritu.",
    },
    studies: {
      cs: {
        title: "Ciencias de la Computacion",
        description:
          "Algoritmos, diseno de sistemas y los fundamentos formales de la computacion. Del calculo lambda a los sistemas distribuidos.",
        topics: ["Algoritmos", "Sistemas", "Teoria PL", "Redes"],
      },
      physics: {
        title: "Fisica",
        description:
          "Comprender la naturaleza mediante marcos matematicos. De la mecanica clasica a la teoria cuantica de campos.",
        topics: ["Cuantica", "Mec. Est.", "Relatividad", "Optica"],
      },
      math: {
        title: "Matematicas",
        description:
          "Abstraccion pura y estructura. Explorando topologia, algebra y el lenguaje subyacente a todas las ciencias.",
        topics: ["Topologia", "Algebra", "Analisis", "Logica"],
      },
      theology: {
        title: "Teologia",
        description:
          "Teologia sistematica e historica. La interseccion de fe, filosofia y critica textual.",
        topics: ["Patristica", "Etica", "Hermeneutica"],
      },
    },
    experience: {
      title: "Experiencia",
      label: "Fechas",
      items: [
        {
          year: "Jul 2025 — Presente",
          role: "Arquitecto de Software",
          org: "Banrural",
          description:
            "Lidere un equipo de 15 personas en iniciativas de modernizacion de sistemas. Implemente metricas de calidad que redujeron los errores de software en un 20%.",
        },
        {
          year: "May 2024 — Presente",
          role: "CTO y Cofundador",
          org: "Neovol",
          description:
            "Dirigiendo estrategia tecnologica, desarrollo de producto y soluciones SaaS escalables. Construyendo equipos de alto rendimiento y plataformas seguras e innovadoras.",
        },
        {
          year: "Jul 2023 — Jun 2025",
          role: "Analista de Sistemas II",
          org: "Banrural",
          description:
            "Redaccion de SRS y especificaciones tecnicas. Diseno de arquitecturas de sistemas, gestion de recursos del equipo y propuesta de tecnologias de vanguardia.",
        },
        {
          year: "Ago 2021 — Jun 2023",
          role: "Desarrollador de Software I",
          org: "Banrural",
          description:
            "Desarrollo de microservicios SOAP y RESTful con IBM Integration Bus y .NET. Creacion de procedimientos almacenados con Sybase y SQL Server, y procesos ETL.",
        },
        {
          year: "Abr 2020 — Presente",
          role: "Tecnico en Monitoreo y Digitalizacion",
          org: "Municipalidad de Guatemala",
          description:
            "Diseno y desarrollo de software para automatizacion de procesos internos usando Python, C# (.NET Core) y SQL Server.",
        },
        {
          year: "Jun 2024 — Presente",
          role: "Facilitador de Formacion",
          org: "Guatemala Próspera",
          description:
            "Imparti el diplomado 'Etica y Liderazgo en 8 Pasos', desarrollando habilidades de liderazgo etico entre profesionales y lideres emergentes.",
        },
      ],
    },
    focus: {
      title: "Enfoque Actual",
      items: [
        { label: "Arquitectura de software y diseno de sistemas", type: "estudiando" },
        { label: "Plataformas SaaS escalables en Neovol", type: "construyendo" },
        { label: "Automatizacion de procesos con Python y .NET", type: "programando" },
        { label: "Educacion en etica y liderazgo", type: "ensenando" },
      ],
    },
    contact: {
      label: "Contacto",
    },
    footer: {
      left: "Construido con precision",
      right: "MMXXVI",
    },
  },
} as const

export type Dictionary = (typeof dictionaries)["en"]
