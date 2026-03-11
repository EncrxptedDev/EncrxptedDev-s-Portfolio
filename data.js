const PORTFOLIO_DATA = [
    {
        id: 1,
        title: "Advanced Combat System",
        category: "systems",
        description: "A fully replicated, lag-compensated melee combat system with custom hitboxes, block breaking, and parrying mechanics.",
        mediaType: "image", // 'image' or 'video'
        mediaUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Replace with your Gyazo image/gif link (.jpg, .png, .gif)
        link: "https://gyazo.com/your-gyazo-link", // Link when they click "View Project"
        techStack: ["Roblox Lua", "Raycasting", "Client-Server Sync"]
    },
    {
        id: 2,
        title: "Modern Settings UI",
        category: "ui",
        description: "A sleek, responsive settings panel with keybind rebinding, smooth transitions, and data persistence using DataStoreService.",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Replace with Gyazo link
        link: "https://gyazo.com/your-gyazo-link",
        techStack: ["UI/UX", "TweenService", "DataStores"]
    },
    {
        id: 3,
        title: "Round-Based Minigame Core",
        category: "minigames",
        description: "A modular framework for round-based games. Handles map loading, team allocation, custom timers, and win/loss conditions seamlessly.",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Replace with Gyazo link
        link: "https://gyazo.com/your-gyazo-link",
        techStack: ["Game Architecture", "Modules", "Server Logic"]
    },
    {
        id: 4,
        title: "Vehicle Chassis Modification",
        category: "systems",
        description: "Custom suspension and friction tweaking for an existing chassis to create realistic drifting physics for racing games.",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1596541655079-883a936a7ed2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Replace with Gyazo link
        link: "https://gyazo.com/your-gyazo-link",
        techStack: ["Physics", "AssemblyLinearVelocity", "Math"]
    },
    {
        id: 5,
        title: "Inventory & Trading System",
        category: "ui",
        description: "A secure trading UI with grid-based inventory, item dragging/dropping, and server-side trade validation to prevent duplication exploits.",
        mediaType: "image",
        mediaUrl: "https://images.unsplash.com/photo-1628155930542-3c7a64e2c848?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // Replace with Gyazo link
        link: "https://gyazo.com/your-gyazo-link",
        techStack: ["Security", "RemoteEvents", "UI List Layout"]
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
   - category: Must be exactly "ui", "systems", or "minigames" (or add your own in index.html)
   - description: 1-2 sentences about the project
   - mediaType: put "image" (use this if linking via gyazo direct image link .png/.gif)
   - mediaUrl: The direct image/gif URL (e.g., https://i.gyazo.com/yourstuff.gif)
   - link: The link clients go to when they click the view button.
   - techStack: An array of strings highlighting skills used.
================================================================================
*/
