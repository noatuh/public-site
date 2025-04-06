// This file contains star data with positions, magnitudes and colors
const starData = [
    // Format: [x, y, z, magnitude, color]
    // Brighter stars from major constellations
    // Northern Hemisphere
    [10, 15, 90, 1.5, 0xFFD700], // Polaris (North Star)
    [80, 30, 60, 0.8, 0xFFFFFF], // Vega
    [70, -20, 40, 1.2, 0xFFA500], // Deneb
    [60, 10, 30, 1.0, 0xFFFFFF], // Altair
    [20, 40, 50, 1.7, 0xFFB6C1], // Arcturus
    [-50, 30, 40, 1.3, 0xB0E0E6], // Capella
    
    // Ursa Major (Big Dipper)
    [50, 60, 40, 1.8, 0xFFFFFF], // Dubhe
    [55, 65, 43, 1.9, 0xFFFFFF], // Merak
    [60, 62, 38, 2.0, 0xFFFFFF], // Phecda
    [65, 59, 36, 2.1, 0xFFFFFF], // Megrez
    [70, 56, 39, 1.7, 0xFFFFFF], // Alioth
    [75, 53, 42, 1.8, 0xFFFFFF], // Mizar
    [80, 50, 45, 2.2, 0xFFFFFF], // Alkaid
    
    // Orion constellation
    [-30, -10, 60, 0.5, 0xB3E0FF], // Rigel
    [-25, 0, 58, 0.4, 0xFFA07A], // Betelgeuse
    [-27, -5, 55, 1.5, 0xFFFFFF], // Bellatrix
    [-22, -8, 52, 1.7, 0xFFFFFF], // Mintaka
    [-21, -10, 53, 1.6, 0xFFFFFF], // Alnilam
    [-19, -12, 51, 1.7, 0xFFFFFF], // Alnitak
    [-18, -15, 57, 1.8, 0xFFFFFF], // Saiph

    // Southern Hemisphere
    [-60, -50, -30, 0.1, 0xFFFFFF], // Sirius
    [-40, -60, -50, 0.6, 0xFFF8DC], // Canopus
    [20, -70, -40, 0.3, 0xFFFFFF], // Alpha Centauri
    [30, -80, -30, 1.4, 0xFFFFFF], // Beta Centauri
    [10, -60, -65, 1.0, 0xFFA07A], // Antares
    [-80, -30, -30, 1.2, 0xFFFFFF], // Fomalhaut
    
    // Add 100 random stars
    ...[...Array(100)].map(() => [
        (Math.random() - 0.5) * 200,  // x
        (Math.random() - 0.5) * 200,  // y
        (Math.random() - 0.5) * 200,  // z
        Math.random() * 2 + 2,        // magnitude (dimmer)
        0xFFFFFF                      // color (white)
    ])
];