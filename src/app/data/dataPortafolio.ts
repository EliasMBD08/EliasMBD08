import { Data } from '../interfaces/dataLanguageSection';

export const data: Data = {
  spanish: {
    iconLanguage: {
      url: '/images/icons/usa.svg',
      alt: 'English',
      tooltip: 'English',
      code: 1,
    },
    sidebar: [
      {
        title: 'Inicio',
        linkto: 'inicio',
      },
      {
        title: 'Proyectos',
        linkto: 'proyectos',
      },
      {
        title: 'Curriculum',
        linkto: 'curriculum',
      },
      {
        title: 'Contacto',
        linkto: 'contacto',
      },
    ],
    resume: {
      saludo: 'Hola a todos',
      nombre: 'Soy Elias Marcos',
      titulo: 'Ingeniero de sistemas y desarrollador de software',
      desc: 'Apasionado desarrollador web full stack y estudiante de ingeniería de sistemas en la Universidad Nacional Mayor de San Marcos. Combino mi sólida formación académica con experiencia práctica en el desarrollo de soluciones web innovadoras y eficientes. Soy competente en tecnologías como Django, Node.js, React y Angular, y tengo una trayectoria comprobada en automatización de procesos, desarrollo de RPA con Python. Mi objetivo es crear aplicaciones funcionales y atractivas, optimizar el rendimiento y aportar valor real a cada proyecto en el que participo.',
    },
    projects: {
      title: 'Proyectos',
      items: [
        {
          id: 4,
          image: '/images/projects/fact_sys.webp',
          link: 'https://www.bitnova.devmb.top/',
          title: 'Sistema de Facturación e Inventario',
          desc: 'Desarrollé una plataforma integral de facturación e inventario con integración a APIs para verificación de usuarios mediante DNI o RUC, conectada a SUNAT para la emisión de facturas y boletas electrónicas. El sistema incluye gestión de ventas, control de inventario, administración de clientes y un dashboard interactivo para monitorear el crecimiento y el rendimiento del negocio.',
        },
        {
          id: 3,
          image: '/images/projects/form_polos.webp',
          link: 'https://forms.alianzamanchay.org/form-polos',
          title: 'Formulario para Venta de Polos',
          desc: 'Creé una aplicación web de ventas en línea para una empresa textil con amplia experiencia en el sector, diseñada para facilitar la compra de polos en diversos tamaños y estilos. Los clientes registran sus pedidos en línea y el equipo de ventas los valida y confirma al momento de la entrega, optimizando el proceso de ventas y distribución.',
        },
        {
          id: 2,
          image: '/images/projects/alianzamanchay.org.webp',
          link: 'https://alianzamanchay.org',
          title: 'Sitio Web de la Alianza de Manchay',
          desc: 'Desarrollé un sitio web administrable (CMS) para la Iglesia Alianza Cristiana y Misionera en Manchay, orientado a mejorar la gestión de contenido y la comunicación con la congregación y el público en general. La plataforma permite actualizaciones ágiles de eventos, ministerios y programas académicos.',
        },
        {
          id: 1,
          image: '/images/projects/grafimar.com.webp',
          link: 'https://cgrafimar.com/',
          title: 'Sitio Web de Corporación Grafimar SAC',
          desc: 'Diseñé y desarrollé un sitio web moderno e intuitivo para Grafimar SAC, empresa líder en el sector de imprenta, con el fin de optimizar la gestión de servicios de impresión y mejorar la comunicación con sus clientes. La plataforma permite un seguimiento eficiente de pedidos y actualizaciones de servicio.',
        },
      ],
    },
    curriculum: {
      perfil: {
        title: 'Perfil',
        desc: 'Soy estudiante de 9no ciclo de la carrera de Ingeniería de Sistemas en la Universidad Nacional Mayor de San Marcos, con experiencia práctica en el desarrollo de sistemas y aplicaciones web. He adquirido valiosas habilidades en diseño y desarrollo de software, así como en la automatización de procesos de TI. Además, he trabajado en proyectos personales y autodidactas que han mejorado mis conocimientos y habilidades técnicas, permitiéndome aplicar conceptos avanzados en entornos del mundo real y desafiarme continuamente en la creación de soluciones innovadoras.',
      },
      experiences: {
        title: 'Experiencia',
        items: [
          {
            id: 2,
            rol: 'Desarrollador Full Stack y Especialista en Automatización de Procesos',
            company: 'Inversiones Madrisqui SAC - Surquillo, Lima, Perú',
            duration: 'Dic 2023 - Jul 2025',
            desc: 'Me desempeño desarrollando soluciones de software robustas y automatizando procesos de negocio. Trabajo con tecnologías como Django, Node.js, Angular, React, PostgreSQL y MySQL. He creado bots en Python para RPA y Web Scraping, generado informes avanzados en Excel y manipulado datos para obtener información valiosa para la toma de decisiones. Además, diseño e implemento canales de prueba automatizados que garantizan la calidad, seguridad y eficiencia de las aplicaciones. También optimizo aplicaciones existentes, integro nuevas funcionalidades según las necesidades del negocio y brindo soporte de TI, incluyendo configuración de dominios en Windows, administración de usuarios y tareas de gestión de sistemas.',
          },
          {
            id: 1,
            rol: 'Asistente de Ingeniería de Datos y Plataformas en la Nube',
            company: 'Lima, Perú',
            duration: 'Dic 2022 - Ene 2023',
            desc: 'Apoyé en el diseño, implementación y gestión de bases de datos en la nube utilizando Azure SQL Database y otras soluciones de Microsoft Azure. Me encargué de la configuración y mantenimiento para asegurar la disponibilidad, seguridad e integridad de los datos. Participé en la creación y programación de flujos ETL en Azure Data Factory, configurando y conectando actividades de extracción, transformación y carga para garantizar procesos de datos eficientes y escalables. Además, trabajé con Databricks y PySpark para procesar grandes volúmenes de datos, optimizar pipelines y generar información valiosa a partir de datos distribuidos.',
          },
        ],
      },
      education: {
        title: 'Educación',
        items: [
          {
            id: 1,
            rol: 'Ingeniería de Sistemas',
            company: 'Universidad Nacional Mayor de San Marcos',
          },
        ],
      },
    },
    buttons: {
      downloadCV: {
        text: 'Descargar CV',
        link: '/files/cv_2025.pdf',
      },
    }
  },
  english: {
    iconLanguage: {
      url: '/images/icons/peru.svg',
      alt: 'Español',
      tooltip: 'Español',
      code: 2,
    },
    sidebar: [
      {
        title: 'Home',
        linkto: 'home',
      },
      {
        title: 'Projects',
        linkto: 'projects',
      },
      {
        title: 'Curriculum',
        linkto: 'curriculum',
      },
      {
        title: 'Contact',
        linkto: 'contact',
      },
    ],
    resume: {
      saludo: 'Hey there',
      nombre: "I'm Elias Marcos",
      titulo: 'System Engineer and Software Developer',
      desc: 'I am a passionate full stack web developer and systems engineering student at the Universidad Nacional Mayor de San Marcos. I combine my solid academic training with practical experience in developing innovative and efficient web solutions. I am proficient in technologies such as Django, Node.js, React, and Angular, and have a proven track record in process automation, Python RPA development. My focus is on creating functional and attractive applications, optimizing performance and bringing real value to every project I get involved in.',
    },
    projects: {
      title: 'Projects',
      items: [
        {
          id: 4,
          image: '/images/projects/fact_sys.webp',
          link: 'https://www.bitnova.devmb.top/',
          title: 'Invoicing and Inventory System',
          desc: 'I developed a comprehensive billing and inventory platform integrated with APIs for user verification via DNI or RUC, connected to SUNAT for issuing electronic invoices and receipts. The system includes sales management, inventory control, customer administration, and an interactive dashboard to track business growth and performance.',
        },
        {
          id: 3,
          image: '/images/projects/form_polos.webp',
          link: 'https://forms.alianzamanchay.org/form-polos',
          title: 'Event T-Shirt Ordering Form',
          desc: 'I created an online sales application for a textile company with extensive industry experience, designed to streamline the purchase of t-shirts in various sizes and styles. Customers place their orders online, and the sales team validates and confirms them upon delivery, optimizing both sales and distribution processes.',
        },
        {
          id: 2,
          image: '/images/projects/alianzamanchay.org.webp',
          link: 'https://alianzamanchay.org',
          title: 'Alianza de Manchay web site',
          desc: 'I developed a manageable website (CMS) for the Christian and Missionary Alliance Church in Manchay, aimed at improving content management and communication with both the congregation and the general public. The platform enables easy updates of events, ministries, and academic programs.',
        },
        {
          id: 1,
          image: '/images/projects/grafimar.com.webp',
          link: 'https://cgrafimar.com/',
          title: 'Corporación Grafimar SAC web site',
          desc: 'I designed and developed a modern and intuitive website for Grafimar SAC, a leading company in the printing sector, to optimize service management and enhance client communication. The platform enables efficient tracking of orders and service updates.',
        },
      ],
    },
    curriculum: {
      perfil: {
        title: 'Full Stack Developer',
        desc: 'I am a ninth-semester Systems Engineering student at the National University of San Marcos, with practical experience developing systems and web applications. I have acquired valuable skills in software design and development, as well as IT process automation. I have also worked on personal and self-taught projects that have enhanced my technical knowledge and skills, allowing me to apply advanced concepts in real-world environments and continually challenge myself in creating innovative solutions.',
      },
      experiences: {
        title: 'Experience',
        items: [
          {
            id: 2,
            rol: 'Full Stack Developer and Process Automation Specialist',
            company: 'Inversiones Madrisqui SAC - Surquillo, Lima, Peru',
            duration: 'Dec 2023 - Jul 2025',
            desc: 'I work on developing robust software solutions and automating business processes. I use technologies such as Django, Node.js, Angular, React, PostgreSQL, and MySQL. I have built Python bots for RPA and Web Scraping, created advanced Excel reports, and manipulated data to generate valuable insights for decision-making. In addition, I design and implement automated testing pipelines that ensure the quality, security, and efficiency of applications. I also optimize existing applications, integrate new features based on business needs, and provide IT support, including Windows domain configuration, user management, and other system administration tasks.',
          },
          {
            id: 1,
            rol: 'Data Engineering and Cloud Platforms Assistant',
            company: 'Lima, Peru',
            duration: 'Dec 2022 - Jan 2023',
            desc: 'I supported the design, implementation, and management of cloud databases using Azure SQL Database and other Microsoft Azure solutions. I handled configuration and maintenance tasks to ensure data availability, security, and integrity. I participated in the creation and scheduling of ETL workflows in Azure Data Factory, configuring and connecting extraction, transformation, and load activities to ensure efficient and scalable data processes. In addition, I worked with Databricks and PySpark to process large volumes of data, optimize pipelines, and generate valuable insights from distributed data.',
          },
        ],
      },
      education: {
        title: 'Education',
        items: [
          {
            id: 1,
            rol: 'Systems Engineering',
            company: 'National University of San Marcos',
          },
        ],
      },
    },
    buttons: {
      downloadCV: {
        text: 'Download CV',
        link: '/files/cv_2025.pdf',
      },
    }
  },
};
