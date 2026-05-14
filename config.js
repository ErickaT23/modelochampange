const config = {
    event: {
        defaultEventId: "misxv-zoe-daniela-2026",
        eventIdParam: "eventId",
        legacyFallback: {
            read: false,
            write: false,
            subscribe: false
        }
    },

    admin: {
        adminKey: "twodesign123",
        keyParam: "key",
        legacyKeyParam: "admin"
    },

    seo: {
        titulo: "Zoe Daniela | Mis XV 2026",
        descripcion: "Mis Quince Años de Zoe Daniela - 30 de mayo de 2026",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Zoe Daniela",
        fecha: "30-05-2026",
        fechaVisible: "30.05.2026"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Iglesia Catedral",
            hora: "5:00 PM",
            direccion: "Quetzaltenango",
            ubicacionUrl: "https://maps.app.goo.gl/UR8YG5dqu9fzo5NeA"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Restaurante Don Carlos",
            hora: "7:00 PM",
            direccion: "Circunvalación Salcajá",
            ubicacionUrl: "https://maps.app.goo.gl/AHz7RSJHoNs1GPiV7"
        }
    },

    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#MisXVZoeDaniela",
        instagramUrl: "https://instagram.com/rocio.fernando.boda",
        facebookUrl: "https://facebook.com/rociofernandoboda",
        marcaTexto: "Diseno",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
