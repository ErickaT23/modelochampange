const config = {
    event: {
        defaultEventId: "misxv-ana-maria-2026",
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
        titulo: "Ana María Herrera Morales | Mis XV 2026",
        descripcion: "Mis Quince Años de Ana María Herrera Morales - 10 de Octubre 2026",
        autor: "Two Design"
    },

    pareja: {
        nombres: "Ana María & Herrera Morales",
        fecha: "10-10-2026",
        fechaVisible: "10.10.2026"
    },

    musica: {
        titulo: "Nuestra Canción",
        archivo: "audio/nuestra-cancion.mp3"
    },

    evento: {
        ceremonia: {
            titulo: "Ceremonia",
            lugar: "Catedral del Espíritu Santo",
            hora: "5:00 PM",
            direccion: "Quetzaltenango",
            ubicacionUrl: "https://maps.app.goo.gl/aQxFWkmErYBQMzUx8"
        },
        recepcion: {
            titulo: "Recepción",
            lugar: "Restaurante Don Carlos, Circunvalación Salcajá",
            hora: "6:00 PM",
            direccion: "Salcajá",
            ubicacionUrl: "https://maps.app.goo.gl/Xj7gMRzDHDsdtHK8A"
        }
    },

    textos: {
        mensajeInvitado: "Eres muy especial para nosotros",
        mensajePases: "Hemos reservado para ti {pases} lugares especiales"
    },

    footer: {
        hashtag: "#MisXVanaMaria",
        instagramUrl: "https://instagram.com/rocio.fernando.boda",
        facebookUrl: "https://facebook.com/rociofernandoboda",
        marcaTexto: "Diseno",
        marcaNombre: "Two Design",
        marcaUrl: "https://twodesign.com"
    }
};

window.config = config;
