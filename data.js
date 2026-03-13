const PORTFOLIO_DATA = [
    {
        id: 1,
        title: "Tool Based Gun System",
        category: "systems",
        description: "An advanced firearms framework featuring over-the-shoulder (OTS) targeting and dynamic shoulder-swapping camera mechanics. It includes comprehensive configuration options for recoil, ammunition capacity, damage output, range, fire rate, and spread.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/bc6bfb17c7229272d1624a4072b7f5a1.mp4",
        link: "https://gyazo.com/bc6bfb17c7229272d1624a4072b7f5a1",
        techStack: ["Combat", "Camera", "Weapons"]
    },
    {
        id: 2,
        title: "View Model Gun System",
        category: "systems",
        description: "A meticulously optimized first-person view model weapon framework. It delivers high-fidelity combat mechanics while retaining extensive configuration capabilities for weapon behavior and performance optimization.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/5997f0c471b33124e489a0cca1022037.mp4",
        link: "https://gyazo.com/5997f0c471b33124e489a0cca1022037",
        techStack: ["FPS", "ViewModels", "Combat"]
    },
    {
        id: 3,
        title: "Cross-Platform Keybinds",
        category: "ui",
        description: "A versatile, cross-platform input controller offering seamless support for PC, Console, and Mobile devices. It provides unified handling for complex in-game actions such as pushing, blocking, sprinting, and throwing.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/17a2dff73e71a11ce46dce2b251dd85f.mp4",
        link: "https://gyazo.com/17a2dff73e71a11ce46dce2b251dd85f",
        techStack: ["InputService", "Cross-Platform", "UI"]
    },
    {
        id: 4,
        title: "Soccer Ball Physics",
        category: "minigames",
        description: "A sophisticated custom physics engine designed for highly responsive soccer mechanics. It enables fluid ball dribbling and integrates an intuitive power meter system for precise kicking control.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/af7e1dfd189b005a5379ec0a471e9ed1.mp4",
        link: "https://gyazo.com/af7e1dfd189b005a5379ec0a471e9ed1",
        techStack: ["Physics", "Sports", "Mechanics"]
    },
    {
        id: 5,
        title: "Melee Combat System",
        category: "systems",
        description: "An engaging tool-based melee combat system driven by perfectly synchronized combo animations. It ensures highly accurate server-side hit detection and flawless damage replication across all clients.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/1bca8ac9851325223698bd453d409f29.mp4",
        link: "https://gyazo.com/1bca8ac9851325223698bd453d409f29",
        techStack: ["Hitboxes", "Animations", "Melee"]
    },
    {
        id: 6,
        title: "Advanced Fishing System",
        category: "minigames",
        description: "A robust fishing minigame system featuring precision line casting and interactive reeling mechanics. It incorporates flawless animation synchronization and a scalable framework for diverse fish rarities.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/d6e03d8672d5bfa6a05ddfc82e61f7c9.mp4",
        link: "https://gyazo.com/d6e03d8672d5bfa6a05ddfc82e61f7c9",
        techStack: ["Mechanics", "Data", "Minigame"]
    },
    {
        id: 7,
        title: "Custom Intro Sequence",
        category: "ui",
        description: "A cinematic, fully customized introduction sequence designed to immediately immerse players. It utilizes smooth camera transitions and polished, animated user interface elements to elevate the game's initial impression.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/439777d32729c487c6dac0ff9b87732e.mp4",
        link: "https://gyazo.com/439777d32729c487c6dac0ff9b87732e",
        techStack: ["Cinematics", "UI Design", "Tweening"]
    },
    {
        id: 8,
        title: "Advanced ATM & Banking",
        category: "systems",
        description: "A comprehensive and secure in-game economy infrastructure. It features multiple character data slots, persistent bank and cash balances, alongside fully functional deposit, withdrawal, and player-to-player transfer capabilities.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/8789752bd85887646e1d2362ff146f91.mp4",
        link: "https://gyazo.com/8789752bd85887646e1d2362ff146f91",
        techStack: ["DataStores", "Economy", "Security"]
    },
    {
        id: 9,
        title: "Multi-Camera Display",
        category: "systems",
        description: "A highly versatile camera system applicable for both security surveillance and cinematic sequences. It supports sliding track mounts, smooth player tracking, and dynamic part whitelisting using ViewportFrames.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/433e7a7d2c6d9fe16098fe80c8878bcd.mp4",
        link: "https://gyazo.com/433e7a7d2c6d9fe16098fe80c8878bcd",
        techStack: ["ViewportFrames", "Camera", "Render"]
    },
    {
        id: 10,
        title: "Grid Based Building System",
        category: "systems",
        description: "A robust grid-based building system seamlessly integrated with player inventories. It features comprehensive functionality for placing, rotating, switching, and canceling blocks, ensuring precise and intuitive construction mechanics.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/cdd8744b1ff7eb5559d6e46029b5382b.mp4",
        link: "https://gyazo.com/cdd8744b1ff7eb5559d6e46029b5382b",
        techStack: ["Building", "Inventory", "Grid System"]
    },
    {
        id: 11,
        title: "Zone Based Party System",
        category: "systems",
        description: "An immersive zone-based party system designed to enhance multiplayer experiences. Ideal for story-driven and horror games, it facilitates seamless grouping and synchronized progression across targeted areas.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/2851f7c60b2f0a5ccb82b93ba9c8ec74.mp4",
        link: "https://gyazo.com/2851f7c60b2f0a5ccb82b93ba9c8ec74",
        techStack: ["Parties", "Zones", "Multiplayer"]
    },
    {
        id: 12,
        title: "Safe Robbing System",
        category: "systems",
        description: "A highly dynamic safe robbing system for in-game currency. It features realistic door hinge mechanics and perfect animation synchronization, delivering a high-stakes and engaging heist experience.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/cde3e830b702f3baa35e498b603e55c5.mp4",
        link: "https://gyazo.com/cde3e830b702f3baa35e498b603e55c5",
        techStack: ["Interactables", "Animation Sync", "Economy"]
    },
    {
        id: 13,
        title: "Tycoon System",
        category: "systems",
        description: "A versatile tycoon foundation focusing on fluid progression and expansion. It incorporates polished build and placement animations, providing players with a satisfying and visually rewarding growth cycle.",
        mediaType: "video",
        mediaUrl: "https://i.gyazo.com/7c6cc4277f818ea47be487c77c09307d.mp4",
        link: "https://gyazo.com/7c6cc4277f818ea47be487c77c09307d",
        techStack: ["Tycoon", "Building", "Progression"]
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
