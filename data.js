const PORTFOLIO_DATA = [
    {
        id: 1,
        title: "Basic Gun Framework",
        category: "systems",
        description: "A clean, tool-based gun framework with configurable damage, fire rate, and ammo — a solid foundation for any combat game.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/835d1152c99ef8f96e7ec0f808e236ae.mp4",
        link: "https://gyazo.com/835d1152c99ef8f96e7ec0f808e236ae",
        techStack: ["Combat", "Weapons", "Tools"]
    },
    {
        id: 2,
        title: "Advanced Gun Framework",
        category: "systems",
        description: "Advanced tool based gun framework with OTS, togglable right/left shoulder camera positions, and full configurations (recoil, ammo, damage, range, fire rate, spread).",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/d5be2f25d84e6e0f54565ad8213a72b5.mp4",
        link: "https://gyazo.com/d5be2f25d84e6e0f54565ad8213a72b5",
        techStack: ["Combat", "Camera", "Weapons"]
    },
    {
        id: 3,
        title: "View-Model Gun Framework",
        category: "systems",
        description: "First-person view model weapon system featuring the same advanced configurations inside a highly optimized view model framework.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/053ab5d3659155ee348acb583a289805.mp4",
        link: "https://gyazo.com/053ab5d3659155ee348acb583a289805",
        techStack: ["FPS", "ViewModels", "Combat"]
    },
    {
        id: 4,
        title: "Melee Combat System",
        category: "systems",
        description: "Tool-based melee combat featuring perfectly synced combo animations alongside accurate hit detection and damage sync.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/fe0122fd622cd90cfeb57f9ff40e9165.mp4",
        link: "https://gyazo.com/fe0122fd622cd90cfeb57f9ff40e9165",
        techStack: ["Hitboxes", "Animations", "Melee"]
    },
    {
        id: 5,
        title: "Advanced Fishing System",
        category: "minigames",
        description: "Fisch-inspired mechanic with perfect line casting, animation syncing, fish rarities, and interactive reeling.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/58ce910006c412ee389fcc6672288a1f.mp4",
        link: "https://gyazo.com/58ce910006c412ee389fcc6672288a1f",
        techStack: ["Mechanics", "Data", "Minigame"]
    },
    {
        id: 6,
        title: "Custom Intro Sequence",
        category: "ui",
        description: "A polished, custom intro sequence to welcome players into the game with smooth camera transitions and animated UI elements.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/5b9c85fb028eb07f536d4ed5049e422d.mp4",
        link: "https://gyazo.com/5b9c85fb028eb07f536d4ed5049e422d",
        techStack: ["Cinematics", "UI Design", "Tweening"]
    },
    {
        id: 7,
        title: "Basic Building System",
        category: "systems",
        description: "A grid-based building system allowing players to place, rotate, and remove structures with snap-to-grid functionality.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/16bae360e088adfae1a95cab50ef6daa.mp4",
        link: "https://gyazo.com/16bae360e088adfae1a95cab50ef6daa",
        techStack: ["Building", "Grid", "Placement"]
    },
    {
        id: 8,
        title: "Basic Car Customization System",
        category: "systems",
        description: "A car customization system featuring color, decal, and part swapping with live preview and persistent data saving.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/1600a13fbfcf81c9056c829c2d2fb5fb.mp4",
        link: "https://gyazo.com/1600a13fbfcf81c9056c829c2d2fb5fb",
        techStack: ["Vehicles", "Customization", "DataStores"]
    },
    {
        id: 9,
        title: "Party System",
        category: "systems",
        description: "A full party system allowing players to group up, invite friends, and join the same server together seamlessly.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/5ff5c87a23e34c4130a7ab2079c36926.mp4",
        link: "https://gyazo.com/5ff5c87a23e34c4130a7ab2079c36926",
        techStack: ["Networking", "Social", "Teleportation"]
    },
    {
        id: 10,
        title: "Queue System",
        category: "systems",
        description: "A matchmaking queue system that groups players and teleports them to game servers when a match is ready.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/482530d90fa611d17bd12d85107627b5.mp4",
        link: "https://gyazo.com/482530d90fa611d17bd12d85107627b5",
        techStack: ["Matchmaking", "Teleportation", "Networking"]
    },
    {
        id: 11,
        title: "Character Selection System",
        category: "ui",
        description: "A character selection screen with animated previews, smooth transitions, and persistent character data across sessions.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/e76c30741ad9f12491e256e1dcfda17c.mp4",
        link: "https://gyazo.com/e76c30741ad9f12491e256e1dcfda17c",
        techStack: ["UI Design", "Characters", "DataStores"]
    },
    {
        id: 12,
        title: "Murder Mystery System",
        category: "minigames",
        description: "A full murder mystery game mode with role assignment, detective mechanics, and complete round management.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/71936cabac651c6e51810196bdcc2d78.mp4",
        link: "https://gyazo.com/71936cabac651c6e51810196bdcc2d78",
        techStack: ["Gamemodes", "Role Assignment", "Round Management"]
    },
    {
        id: 13,
        title: "Advanced ATM & Banking",
        category: "systems",
        description: "Comprehensive economy system featuring character slot data, bank/cash balances, and full deposit/withdrawal/transfer functions.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/2fd09978a9d48b953de8e20ada098289.mp4",
        link: "https://gyazo.com/2fd09978a9d48b953de8e20ada098289",
        techStack: ["DataStores", "Economy", "Security"]
    },
    {
        id: 14,
        title: "Multi-Camera Surveillance System",
        category: "systems",
        description: "Security or cinematic camera system offering sliding track mounts, player following, and part whitelisting for rendering.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/0223e5f67a370c4a1d642b5b21a8396a.mp4",
        link: "https://gyazo.com/0223e5f67a370c4a1d642b5b21a8396a",
        techStack: ["ViewportFrames", "Camera", "Render"]
    }
];

// Instructions for the User:
/*
================================================================================
HOW TO ADD NEW PROJECTS:
1. Copy one of the blocks above (from '{' to '}').
2. Add a comma after the last block, paste the new block.
3. Edit the fields:
   - title: Name of your project
   - category: Must be exactly "ui", "systems", or "minigames"
   - description: 1-2 sentences about the project
   - mediaType: put "video" for gyazo clips, "image" for gyazo images
   - mediaUrl: The direct image/gif/mp4 URL (eg: https://i.gyazo.com/your-id.mp4)
   - link: The link clients go to when they click the view button.
   - techStack: An array of strings highlighting skills used.
================================================================================
*/
