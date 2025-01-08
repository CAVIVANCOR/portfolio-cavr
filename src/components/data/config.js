const animationDuration=2;
import logoEsmeralda from '../../assets/EsmeraldaLogo.png';
import logoInpelsa from '../../assets/logoInpelsa.png';
export const variants = {
    initial:{
        pathLength: 0,
        strokeOpacity: 1,
        fillOpacity: 0,
    },
    animate: {
        pathLength: 1,
        strokeOpacity: 0,
        fillOpacity: 1,
        transition: {
            duration: animationDuration,
            ease: "easeInOut",
            strokeOpacity: {
                delay: animationDuration,
            },
            fillOpacity: {
                delay: animationDuration,
            }
        }
    }
};

export const socialIcons = [
    {
        id: 1,
        name: "Instagram",
        path: "M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5.67-1.5 1.5-1.5zm-5 3c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6 2.69-6 6-6zm0 1.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9z",
        viewBox: "0 0 24 24",
        link: "https://www.instagram.com"
    },
    {
        id: 2,
        name: "LinkedIn",
        path: "M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8.82 19H6.09v-7.72h2.73V19zM7.45 10.5C6.36 10.5 5.5 9.64 5.5 8.55s.86-1.95 1.95-1.95 1.95.86 1.95 1.95-.86 1.95-1.95 1.95zM19 19h-2.73v-4.2c0-1-.02-2.28-1.39-2.28-1.39 0-1.6 1.09-1.6 2.22V19H10.5v-7.72h2.62v1.05h.03c.36-.67 1.24-1.38 2.56-1.38 2.74 0 3.25 1.81 3.25 4.17V19z",
        viewBox: "0 0 24 24",
        link: "https://www.linkedin.com"
    },
    {
        id: 3,
        name: "GitHub",
        path: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.55-1.39-1.34-1.75-1.34-1.75-1.09-.75.08-.74.08-.74 1.2.08 1.83 1.24 1.83 1.24 1.08 1.84 2.83 1.31 3.52 1 .11-.78.42-1.31.76-1.61-2.67-.31-5.48-1.34-5.48-5.97 0-1.32.47-2.41 1.23-3.26-.12-.3-.54-1.52.11-3.17 0 0 1-.32 3.3 1.24a11.47 11.47 0 013-.41c1.02.01 2.05.14 3 .41 2.3-1.56 3.3-1.24 3.3-1.24.65 1.65.23 2.87.11 3.17.77.85 1.23 1.94 1.23 3.26 0 4.64-2.82 5.66-5.5 5.96.43.37.81 1.1.81 2.21v3.28c0 .32.22.7.83.58A12.01 12.01 0 0024 12c0-6.63-5.37-12-12-12z",
        viewBox: "0 0 24 24",
        link: "https://www.github.com"
    },
    {
        id: 4,
        name: "TikTok",
        path: `
            M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.05 8.22c-.5.07-.99-.09-1.4-.34-.44-.26-.83-.62-1.17-1.03v4.25c-.29 1.85-2.01 3.14-3.89 2.88-1.55-.22-2.65-1.54-2.65-3.11a3.14 3.14 0 013.14-3.15c.23 0 .45.03.67.08v1.7c-.21-.1-.43-.15-.67-.15a1.45 1.45 0 00-1.45 1.45 1.45 1.45 0 002.9 0V5h1.93c.12 1.56 1.4 2.78 2.97 2.94v2.28z
        `,
        viewBox: "0 0 24 24",
        link: "https://www.tiktok.com"
    }
];

export const numbers=[
    {id:1,number:12,title:'Proyectos Creados'},
    {id:2,number:4,title:'Proyectos Web'},
    {id:3,number:32,title:'Clientes Satisfechos'},
    {id:4,number:20,title:'Años de Experiencia'},
]

export const services=[
    {id:1,title:'Desarrollo Web',description:'Desarrollo de sitios web personalizados para tu negocio o empresa. Desarrollo de sitios web personalizados para tu negocio o empresa.'},
    {id:2,title:'Diseño Web',description:'Diseño de sitios web personalizados para tu negocio o empresa. Diseño de sitios web personalizados para tu negocio o empresa.'},
    {id:3,title:'Desarrollo de Aplicaciones Moviles',description:'Desarrollo de aplicaciones móviles personalizadas para tu negocio o empresa. Desarrollo de aplicaciones móviles personalizadas para tu negocio o empresa.'},
    {id:4,title:'Desarrollo de Aplicaciones a Medida',description:'Desarrollo de aplicaciones a medida para tu negocio o empresa. Desarrollo de aplicaciones a medida para tu negocio o empresa.'},
    {id:5,title:'Marketing Digital',description:'Marketing digital para tu negocio o empresa. Marketing digital para tu negocio o empresa.'},
    {id:6,title:'Consultoría',description:'Consultoría para tu negocio o empresa. Consultoría para tu negocio o empresa.'},
    {id:7,title:'Soporte Técnico',description:'Soporte técnico para tu negocio o empresa. Soporte técnico para tu negocio o empresa.'},
]

export const skills=[
{
    skill:"React",
    percentage:90,
    icon:"https://img.icons8.com/office/40/react.png"
},
{
    skill:"React Native",
    percentage:80,
    icon:"https://img.icons8.com/color/48/react-native.png"
},
{
    skill:"Javascript",
    percentage:80,
    icon:"https://img.icons8.com/color/48/javascript.png"
},
{
    skill:"HTML",
    percentage:80,
    icon:"https://img.icons8.com/color/48/html-5.png"
},
{
    skill:"CSS",
    percentage:80,
    icon:"https://img.icons8.com/color/48/css3.png"
},
{
    skill:"Tailwindcss",
    percentage:80,
    icon:"https://img.icons8.com/color/48/tailwindcss.png"
},
{
    skill:"Git",
    percentage:50,
    icon:"https://img.icons8.com/color/48/git.png"
},
{
    skill:"GitHub",
    percentage:50,
    icon:"https://img.icons8.com/color/48/github.png"
},
{
    skill:"Jira",
    percentage:60,
    icon:"https://img.icons8.com/color/48/jira.png"
},
{
    skill:"PostgreSQL",
    percentage:80,
    icon:"https://img.icons8.com/color/48/postgreesql.png"
},
{
    skill:"Express",
    percentage:80,
    icon:"https://img.icons8.com/color/48/express.png"
},
{
    skill:"Node.js",
    percentage:80,
    icon:"https://img.icons8.com/color/48/nodejs.png"
},
]


export const experience=[
    {
        id:1,
        title:'Analista de Sistemas Senior',
        company:'Darma S.A.',
        year:'2003 - 2005',
        description:'Desarrollé con maestría el análisis, diseño e implementación del ERP para notarías, Sistema DARMA de Gestion Notarial y Administrativo desarrollado a la medida contempla todos los servicios notariales, procesos administrativos, utilizando 4D herramienta de programación RAD multiplataforma con base de datos relacional.',
        icon:'https://www.darmasa.com/wp-content/uploads/2017/04/widget-logo.png'
    },
    {
        id:2,
        title:'Jefe de Proyecto',
        company:'Esmeralda Corp SAC',
        year:'2007 - 2016',
        description:'Fui el líder en el análisis, diseño e implementación del ERP para el grupo de empresas, empleando 4D avanzada herramienta de programación RAD multiplataforma con motor de base de datos relacional. Logré una integración exitosa con el sistema contable financiero AS/400. Implementé con éxito el control integral de almacén WMS con tecnología RFID.',
        icon:logoEsmeralda
    },
    {
        id:3,
        title:'Jefe de Proyecto',
        company:'Inversiones Pecuarias Lurin S.A.',
        year:'2017 - 2020',
        description:'Dirigí la automatización completa de la empresa, implementando una red VPN en tres sedes y desarrollando hardware y software para equipos industriales. Responsable del diseño y la implementación de todos los procesos productivos, el almacén y los pedidos de venta, tanto en línea como en la oficina, utilizando la versátil herramienta de programación 4D.',    
        icon:logoInpelsa
    },
]

export const education=[
    {
        id:1,
        degree:'Profesional Tecnico en Computación e Informatica',
        institution:'Instituto de Educación Superior Privado Cibertec S.A.C.',
        year:'1989-1991',
        details:'Cibertec inicia sus actividades en el año 1983 con la finalidad de presentar un proyecto alternativo de formación superior en el campo de la Computación e Informática; hoy Cibertec es el Primer Centro Autorizado de Enseñanza en el Perú. Cibertec es una institución educativa líder en el campo de la tecnología y la informática. Con una sólida trayectoria y un enfoque innovador, Cibertec brinda a sus estudiantes las herramientas necesarias para destacar en un mundo digital en constante evolución.',
        icon:'https://upload.wikimedia.org/wikipedia/commons/a/ac/CibertecLogo.jpg'
    },
    {
        id:2,
        degree:'Full Stack Web Developer',
        institution:'Henry Bootcamp Academia de Desarrollo Web, Buenos Aires, Argentina.',
        year:'2022-2023',
        details:'Somos una academia experta en carreras de tecnología con foco en la práctica y la empleabilidad. Potenciamos el talento de las personas para conectarlas con las demandas del mercado laboral. Creemos que todas las personas deberían tener la oportunidad de incorporar herramientas digitales, construir carreras con futuro y ser parte de las compañías más prometedoras de Latinoamérica y el mundo. Aprende las habilidades más demandadas por el mercado. Accede a capacitaciones, workshops y un acompañamiento personalizado para tu búsqueda laboral.',
        icon:'https://www.soyhenry.com/_next/static/media/HenryLogo.bb57fd6f.svg'
    },
]