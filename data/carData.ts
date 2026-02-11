export const carData = {
    name: "McLaren Speedtail",
    tagline: "The Ultimate Hyper-GT",
    price: "$2,250,000",
    year: "2020",

    hero: {
        title: "SPEEDTAIL",
        subtitle: "McLaren",
        description:
            "The fastest McLaren ever made. A 1,055 HP hybrid hyper-GT engineered to reach 250 mph — a streamlined teardrop of carbon fiber, aerodynamic purity, and relentless speed.",
        cta: "Inquire Now",
    },

    design: {
        title: "DESIGN",
        subtitle: "Aerodynamic Perfection",
        description:
            "Every surface of the Speedtail is sculpted by airflow. The elongated carbon fiber body — stretching 5.2 metres — creates the most aerodynamically efficient McLaren ever. Retractable digital rear-view cameras replace mirrors, active rear ailerons adjust dynamically, and electrochromic glass dims at the touch of a button. The central driving position, inherited from the legendary F1, places the driver at the heart of the machine.",
        highlights: [
            "Central driving position",
            "Retractable digital cameras",
            "Active rear ailerons",
            "Electrochromic glass roof",
        ],
    },

    engine: {
        title: "ENGINE",
        subtitle: "Hybrid Powertrain",
        specs: {
            engine: "4.0L Twin-Turbo V8 Hybrid",
            power: "1,055 HP",
            torque: "1,150 Nm",
            topSpeed: "250 mph (403 km/h)",
            acceleration: "0-186 mph in 12.8s",
            transmission: "7-Speed SSG",
        },
    },

    specifications: [
        {
            category: "Performance",
            items: [
                { label: "Top Speed", value: "250 mph" },
                { label: "0-186 mph", value: "12.8 s" },
                { label: "0-124 mph", value: "6.6 s" },
                { label: "Power-to-Weight", value: "672 HP/ton" },
            ],
        },
        {
            category: "Powertrain",
            items: [
                { label: "Engine", value: "4.0L V8 Hybrid" },
                { label: "Total Output", value: "1,055 HP" },
                { label: "Electric Motor", value: "310 HP" },
                { label: "Battery", value: "Lithium-Ion" },
            ],
        },
        {
            category: "Dimensions",
            items: [
                { label: "Length", value: "5,137 mm" },
                { label: "Width", value: "2,045 mm" },
                { label: "Height", value: "1,120 mm" },
                { label: "Dry Weight", value: "1,430 kg" },
            ],
        },
        {
            category: "Aerodynamics",
            items: [
                { label: "Drag Coefficient", value: "Lowest ever" },
                { label: "Active Ailerons", value: "Rear" },
                { label: "Underbody", value: "Full carbon" },
                { label: "Cooling", value: "Active intakes" },
            ],
        },
    ],

    features: [
        {
            title: "Electrochromic Glass",
            description:
                "The Speedtail's roof and windshield feature electronically dimmable glass, transitioning from transparent to opaque at the touch of a button.",
            icon: "◈",
        },
        {
            title: "Flexible OLED Displays",
            description:
                "Curved instrument displays wrap around the driver, providing vital information in the central seating position with stunning clarity.",
            icon: "◎",
        },
        {
            title: "Carbon Fiber Monocoque",
            description:
                "The MonoCage III structure is the lightest and strongest McLaren chassis ever, enabling a dry weight of just 1,430 kg despite hybrid systems.",
            icon: "⬡",
        },
        {
            title: "Velocity Mode",
            description:
                "Engage Velocity Mode to unlock the full 250 mph top speed. The car lowers, stiffens, and optimises every system for maximum straightline performance.",
            icon: "▲",
        },
        {
            title: "Central Driving Position",
            description:
                "Inspired by the iconic McLaren F1, the driver sits centrally with a passenger seat on each side — a layout that puts you at the absolute centre of the experience.",
            icon: "◉",
        },
        {
            title: "Digital Rear-View",
            description:
                "Traditional mirrors are replaced by retractable high-definition cameras, feeding live imagery to screens inside the cabin while reducing aerodynamic drag.",
            icon: "◆",
        },
    ],

    sequence: {
        totalFrames: 60,
        folderPath: "/images/speedtail-sequence",
        filenamePattern: "grok-video-283cbf36-b69b-48e5-8999-8144093c2323_",
        extension: ".jpg",
        padLength: 3,
    },
};
